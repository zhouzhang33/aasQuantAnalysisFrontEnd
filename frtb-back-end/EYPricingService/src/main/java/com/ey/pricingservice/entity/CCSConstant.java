package com.ey.pricingservice.entity;

import com.alibaba.fastjson.JSONObject;

import java.util.HashMap;
import java.util.Map;

public class CCSConstant {
    public static JSONObject parseFromResults(String [] results){
        Map<String, Object> m = new HashMap<String, Object>();
        int para_count = 14;
        int istr=0;
        String[] lines = results[1].split("\r\n");

        for(istr=0 ;istr<para_count;istr++){
            String[] para = lines[istr].split(",",2);
            m.put(para[0],para[1]);
        }


        for(istr=para_count;istr<lines.length;istr++){
            if(lines[istr].indexOf("PAY DATE    PV               ACTUAL           FOREIGN PAY DATE FOREIGN PV        FOREIGN ACTUAL")>-1){
                istr++;
                break;
            }
        }

        String Cash_Flow_Table="";
        for(;istr<lines.length;istr++){
            if (lines[istr] == null || lines[istr] == "" ||lines[istr].length() ==0)
                break;
            String[] para = lines[istr].split("\\s+");
            String oneDataLine =String.format("{\"PAY_DATE\":\"%s\"," +
                            "\"PV \":\"%s\"," +
                            "\"ACTUAL\":\"%s\"," +
                            "\"FOREIGN PAY DATE\":\"%s\"," +
                            "\"FOREIGN PV\":\"%s\"" +
                            ",\"FOREIGN ACTUAL\":\"%s\" },",para[0],
                    para[1],para[2],para[3],para[4],para[5]);
            Cash_Flow_Table = Cash_Flow_Table + oneDataLine +"\r\n";
        }
        m.put("Cash_Flow",Cash_Flow_Table);
        JSONObject res = new JSONObject(m);
        return res;
    };
}
