const async = require('async');
const agent = require('superagent');
const cheerio = require('cheerio');
const moment = require('moment');
const request = require('request');
const notifier = require('node-notifier');
var iconv = require('iconv-lite');
var Promise = require("bluebird");
const query = require('../mysql');
const {
    singerConfig,
    songConfig
} = require('../config');
const {
    limitLength,
    splitId,
    notify
} = require('../util');

function getProxyList() {
    var apiURL = 'http://www.66ip.cn/mo.php?sxb=&tqsl=100&port=&export=&ktip=&sxa=&submit=%CC%E1++%C8%A1&textarea=http%3A%2F%2Fwww.66ip.cn%2F%3Fsxb%3D%26tqsl%3D100%26ports%255B%255D2%3D%26ktip%3D%26sxa%3D%26radio%3Dradio%26submit%3D%25CC%25E1%2B%2B%25C8%25A1';

    return new Promise((resolve, reject) => {
        var options = {
            method: 'GET',
            url: apiURL,
            gzip: true,
            encoding: null,
            headers: {
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
                'Accept-Encoding': 'gzip, deflate',
                'Accept-Language': 'zh-CN,zh;q=0.8,en;q=0.6,zh-TW;q=0.4',
                'User-Agent': 'Mozilla/8.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36',
                'referer': 'http://www.66ip.cn/'
            },

        };

        request(options, function(error, response, body) {
            try {
                if (error) throw error;
                if (/meta.*charset=gb2312/.test(body)) {
                    body = iconv.decode(body, 'gbk');
                }
                var ret = body.match(/\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}:\d{1,4}/g);
                var ran = Math.floor(Math.random() * ret.length)
                resolve(ret[ran]);

            } catch (e) {
                return reject(e);
            }
        });
    })
}

const songCollect = () => {
    query('select max(singer) from song', [], (err, res, rs) => {
        let index = res[0]['max(singer)'] || 1;
        async.whilst(() => {
            return index <= 31252;
        }, (cb) => {
            // 从数据库中获取歌手姓名以及URL 然后开始遍历歌曲
            query('select name,url from singer where singer=?', [index], (err, res) => {
                if (!err) {
                    const singer = {
                            name: res[0].name,
                            url: res[0].url.trim()
                        }
                        // getProxyList().then((proxyurl) => {
                        //     songConfig.proxy = 'http://' + proxyurl;
                    agent(songConfig.common + singer.url)
                        .then(res => {
                            const $ = cheerio.load(res.text);
                            const content = $('#song-list-pre-cache textarea');
                            try {
                                const song = JSON.parse(content.text());
                                // limitLength(song, songConfig.len);
                                async.mapLimit(song, 1, (item, cbItem) => { // 并发数量N
                                    // 遍历前N首歌曲 并且获取评论数量
                                    const href = '/song?id=' + item.id;
                                    const id = item.commentThreadId;
                                    const title = item.name;
                                    const url = songConfig.comment + id + '?csrf_token=';
                                    songConfig.req.url = url;

                                    request(songConfig.req, (err, res, body) => {
                                        if (body) {
                                            const content = JSON.parse(body);
                                            const commet = content.total;
                                            query('insert into song(title,comment,url,name,singer) values(?,?,?,?,?)', [title, commet, href, singer.name, index], (err, response) => {
                                                if (err) {
                                                    // 说明歌曲重复 进行update操作
                                                    query('update song set title=?,comment=?,name=?,singer=? where url=?', [title, commet, singer.name, index, href], () => {});
                                                }
                                                // 插入数据完毕
                                                cbItem();
                                            })
                                        } else {
                                            console.log('未知错误');
                                            notify('错误', '未知错误');
                                            cbItem();
                                        }
                                    })

                                }, () => {
                                    console.log('歌手 ' + singer.name + ' 抓取完毕');
                                    index++;
                                    cb();
                                })
                            } catch (e) {
                                console.log(e)
                                index++;
                                cb();
                            }

                        })
                        .catch(err => {
                            // 错误处理
                            const errStr = err.toString();
                            if (errStr.includes('innerHTML')) {
                                // 页面404 直接跳到下一个歌手
                                console.log(err, singer.name + ' 页面丢失 请求的URL为' + songConfig.common + singer.url);
                                notify('请求超时', singer.name + ' 页面丢失 请求的URL为' + songConfig.common + singer.url);
                                index++;
                            } else {
                                // goto超时处理 或者服务器503
                                console.log(err, singer.name + ' 请求超时 即将重新请求 请求的URL为' + songConfig.common + singer.url);
                                notify('请求超时', singer.name + ' 请求超时 即将重新请求 请求的URL为' + songConfig.common + singer.url);
                            }
                            cb();
                        })
                        // })
                } else {
                    // 查询错误处理
                    console.log(err, 'singer ID ' + index);
                    notify('数据库查询错误', 'singer ID ' + index);
                    index++;
                    cb();
                }
            })
        })
    })
}


// const songCollect = () => {

//     query('select max(singer) from song', [], (err, res, rs) => {
//         let index = res[0]['max(singer)'] || 1;
//         async.whilst(() => {
//             return index <= 31252;
//         }, (cb) => {
//             // 从数据库中获取歌手姓名以及URL 然后开始遍历歌曲
//             query('select name,url from singer where singer=?', [index], (err, res) => {
//                 if (!err) {
//                     const singer = {
//                         name: res[0].name,
//                         url: res[0].url.trim()
//                     }
//                     agent(songConfig.common + singer.url)
//                         .then(res => {
//                             const $ = cheerio.load(res.text);
//                             const content = $('#song-list-pre-cache textarea');
//                             const song = JSON.parse(content.text());
//                             limitLength(song, songConfig.len);
//                             async.mapLimit(song, 1, (item, cbItem) => { // 并发数量N
//                                 // 遍历前N首歌曲 并且获取评论数量
//                                 const href = '/song?id=' + item.id;
//                                 const id = item.commentThreadId;
//                                 const title = item.name;
//                                 const url = songConfig.comment + id + '?csrf_token=';
//                                 songConfig.req.url = url;
//                                 request(songConfig.req, (err, res, body) => {
//                                     if (body) {
//                                         const content = JSON.parse(body);
//                                         const commet = content.total;
//                                         query('insert into song(title,comment,url,name,singer) values(?,?,?,?,?)', [title, commet, href, singer.name, index], (err, response) => {
//                                             if (err) {
//                                                 // 说明歌曲重复 进行update操作
//                                                 query('update song set title=?,comment=?,name=?,singer=? where url=?', [title, commet, singer.name, index, href], () => {});
//                                             }
//                                             // 插入数据完毕
//                                             cbItem();
//                                         })
//                                     } else {
//                                         console.log('未知错误');
//                                         notify('错误', '未知错误');
//                                         cbItem();
//                                     }
//                                 })
//                             }, () => {
//                                 console.log('歌手 ' + singer.name + ' 抓取完毕');
//                                 index++;
//                                 cb();
//                             })
//                         })
//                         .catch(err => {
//                             // 错误处理
//                             const errStr = err.toString();
//                             if (errStr.includes('innerHTML')) {
//                                 // 页面404 直接跳到下一个歌手
//                                 console.log(err, singer.name + ' 页面丢失 请求的URL为' + songConfig.common + singer.url);
//                                 notify('请求超时', singer.name + ' 页面丢失 请求的URL为' + songConfig.common + singer.url);
//                                 index++;
//                             } else {
//                                 // goto超时处理 或者服务器503
//                                 console.log(err, singer.name + ' 请求超时 即将重新请求 请求的URL为' + songConfig.common + singer.url);
//                                 notify('请求超时', singer.name + ' 请求超时 即将重新请求 请求的URL为' + songConfig.common + singer.url);
//                             }
//                             cb();
//                         })
//                 } else {
//                     // 查询错误处理
//                     console.log(err, 'singer ID ' + index);
//                     notify('数据库查询错误', 'singer ID ' + index);
//                     index++;
//                     cb();
//                 }
//             })
//         })
//     })

// }
module.exports = songCollect;