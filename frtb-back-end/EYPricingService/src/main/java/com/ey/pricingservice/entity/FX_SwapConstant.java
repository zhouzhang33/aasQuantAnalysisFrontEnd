package com.ey.pricingservice.entity;

import com.alibaba.fastjson.JSONObject;

import java.util.HashMap;
import java.util.Map;

public class FX_SwapConstant {
    public static String[][]  RequestMapping= {
            {"Price (CNY)","NPV"},
    };
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
            if(lines[istr].indexOf("DATE        FOREIGN PV       FOREIGN ACTUAL DOMESTIC PV       DOMESTIC ACTUAL SWAP PV           SWAP ACTUAL")>-1){
                istr++;
                break;
            }
        }
        String Cash_Flow_Table="";
        int PV_line =0;
        for(;istr<lines.length;istr++,PV_line++){
            if (lines[istr] == null || lines[istr] == "" ||lines[istr].length() ==0)
                break;
            String[] para = lines[istr].split("\\s+");
            String oneDataLine =String.format("{\"DATE\":\"%s\",\"FOREIGN PV\":\"%s\",\"FOREIGN ACTUAL\":\"%s\",\"DOMESTIC PV\":\"%s\",\"DOMESTIC ACTUAL\":\"%s\",\"SWAP PV\":\"%s\",\"SWAP ACTUAL\":\"%s\"},",para[0],
                    para[1],para[2],para[3],para[4],para[5],para[6]);

            if(PV_line==0)
                m.put("PV1",para[5]);
            else if(PV_line==1)
                m.put("PV2",para[5]);

            Cash_Flow_Table = Cash_Flow_Table + oneDataLine +"\r\n";
        }
        m.put("Cash_Flow",Cash_Flow_Table);

        for (String[] strings : RequestMapping) {
            m.put(strings[1], m.get(strings[0]));
            m.remove(strings[0]);
        };

        JSONObject res = new JSONObject(m);
        return res;
    };
}
