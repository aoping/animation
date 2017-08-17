{
    let a, b, rest;
    [a, b, ...rest] = [1, 2, 3, 4, 5];
    console.log(a, b, rest);
}

{
    let a, b;
    ({ a, b } = { a: 1, b: 2 });
    console.log(a, b);
}

{
    let a, b, c;
    [a, b, c = 3] = [1, 2]; // 前后个数不一样
    console.log(a, b, c);
}
// 交换
{
    let a = 1,
        b = 2;
    [a, b] = [b, a];
    console.log(a, b);
}
// 接受返回值
{
    function f() {
        return [1, 2]
    }
    let a, b;
    [a, b] = f()
    console.log(a, b);
}
// 选择性的接收返回值
{
    function f() {
        return [1, 2, 3, 4, 5]
    }
    let a, b, c;
    [a, , , b] = f()
    console.log(a, b);
}
// 
{
    function f() {
        return [1, 2, 3, 4, 5]
    }
    let a, b, c;
    [a, ...b] = f()
    console.log(a, b);
}

// 对象解构赋值
{
    let o = { p: 1, q: 2 }
    let { p, q } = o
    console.log(p, q)
}
// 对象解构赋值
{
    let { p = 3, q = 4 } = { p: 1 }
    console.log(p, q)
}
// 对象解构赋值
{
    let metaData = {
        title: 'abc',
        test: [{
            title: 'test',
            desc: 'xxx'
        }]
    }
    let { title: p, test: [{ title: q }] } = metaData
    console.log(p, q)
}