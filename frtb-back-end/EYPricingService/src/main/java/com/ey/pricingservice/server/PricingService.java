package com.ey.pricingservice.server;

import com.alibaba.fastjson.JSONObject;

public interface PricingService {

    public String getTermStructure(String pricingType, String requestContent);

    public String getFXFWDPricingResult(String pricingType, String requestContent);

    public String getFXSwapPricingResult(String pricingType, String requestContent);

    public String getFXOptionPricingResult(String pricingType, String requestContent);

    public JSONObject getBondPricingResult(String pricingType, Object requestContent);

}
