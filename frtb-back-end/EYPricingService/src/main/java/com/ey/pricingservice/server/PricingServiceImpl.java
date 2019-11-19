package com.ey.pricingservice.server;

import com.quant.release.api.ApiPricer;
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;


import com.ey.pricingservice.entity.FXFWDConstant;
import com.ey.pricingservice.entity.TermStructureConstant;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.util.ResourceUtils;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.io.File;
import com.quant.release.api.ApiPricer;
import com.ey.pricingservice.entity.BondConstant;
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
    BondConstant bondConstant;
    ApiPricer api;

    PricingServiceImpl(){

        String pathTestMarketCsv = "./TestMarket.csv";
        // Change path to local file location of "TestFixings.csv".
        String pathTestFixingsCsv = "./TestFixings.csv";
        // create context
        //
        String prodCode;
        String csvParams;
        String[] results;

        String contextID = "Test api pricer";
        //String marketDataFilePath = new File(pathTestMarketCsv).getPath();
        //String fixingDataFilePath = new File(pathTestFixingsCsv).getPath();
        String marketDataFilePath = this.getClass().getClassLoader().getResource("TestMarket.csv").getPath();
        String fixingDataFilePath = this.getClass().getClassLoader().getResource("TestFixings.csv").getPath();

        boolean debugMode = true;
        api = new ApiPricer(contextID, marketDataFilePath, fixingDataFilePath,debugMode);
        String[] mdSigs = api.getMarketDataSignatures();
        String[] fdSigs = api.getFixingsDataSignatures();
    }

    @Override
    public String getTermStructure(String pricingType, String requestContent) {
        return null;
    }

    @RequestMapping(value ="/test")
    public String test(){
        System.out.println("================================================================================");
        return "status:ok";
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


//            log.info("Submit Request to Pricing Engine, Elements are :" + jRequestContent.getString(fxfwdConstant.BASECCY)
//                    + jRequestContent.getString(fxfwdConstant.TERMCCY) + jRequestContent.getString(fxfwdConstant.BASENotional));

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
            return null;

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

    @Override
    @RequestMapping(value = "/frtbdata/getBondPricingResult")
    //public String getBondPricingResult(@RequestParam(value = "PricingType", required = true) String pricingType, @RequestBody String requestContent) {
    public JSONObject getBondPricingResult(@RequestParam(value = "PricingType", required = true) String pricingType, @RequestBody Object requestContent) {
        Map<String, String> m = new HashMap<String, String>();

        String key;
        String value;
        String[] results;
        JSONObject res =new JSONObject();

        log.info(pricingType + " ----  Pricing Type");

        String prodCode = "Product_Bond_Generic";
        String csvParams = "ValuationDate,10-oct-2011\r\n" +
                "Currency,USD\r\n" +
                "Notional,1000000\r\n" +
                "CouponRate,0.035\r\n" +
                "CouponBasis,Act/360\r\n" +
                "PayPrincipalAtMaturity,true\r\n" +
                "TradeDate,10-oct-2011\r\n" +
                "EffectiveDate,12-apr-2011\r\n" +
                "MaturityDate,10-oct-2030\r\n" +
                "FirstCouponDate,9-may-2011\r\n" +
                "PenultimateCouponDate,9-mar-2030\r\n" +
                "PayFreq,6M\r\n" +
                "CompoundingFreq,6M\r\n" +
                "FrontStub,true\r\n" +
                "LongStub,false\r\n" +
                "AccrualDateBusAdj,MF\r\n" +
                "PayDateBusAdj,F\r\n" +
                "PrincipalPayDateBusAdj,F\r\n" +
                "CouponPaymentLag,2bd\r\n" +
                "SettlementLag,2bd\r\n" +
                "YieldToMaturity,0.021\r\n" +
                "SolvingYieldByPrice,false\r\n" +
                "QuotedPrice,123.0919296\r\n" +
                "IsDirtyPrice,true\r\n" +
                "IsCallable,false\r\n" +
                "CallDate,8-jun-2021\r\n" +
                "CallPrice,120";
        results = api.evaluate(prodCode, csvParams);

        String[] sourceStrArray = results[1].split("\r\n");






//        for (String line : sourceStrArray) {
//            System.out.println(line);
//            String[] line_split = line.split(",");
//            m.put(line_split[0], line_split[1]);
//           //
//        }
//
//        String json = JSON.toJSONString(m);
//        System.out.println(json);
//        log.info("Make Results as Json!");
//        //String json = JSON.toJSONString(m);
//
//        log.info("Send back to Pricing Client!");
//        return null;
        res.put("Result",BondConstant.parseFromResults(results));
        return res;


    }

}
