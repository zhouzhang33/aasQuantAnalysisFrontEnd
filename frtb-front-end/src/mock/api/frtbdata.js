import discountCurve from "./frtb_data/discount_rate.json";
import CNY_Repo7D from './frtb_data/CNY_Repo7D.json';
import Curve_CNY_Shibor3M from './frtb_data/Curve_CNY_Shibor3M.json';
import USD_OIS from './frtb_data/USD_OIS.json';

export default [
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
