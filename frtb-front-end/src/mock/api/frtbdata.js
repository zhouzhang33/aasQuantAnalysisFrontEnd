import discountCurve from "./frtb_data/discount_rate.json";
import CNY_Repo7D from './frtb_data/CNY_Repo7D.json';
import Curve_CNY_Shibor3M from './frtb_data/Curve_CNY_Shibor3M.json';
import USD_OIS from './frtb_data/USD_OIS.json';
var calculationDatabase={
    'fxswap':[],
    'europeanoption':[],
    'irsccs':[],
    'bond':[],
    'digitaloption':[],
    'swaption':[],
}

var curveNameBank={
    'USD_OIS':USD_OIS,
    'discountCurve':discountCurve,
    'CNY_Repo7D':CNY_Repo7D,
    'Curve_CNY_Shibor3M':Curve_CNY_Shibor3M
};
function deepClone(obj){
    // 判断数据形式
    let clone = Array.isArray(obj)?[]:{};
    if(obj && typeof obj === "object"){
        for(key in obj){
            if(obj.hasOwnProperty(key)){
                // 属性是对象则进行递归
                if(obj[key] && typeof obj[key] === "object"){
                    clone[key] = deepClone(obj[key]);
                }else{
                    clone[key] = obj[key];
                }
            }
        }
    }
    return clone;
}

var swapFormResult = {
    PV1: '0',
    PV2: '0',
    NPV: '0',
    calcUnit:'CYN',
    PV1Taoli: '0',
    PV2Taoli: '0',
    NPVTaoli: '0',
    taoLiKongJian:'0',
    calcTaoliUnit:'CYN'
}
var europeanResultDeltaHedge={
    spotHedge:'',
    forwardHedge:'',
    currencyUnit:'CNY'
}
var europeanResultVegaHedge={
    option1Type:'',
    option2Type:'',
    option1Amount:'',
    option2Amount:'',
    currencyUnit:'CNY'
}

var europeanResultLeg1={
    NPV:'',
    Delta:'',
    Gamma:'',
    Vega:'',
    Theta:'',
    Rho:'',
}
var irsccsResultForm = {
    NPV: '1',
    DV01: '1',
    yinJiLiXi: '',
    NPVLeg1: '1',
    DV01Leg1: '1',
    yinJiLiXiLeg1: '',
    NPVLeg2: '1',
    DV01Leg2: '1',
    yinJiLiXiLeg2: '',
    calculationTarget: '',
}
var bondResultForm={
    quanJia:'',
    maishiJiuQi:'',
    jingJia:'',
    xiuZhengJiuQi:'',
    yingJiLiXi:'',
    DV01:'',
    tuXing:'',
    VaR:'',
}
var swaptionResultForm={
    pingZhiXingQuanJia:'',
    NPV:'',
    DV01:'',
    NPVWuFeiYong:'',
    qiQuanFei:'',
    Gamma:'',
    Vega:'',
    Theta:'',
    shouYiLv:'',
    yinHanBoDongLv:'',
}
var digitaloptionResultForm={
    NPV:'0',
    Vega:'0',
    Delta:'0',
    Theta:'0',
    Gamma:'0',
    Rho1:'0',
    Rho2:'0',
}

export default [

    {
        path: "/api/frtbdata/getFXDigitalPricingResult",
        method: "get",
        handle(req) {
            var productName = req.params['PricingType'];
            var requestForm=req.body;
            console.log(requestForm,'requestForm')
            var resultData=digitaloptionResultForm;
            if (productName === 'NPV') {
                resultData.NPV = 12.2,
                resultData.Gamma = 12.6
                resultData.Vega = 12.7
                resultData.Delta = 12.8
                resultData.Theta = 12.8
                resultData.Rho1 = 12.8
                resultData.Rho2 = 12.8
            }
            console.log(resultData,'result_before_return')

            return {
                code: 0,
                msg: "计算成功",
                data: {
                    Result: resultData
                }
            };
        }
    },


    {
        path: "/api/frtbdata/getSwaptionPricingResult",
        method: "get",
        handle(req) {
            var productName = req.params['PricingType'];
            var requestForm=req.body;
            console.log(requestForm,'requestForm')
            var resultData=swaptionResultForm;
            if (productName === 'NPV') {
                resultData.pingZhiXingQuanJia = 10.6,
                resultData.NPV = 10.2,
                resultData.DV01 = 10.3,
                resultData.NPVWuFeiYong = 10.4,
                resultData.qiQuanFei = 10.5,
                resultData.Gamma = 10.6
                resultData.Vega = 10.7
                resultData.Theta = 10.8
                resultData.shouYiLv = 11.1
                resultData.yinHanBoDongLv = 10.8
            }
            console.log(resultData,'result_before_return')

            return {
                code: 0,
                msg: "计算成功",
                data: {
                    Result: resultData
                }
            };
        }
    },
    {
        path: "/api/frtbdata/getBondPricingResult",
        method: "get",
        handle(req) {
            var productName = req.params['PricingType'];
            var requestForm=req.body;
            console.log(requestForm,'requestForm')
            var resultData=bondResultForm;

            if (productName === 'NPV') {
                    resultData.quanJia = 9.6,
                    resultData.maishiJiuQi = 9.2,
                    resultData.jingJia = 9.3,
                    resultData.xiuZhengJiuQi = 9.4,
                    resultData.yingJiLiXi = 9.5,
                    resultData.DV01 = 9.6
                    resultData.tuXing = 9.7
                    resultData.VaR = 9.8
            }
            console.log(resultData,'result_before_return')

            return {
                code: 0,
                msg: "计算成功",
                data: {
                    Result: resultData
                }
            };
        }
    },


    {
        path: "/api/frtbdata/getIRSCCSPricingResult",
        method: "get",
        handle(req) {
            var productName = req.params['PricingType'];
            var requestForm=req.body;
            console.log(requestForm,'requestForm')
            var resultData=irsccsResultForm;
            resultData.calculationTarget=productName;
            if (productName === 'NPV') {
                    resultData.NPV = 1.6,
                    resultData.DV01 = 1.2,
                    resultData.yinJiLiXi = 1.3,
                    resultData.NPVLeg1 = 1.4,
                    resultData.DV01Leg1 = 1.5,
                    resultData.yinJiLiXiLeg1 = 1.6
                    resultData.NPVLeg2 = 1.4,
                    resultData.DV01Leg2 = 1.5,
                    resultData.yinJiLiXiLeg2 = 1.9
            } else if (productName === '利差') {
                   resultData.NPV = 2.9,
                    resultData.DV01 = 2.2,
                    resultData.yinJiLiXi = 2.3,
                    resultData.NPVLeg1 = 2.4,
                    resultData.DV01Leg1 = 2.5,
                    resultData.yinJiLiXiLeg1 = 2.6
                    resultData.NPVLeg2 = 2.4,
                    resultData.DV01Leg2 = 2.5,
                    resultData.yinJiLiXiLeg2 = 2.9
            }
            console.log(resultData,'result_before_return')

            return {
                code: 0,
                msg: "计算成功",
                data: {
                    Result: resultData
                }
            };
        }
    },

    {
        path: "/api/frtbdata/getFXFWDPricingResult",
        method: "get",
        handle(req) {
            var productName = req.params['PricingType'];
            var swapForm=req.body;
            console.log(swapForm,'swapForm')
            var resultData=swapFormResult;
            if(productName ==='NPV'){
                resultData.PV1=1;
                resultData.PV2=2;
                resultData.NPV=3;
                resultData.calcUnit='USD'
            }
            else if(productName ==='TaoLi') {
                resultData.PV1Taoli=4;
                resultData.PV2Taoli=5;
                resultData.NPVTaoli=6;
                resultData.taoLiKongJian=7;
                resultData.calcTaoliUnit='CYN'
                resultData.calcUnit='CYN'
            }
            console.log(resultData,'result_before_return')

            return {
                code: 0,
                msg: "计算成功",
                data: {
                    Result: resultData
                }
            };
        }
    },

    {
        path: "/api/frtbdata/getEuroOptionPricingResult",
        method: "get",
        handle(req) {
            var productName = req.params['PricingType'];
            var requestForm=req.body;
            console.log(requestForm,'requestForm')
            var resultData=null;

            if(productName ==='NPV'){
                resultData=europeanResultLeg1,
                resultData.NPV=1.1,
                resultData.Delta=1.2,
                resultData.Gamma=1.3,
                resultData.Vega=1.4,
                resultData.Theta=1.5,
                resultData.Rho=1.6
            }
            else if(productName ==='DeltaHedge') {
                resultData=europeanResultDeltaHedge;
                resultData.spotHedge=4;
                resultData.forwardHedge=5;
                resultData.currencyUnit='USD';
            }
            else if(productName ==='VegaHedge') {
                resultData=europeanResultVegaHedge;
                resultData.option1Type='ABC';
                resultData.option2Type='DEF';
                resultData.option1Amount='1111';
                resultData.option2Amount='2222';
                resultData.currencyUnit='USD';

            }
            console.log(resultData,'result_before_return')

            return {
                code: 0,
                msg: "计算成功",
                data: {
                    Result: resultData
                }
            };
        }
    },



    {
        path: "/api/frtbdata/save",
        method: "post",
        handle(req) {
            var productName = req.params['product'];
            calculationDatabase[productName].push(req.body)
            console.log(calculationDatabase,'logbase')
            return {
                code: 0,
                msg: "保存数据成功",
                data: {
                    list: {recordnum:calculationDatabase[productName].length}
                }
            };
        }
    },
    {
        path: '/frtbdata/getMarketData',
        method: "get",
        handle(req) {
            console.log(req,'req')
            console.log(curveNameBank,'curvebank')
            var curveName= req.params['curvename'];
            if(curveNameBank.hasOwnProperty(curveName)){
                console.log('curve found');
                console.log(curveNameBank[curveName],'curve')
                return {
                    code: 0,
                    msg: "获取数据成功",
                    data: {
                        list: curveNameBank[curveName],
                    }
                };
            }else{
                return {
                    code: 1,
                    msg: "没有找到数据",
                    data: {
                        list: null,
                    }
                };
            }
        }
    },

    {
        path: "/api/frtbdata/discountcurve",
        method: "get",
        handle() {
            return {
                code: 0,
                msg: "获取数据成功",
                data: {
                    list: discountCurve
                }
            };
        }
    },
////
    {
        path: "/api/frtbdata/CNY_Repo7D",
        method: "get",
        handle() {
            return {
                code: 0,
                msg: "获取数据成功",
                data: {
                    list: CNY_Repo7D
                }
            };
        }
    },
////
////
    {
        path: "/api/frtbdata/Curve_CNY_Shibor3M",
        method: "get",
        handle() {
            return {
                code: 0,
                msg: "获取数据成功",
                data: {
                    list: Curve_CNY_Shibor3M
                }
            };
        }
    },
////
////
    {
        path: "/api/frtbdata/USD_OIS",
        method: "get",
        handle() {
            return {
                code: 0,
                msg: "获取数据成功",
                data: {
                    list: USD_OIS
                }
            };
        }
    },
////
]
