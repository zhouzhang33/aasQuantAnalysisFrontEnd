package com.ey.pricingservice.entity;
import com.alibaba.fastjson.JSONObject;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class IRSConstant {
    public static String[][]  RequestMapping= {
            {"Fixed Leg PV (USD)", "NPVLeg1"},
            {"Float Leg PV (USD)", "NPVLeg2"},
            {"Fixed Leg Accrued (USD)", "yinJiLiXiLeg1"},
            {"Float Leg Accrued (USD)", "yinJiLiXiLeg2"},
            {"USD_DV01 (USD)", "DV01"}
    };

    public static JSONObject parseFromResults(String [] results){
        Map<String, Object> m = new HashMap<String, Object>();
        int para_count = 14;
        int istr=0;
        String[] lines = results[1].split("\r\n");

        for(istr=0 ;istr<para_count;istr++){
            String[] para = lines[istr].split(",",2);
            m.put(para[0],para[1]);
        }

        for (String[] strings : RequestMapping) {
            m.put(strings[1], m.get(strings[0]));
            m.remove(strings[0]);
        };

        JSONObject res = new JSONObject(m);
        return res;
    };
}
