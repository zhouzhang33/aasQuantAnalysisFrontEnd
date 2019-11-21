package com.ey.pricingservice.entity;

import com.alibaba.fastjson.JSONObject;
import com.fasterxml.jackson.annotation.JsonAlias;
import org.springframework.boot.jackson.JsonObjectDeserializer;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
public class FX_EuropeanVanilla {
    public static String[][]  RequestMapping= {
            {"Premium(CNY)","NPV"},
            {"Price(% CNY)","PV_inpips"},
            {"Price(% USD)","PV_in_per"},
            {"Spot Delta(USD)","SpotDelta"},
            {"Forward Delta(USD)","FWDDelta"},
            {"Gamma(USD)","Gamma"},
    };

    public static JSONObject parseFromResults(String [] results){
        Map<String, Object> m = new HashMap<String, Object>();
        int para_count = 25;
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
