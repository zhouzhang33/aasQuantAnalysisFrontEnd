package com.ey.pricingservice.entity;
import com.alibaba.fastjson.JSONObject;

import java.util.HashMap;
import java.util.Map;
public class FX_ForwardConstant {
    public static JSONObject parseFromResults(String [] results){
        Map<String, Object> m = new HashMap<String, Object>();
        int para_count = 15;
        int istr=0;
        String[] lines = results[1].split("\r\n");

        for(istr=0 ;istr<para_count;istr++){
            String[] para = lines[istr].split(",");
            m.put(para[0],para[1]);
        }

        for(istr=para_count;istr<lines.length;istr++){
            if(lines[istr].indexOf("FX RATE CURRENCY PAY DATE   AMOUNT")>-1){
                istr++;
                break;
            }
        }
        String Cash_Flow_Table="";
        for(;istr<lines.length;istr++){
            if (lines[istr] == null || lines[istr] == "" ||lines[istr].length() ==0)
                break;
            String[] para = lines[istr].split("\\s+");
            String oneDataLine =String.format("{\"FX_RATE_CURRENCY\":\"%s\",\"PAY_DATE\":\"%s\",\"AMOUNT\":\"%s\"},",para[0],
                    para[1],para[2]);
            Cash_Flow_Table = Cash_Flow_Table + oneDataLine +"\r\n";
        }
        m.put("Cash_Flow",Cash_Flow_Table);
        JSONObject res = new JSONObject(m);
        return res;
    };
}
