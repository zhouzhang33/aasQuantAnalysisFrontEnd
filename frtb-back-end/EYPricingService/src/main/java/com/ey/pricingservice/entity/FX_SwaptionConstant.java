package com.ey.pricingservice.entity;

import com.alibaba.fastjson.JSONObject;

import java.util.HashMap;
import java.util.Map;

public class FX_SwaptionConstant {
    public static String[][]  RequestMapping= {
                        {"ATM Strike","pingZhiXingQuanJia"},
                        {"NPV","NPV"},
                        {"Delta","DV01"},
                        {"Gamma","Gamma"},
                        {"Implied Vol","yinHanBoDongLv"},
                        {"Vega","Vega"},
                        {"Theta","Theta"}};

    public static JSONObject parseFromResults(String [] results){
        Map<String, Object> m = new HashMap<String, Object>();
        int para_count = 12;
        int istr=0;
        String[] lines = results[1].split("\r\n");

        for(istr=0 ;istr<para_count;istr++){
            String[] para = lines[istr].split(",");
            m.put(para[0],para[1]);
        }

        for (String[] strings : RequestMapping) {
            m.put(strings[1], m.get(strings[0]));
            m.remove(strings[0]);
        }

        JSONObject res = new JSONObject(m);
        return res;
    };
}
