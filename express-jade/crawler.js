var http = require('http')
var cheerio = require('cheerio')
var url = 'http://www.imooc.com/learn/348'

function filterChapters(html) {
    var $ = cheerio.load(html)
}


http.get(url, (res) => {
    let html = ''
    res.on('data', data => {
        html += data
    })
    res.on('end', () => {

    })

}).on('error', () => {
    console.log('get error')
})