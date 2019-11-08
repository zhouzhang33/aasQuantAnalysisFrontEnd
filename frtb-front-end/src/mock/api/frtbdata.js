import discountCurve from "./frtb_data/discount_rate.json";
import CNY_Repo7D from './frtb_data/CNY_Repo7D.json';
import Curve_CNY_Shibor3M from './frtb_data/Curve_CNY_Shibor3M.json';
import USD_OIS from './frtb_data/USD_OIS.json';
var calculationDataBase={
    'fxswap':[],
    'europeanoption':[],
    'irsccs':[],
    'bond':[],
    'digitaloption':[],
    'swaption':[],
}

const curveNameBank={
    'USD_OIS':USD_OIS,
    'discountCurve':discountCurve,
    'CNY_Repo7D':CNY_Repo7D,
    'Curve_CNY_Shibor3M':Curve_CNY_Shibor3M
};
export default [
    {
        path: "/api/frtbdata/save",
        method: "post",
        handle(req) {
            var productName = req.params['product'];
            curveNameBank[productName].push(req.body)
            return {
                code: 0,
                msg: "保存数据成功",
                data: {
                    list: {recordnum:curveNameBank[productName].length}
                }
            };
        }
    },
    {
        path: '/frtbdata/getMarketData',
        method: "get",
        handle(req) {
            console.log(req,'req')
            var curveName= req.params['curvename'];
            if(curveNameBank.hasOwnProperty(curveName)){
                console.log('curve found');
                return {
                    code: 0,
                    msg: "获取数据成功",
                    data: {
                        list: curveNameBank.curveName,
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
