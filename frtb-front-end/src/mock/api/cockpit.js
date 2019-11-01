
import dayjs from 'dayjs'
import hangyeshouxin from  './hangyeshouxin.json'
// import province from  './province.json'
import customerIncomeData from  './customerIncomeData.json'

const db = [
  { id: "1", name: "用户 1", address: "上海市普陀区金沙江路 1518 弄" },
  { id: "2", name: "用户 2", address: "上海市普陀区金沙江路 1517 弄" },
  { id: "3", name: "用户 3", address: "上海市普陀区金沙江路 1519 弄" },
  { id: "4", name: "用户 4", address: "上海市普陀区金沙江路 1516 弄" }
];

const province = [
  {
    name: "吉林",
    value: 4.31
  },
  {
    name: "辽宁",
    value: 3.69
  },
  {
    name: "甘肃",
    value: 3.51
  },
  {
    name: "山西",
    value: 3.5
  },
  {
    name: "内蒙古",
    value: 3.47
  },
  {
    name: "云南",
    value: 3.35
  },
  {
    name: "黑龙江",
    value: 3.32
  },
  {
    name: "青海",
    value: 2.7
  },
  {
    name: "贵州",
    value: 2.63
  },
  {
    name: "四川",
    value: 2.61
  },
  {
    name: "山东",
    value: 2.52
  },
  {
    name: "河南",
    value: 2.49
  },
  {
    name: "河北",
    value: 2.29
  },
  {
    name: "江西",
    value: 32
  },
  {
    name: "天津",
    value: 1.97
  },
  {
    name: "陕西",
    value: 1.95
  },
  {
    name: "福建",
    value: 1.93
  },
  {
    name: "湖南",
    value: 1.9
  },
  {
    name: "宁夏",
    value: 1.9
  },
  {
    name: "安徽",
    value: 1.81
  },
  {
    name: "广西",
    value: 1.7
  },
  {
    name: "广东",
    value: 1.7
  },
  {
    name: "浙江",
    value: 1.64
  },
  {
    name: "湖北",
    value: 1.64
  },
  {
    name: "海南",
    value: 1.5
  },
  {
    name: "新疆",
    value: 1.42
  },
  {
    name: "江苏",
    value: 1.3
  },
  {
    name: "重庆",
    value: 1.16
  },
  {
    name: "上海",
    value: 0.57
  },
  {
    name: "北京",
    value: 0.37
  },
  {
    name: "西藏",
    value: 0.33
  },
  {
    name: "台湾",
    value: 0.1
  },
  {
    name: "香港",
    value: 0.1
  },
  {
    name: "澳门",
    value: 0.1
  }
];
const cards = [
  {
    title: "今日待办事项",
    number: "",
    up: true,
    destemp: "当前{0}{1}条",
    icon: "fa fa-calendar"
    // icon: "icon el-icon-tickets"
  },
  {
    title: "本月新增预警",
    number: "",
    up: false,
    destemp: "较上月{0}{1}条",
    icon: "fa fa-warning"
  },
  {
    title: "监控企业数量",
    number: "",
    up: false,
    destemp: "较上月{0}{1}家",
    icon: "fa fa-building-o"
  },
  {
    title: "当月出险企业",
    number: "",
    up: true,
    destemp: "较上月{0}{1}家",
    icon: "fa fa-check-square-o"
  }
];
const boolarr = [true, false, true, true];

const businesstype = [
  "互联网行业",
  "餐饮娱乐业",
  "房地产业",
  "高新技术企业",
  "高端装备",
  "公用事业",
  "广播电影电视业",
  "广告业",
  "交通运输业"
];

// const businessloantype = [
//   "流动资金贷款",
//   "固定资产贷款",
//   "房地产贷款",
//   "垫款",
//   "银团贷款",
//   "贸易融资",
//   "保理",
//   "商业票据贴现",
//   "银行承兑汇票",
//   "信用证",
//   "保函",
//   "委托贷款",
//   "承诺函",
//   "授信担保"
// ];


const  risktypearr= [0,1,2];


function getArrEvey(arr){
   var bol = arr[Math.floor(Math.random() * arr.length)]*5;
   return bol;
}

function isboolean() {
  var bol = getArrEvey(boolarr)

  return bol;
  // body...
}

function getriskType(){
  var bol = getArrEvey(risktypearr)
  return bol;
}

function radmom4() {
  return Math.round(Math.random() * 10000);
}

function radmom3() {
return Math.round(Math.random() * 1000);
}



function radmom1() {
  return Math.random();
}

function radmom2() {
  return Math.round(Math.random() * 100);
}


export default [
  {
    path: "/api/demo/business/issues/142/fetch.*",
    method: "get",
    handle() {
      return {
        code: 0,
        msg: "获取数据成功",
        data: {
          list: db
        }
      };
    }
  },

  {
    path: "/api/index/cardindex",
    method: "post",
    handle() {
      var arr = [];

      for (var a in cards) {

        var temp = Object.assign({}, cards[a]);

        if( a == 2){
          temp.number = radmom4();
          temp.number2 = radmom3();

        }else{
          var tmp = [radmom2(), radmom2()];
          temp.number = Math.max(tmp[0], tmp[1]);
          temp.number2 = Math.min(tmp[0], tmp[1]);
        }
        temp.up = isboolean();

        temp.desc = temp.destemp.replace("{0}", temp.up ? "增长" : "减少");
        temp.desc = temp.desc.replace("{1}", temp.number2);
        arr.push(temp);
      }
      return {
        code: 0,
        msg: "获取数据成功",
        data: {
          list: arr
        }
      };
    }
  },

  {
    path: "/api/index/loancatagory",
    method: "post",
    handle() {
      var arr = [];
      var temp = {
        '种类': '第一产业',
        '委托贷款': 6080800,
        '信用贷款': 1014708,
        '担保贷款': 2059779,
        '综合授信': 5027035,
        '票据贴现': 301126,
        '项目开发贷款': 1231445
      };
      arr.push(temp);
      var temp = {
        '种类': '第二产业',
        '委托贷款': 5080800,
        '信用贷款': 1114708,
        '担保贷款': 1959779,
        '综合授信': 4527035,
        '票据贴现': 311126,
        '项目开发贷款': 1331445
      };
      arr.push(temp);
      for (var a in [0]) {
        var x = businesstype[a];
        var temp = {
          '种类': '第三产业',
          '委托贷款': 6480800,
          '信用贷款': 914708,
          '担保贷款': 2059779,
          '综合授信': 4427035,
          '票据贴现': 351126,
          '项目开发贷款': 1031445
        };
        arr.push(temp);
      }

      return {
        code: 0,
        msg: "获取数据成功",
        data: {
          list: arr
        }
      };
    }
  },

  {
    path: "/api/index/provinceindex",
    method: "post",
    handle() {
      var arr = [];
      // var o = Object.assign({},province);
      for (var a in province) {
        // console.log(a.name)
        var temp = {
          '位置': province[a].name,
          '违约率': getriskType(),
          '总客户数':  radmom3(), //52130,
          '总贷款金额': radmom4()*radmom4(), //7923818479,
          '关注客户数': radmom2(),  // 6130,
          '关注贷款金额': radmom4()*radmom3() //53818479
        };
        // console.log(temp['违约率'])
        arr.push(temp);
      }
      return {
        code: 0,
        msg: "获取数据成功",
        data: {
          list: arr
        }
      };
    }
  },

  {
    path: "/api/index/customerIncome",
    method: "post",
    handle() {
      // var arr = [];
      // var now = new Date();
      // now.setMonth(now.getMonth() - 10);
      // for (var i  = 0  ; i<10; i++ ) {
      //   var  str = dayjs(now).format('YYYYMM');
      //   var begin = 0 ;
      //   if(i != 0 ){
      //      begin = arr[i-1]['存量客户数'];
      //   }
      //   var temp = {
      //     '日期':  str,
      //     '贷款总额':  radmom3() ,
      //     '贷款余额': radmom3(),
      //     '损失额': radmom3(),
      //     // '关注客户数': radmom3(),
      //     '存量客户数': begin+ radmom2()
      //   };
      //   arr.push(temp);
      //   now.setMonth(now.getMonth()+1);
      // }
      return {
        code: 0,
        msg: "获取数据成功",
        data: {
          list: customerIncomeData
        }
      };
    }
  },
  {
    path: "/api/index/creditindex",
    method: "post",
    handle() {
      // var arr = [];
      // for (var a in businesstype) {
      //   var a = businesstype[a];
      //   var temp = { '行业': a, '授信': radmom2() };
      //   arr.push(temp);
      // }
      return {
        code: 0,
        msg: "获取数据成功",
        data: {
          list: hangyeshouxin
        }
      };
    }
  },
  {
    path: "/api/demo/business/issues/142/detail.*",
    method: "get",
    handle({ params }) {
      return {
        code: 0,
        msg: "获取数据成功",
        data: db.find(e => e.id === params.id)
      };
    }
  }
];