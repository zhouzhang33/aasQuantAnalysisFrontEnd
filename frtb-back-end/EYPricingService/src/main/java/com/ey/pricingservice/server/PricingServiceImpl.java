package com.ey.pricingservice.server;


import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.ey.pricingservice.entity.FXFWDConstant;
import com.ey.pricingservice.entity.TermStructureConstant;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

// , targetNamespace = "http://com.ey.pricingservice"
@RestController
@CrossOrigin
public class PricingServiceImpl implements PricingService {

    static Logger log = LogManager.getLogger(WebserviceApplication.class.getName());
    private final String ERR_MSG = " ERR_INF:=";
    private final String PROCESS_START = " Processing START para:=";
    private final String RPOCESS_SUCCESS_END = " Processing SUCCESS para:=";
    private final String PROCESS_FAILED_END = " Processing FAIL";
    FXFWDConstant fxfwdConstant;
    TermStructureConstant termStructureConstant;

    @Override
    public String getTermStructure(String pricingType, String requestContent) {
        return null;
    }


    @Override
    @RequestMapping(value = "/getFXFWDPricingResult")
    public String getFXFWDPricingResult(@RequestParam(value = "PricingType", required = true) String pricingType, @RequestBody String requestContent) {
        Map<String, String> m = new HashMap<String, String>();
        Map<String, String> results = new HashMap<String, String>();
        String key;
        String value;
        log.info(pricingType + " ----  Pricing Type");
        if (fxfwdConstant.GetNPV.equalsIgnoreCase(pricingType)) {
            log.info("Handle Pricing Request!");

            JSONObject jRequestContent;
            log.info(requestContent);
            jRequestContent = JSONObject.parseObject(requestContent);


            log.info("Submit Request to Pricing Engine, Elements are :" + jRequestContent.getString(fxfwdConstant.BASECCY)
                    + jRequestContent.getString(fxfwdConstant.TERMCCY) + jRequestContent.getString(fxfwdConstant.BASENotional));

            // 调用API，发定价请求
            log.info("Receive Pricing Results, Parse Dataset to results<String, String> !");

            List<String> fxfwdPricingResults = fxfwdConstant.FXFWD_PRICING_OUTPUTS;
            results.put(fxfwdPricingResults.get(0), "100001");
            results.put(fxfwdPricingResults.get(1), "0.9999");
            results.put(fxfwdPricingResults.get(2), "0.9870");
            // 获取 Results， 对端返回的是一个 Map， 也是 Key Value格式，因此这里模拟对端的情况。

            for (Map.Entry<String, String> result : results.entrySet()) {
                m.put(result.getKey(), result.getValue());
            }

            log.info("Make Results as Json!");
            String json = JSON.toJSONString(m);

            log.info("Send back to Pricing Client!");
            return json;

        } else {

            return ERR_MSG + results.get("errorMsg");
        }

    }

    @Override
    public String getFXSwapPricingResult(String pricingType, String requestContent) {
        return null;
    }

    @Override
    public String getFXOptionPricingResult(String pricingType, String requestContent) {
        return null;
    }


}
