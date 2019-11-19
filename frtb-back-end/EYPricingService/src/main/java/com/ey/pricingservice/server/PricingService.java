package com.ey.pricingservice.server;

import com.alibaba.fastjson.JSONObject;
import com.fasterxml.jackson.annotation.JsonAlias;

public interface PricingService {

    public String getTermStructure(String pricingType, String requestContent);

    //public String getFXFWDPricingResult(String pricingType, String requestContent);

    public String getFXSwapPricingResult(String pricingType, String requestContent);

    public String getFXOptionPricingResult(String pricingType, String requestContent);

    public JSONObject getBondPricingResult(String pricingType, Object requestContent);
    public JSONObject getFXEuropeanPricingResult(String pricingType, Object requestContent);
    public JSONObject getFXFWDPricingResult(String pricingType, Object requestContent);
    public JSONObject getFXDigitalPricingResult(String pricingType, Object requestContent);
    public JSONObject getSwaptionPricingResult(String pricingType, Object requestContent);
    public JSONObject getIRSCCSPricingResult(String pricingType, Object requestContent);

    public JSONObject getIRSPricingResult(String pricingType, Object requestContent);
    public JSONObject getCCSPricingResult(String pricingType, Object requestContent);
}
