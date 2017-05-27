var ecConfig = require('echarts/config');
let echarts_pie = echarts.init(document.getElementById('echarts-pie'));

function eConsole(param) {
    console.log(param.name);
    var name = param.name;
    // var url = "?h=jgk_school&school_id=<{$school_id}>&gid=";
    // var num;
    // if (name == "医学院") {
    //     num = "5423";
    // }
    // if (name == "瑞金医院") {
    //     num = "5607";
    // }

    // window.open(url + num, "newwindow");
    //window.location.href=url+num;
}
echarts_pie.on(ecConfig.EVENT.CLICK, eConsole);