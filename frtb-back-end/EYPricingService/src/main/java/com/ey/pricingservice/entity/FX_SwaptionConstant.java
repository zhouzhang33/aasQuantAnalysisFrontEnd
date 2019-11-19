package com.ey.pricingservice.entity;

import com.alibaba.fastjson.JSONObject;

import java.util.HashMap;
import java.util.Map;

public class FX_SwaptionConstant {
    public static JSONObject parseFromResults(String [] results){
        Map<String, Object> m = new HashMap<String, Object>();
        int para_count = 12;
        int istr=0;
        String[] lines = results[1].split("\r\n");

        for(istr=0 ;istr<para_count;istr++){
            String[] para = lines[istr].split(",");
            m.put(para[0],para[1]);
        }


        JSONObject res = new JSONObject(m);
        return res;
    };
}
