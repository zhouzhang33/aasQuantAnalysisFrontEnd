package com.ey.pricingservice.entity;

import com.alibaba.fastjson.JSONObject;
import com.fasterxml.jackson.annotation.JsonAlias;
import org.springframework.boot.jackson.JsonObjectDeserializer;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class BondConstant {
    public static JSONObject parseFromResults(String [] results){
        Map<String, Object> m = new HashMap<String, Object>();
        int para_count = 29;
        int istr=0;
        String[] lines = results[1].split("\r\n");


        for(istr=0 ;istr<para_count;istr++){
            String[] para = lines[istr].split(",");
            m.put(para[0],para[1]);
        }
        for(istr=para_count;istr<lines.length;istr++){
            if(lines[istr].indexOf("ACCRUAL START EX DATE     ACCRUAL END PAY DATE    COUPON           PRINCIPAL PAYMENT")>-1){
                istr++;
                break;
            }
        }

        //读数据
        String Payment_Schedule="";
        for(;istr<lines.length;istr++){
            if (lines[istr] == null || lines[istr] == "" ||lines[istr].length() ==0)
                break;
            String[] para = lines[istr].split("\\s+");
            String oneDataLine =String.format("{\"ACCRUAL_START\":\"%s\",\"EX_DATE\":\"%s\",\"ACCRUAL_END_PAY_DATE\":\"%s\",\"COUPON\":%s\",\"PRINCIPAL PAYMENT\":\"%s\"},",para[0],
                    para[1],para[2],para[3],para[4],para[5]);
            Payment_Schedule = Payment_Schedule + oneDataLine +"\r\n";
        }

        for(istr=para_count;istr<lines.length;istr++){
            if(lines[istr].indexOf("PAY DATE    COUPON ACTUAL    COUPON PV        PRINCIPAL PAYMENT ACTUAL PRINCIPAL PAYMENT PV")>-1){
                istr++;
                break;
            }
        }

        String Cash_Flow_Table="";
        for(;istr<lines.length;istr++){
            if (lines[istr] == null || lines[istr] == "" ||lines[istr].length() ==0)
                break;
            String[] para = lines[istr].split("\\s+");
            String oneDataLine =String.format("{\"PAY_DATE\":\"%s\",\"COUPON_ACTUAL\":\"%s\",\"COUPON_PV\":\"%s\",\"PRINCIPAL_PAYMENT\":\"%s\",\"ACTUAL_PRINCIPAL_PAYMENT_PV\":\"%s\"},",para[0],
                    para[1],para[2],para[3],para[4]);
            Cash_Flow_Table = Cash_Flow_Table + oneDataLine +"\r\n";
        }
        m.put("Payment_Schedule",Payment_Schedule);
        m.put("Cash_Flow_Table",Cash_Flow_Table);

        JSONObject res = new JSONObject(m);
        return res;
    };


}
