// 这里可以使用node的api,如fs
// 也可以自己安装npm包
// 可以使用console.log来调试
var path = require('path')
var fs = require('fs')
var parse = require('csv-parse')

// 简单的数据处理函数
// 还需要什么都可以提出
var 读csv = 文件名 => new Promise((res, rej) => parse(fs.readFileSync(path.resolve(__dirname, `./${文件名}.csv`)).toString(), (err, data) => err ? rej(err) : res(data)))
var 数组头 = 数组 => 数组[0]
var 数组尾 = 数组 => 数组[数组.length - 1]
var 数组除了头 = 数组 => 数组.slice(1)
var 数组除了尾 = 数组 => 数组.slice(0, 数组.length - 1)
var 数组截取 = 起点 => 终点 => 数组 => 数组.slice(起点, 终点)
var 二维数组列 = 列 => 数组 => 数组.map(a => a[列]).flat()

module.exports = async function () {
    var option

    var data = await 读csv('data')
    console.log('读入的数据', data)

    data = 数组除了头(data)
    console.log('除了头的数据', data)

    var data0 = 二维数组列(0)(data)
    console.log('第0列', data0)

    var data1 = 二维数组列(1)(data)
    console.log('第1列', data1)

    // 请参考
    // https://echarts.apache.org/examples/zh/index.html
    option = {
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        legend: {
            data: ['数据0', '数据1']
        },
        series: [
            {
                name: '数据0',
                data: data0,
                type: 'line'
            },
            {
                name: '数据1',
                data: data1,
                type: 'line'
            }
        ]
    }

    return option
}
