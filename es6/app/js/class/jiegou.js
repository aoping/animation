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