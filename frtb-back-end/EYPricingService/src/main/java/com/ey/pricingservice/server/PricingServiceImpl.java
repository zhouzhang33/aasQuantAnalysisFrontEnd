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
import com.ey.pricingservice.entity.FX_EuropeanVanilla;
import com.ey.pricingservice.entity.FX_ForwardConstant;
import com.ey.pricingservice.entity.FX_DigitalConstant;
import com.ey.pricingservice.entity.FX_SwaptionConstant;
import com.ey.pricingservice.entity.IRSConstant;
import com.ey.pricingservice.entity.CCSConstant;
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

//    @Override
//    @RequestMapping(value = "/getFXFWDPricingResult")
//    public String getFXFWDPricingResult(@RequestParam(value = "PricingType", required = true) String pricingType, @RequestBody String requestContent) {
//        Map<String, String> m = new HashMap<String, String>();
//        Map<String, String> results = new HashMap<String, String>();
//        String key;
//        String value;
//        log.info(pricingType + " ----  Pricing Type");
//        if (fxfwdConstant.GetNPV.equalsIgnoreCase(pricingType)) {
//            log.info("Handle Pricing Request!");
//
//            JSONObject jRequestContent;
//            log.info(requestContent);
//            jRequestContent = JSONObject.parseObject(requestContent);
//
//
////            log.info("Submit Request to Pricing Engine, Elements are :" + jRequestContent.getString(fxfwdConstant.BASECCY)
////                    + jRequestContent.getString(fxfwdConstant.TERMCCY) + jRequestContent.getString(fxfwdConstant.BASENotional));
//
//            // 调用API，发定价请求
//            log.info("Receive Pricing Results, Parse Dataset to results<String, String> !");
//
//
//
//
//
//
//            List<String> fxfwdPricingResults = fxfwdConstant.FXFWD_PRICING_OUTPUTS;
//            results.put(fxfwdPricingResults.get(0), "100001");
//            results.put(fxfwdPricingResults.get(1), "0.9999");
//            results.put(fxfwdPricingResults.get(2), "0.9870");
//            // 获取 Results， 对端返回的是一个 Map， 也是 Key Value格式，因此这里模拟对端的情况。
//
//            for (Map.Entry<String, String> result : results.entrySet()) {
//                m.put(result.getKey(), result.getValue());
//            }
//
//            log.info("Make Results as Json!");
//            String json = JSON.toJSONString(m);
//
//            log.info("Send back to Pricing Client!");
//            return null;
//
//        } else {
//
//            return ERR_MSG + results.get("errorMsg");
//        }
//
//    }

    @Override
    public String getFXSwapPricingResult(String pricingType, String requestContent) {
        return null;
    }

    @Override
    public String getFXOptionPricingResult(String pricingType, String requestContent) {
        return null;
    }

    @Override
    @RequestMapping(value = "/frtbdata/getIRSCCSPricingResult")
    public JSONObject getIRSCCSPricingResult(@RequestParam(value = "PricingType", required = true) String pricingType, @RequestBody Object requestContent) {
       JSONObject jRequestContent =(JSONObject) requestContent;
       String pType = jRequestContent.getString("type");

       if(pType.equals("IRS"))
           return getIRSPricingResult(pricingType,jRequestContent);
       else
           return getCCSPricingResult(pricingType,jRequestContent);

    }
    @Override
    public JSONObject getIRSPricingResult(String pricingType, Object requestContent){
        JSONObject jRequestContent =(JSONObject) requestContent;
        Map<String, String> m = new HashMap<String, String>();
        String key;
        String value;
        String[] results;
        JSONObject res =new JSONObject();
        log.info(pricingType + " ----  Pricing Type");
        String prodCode = "Product_OISSwap_Generic";
        String csvParams = "ValuationDate,18-jun-2019\r\n" +
                "Currency,USD\r\n" +
                "Notional,1000000\r\n" +
                "EffectiveDate,27-mar-2018\r\n" +
                "MaturityDate,27-mar-2023\r\n" +
                "FixedLegCouponRate,0.035\r\n" +
                "FixedLegPayFreq,3M\r\n" +
                "FixedLegDayCount,ACT/365\r\n" +
                "FixedLegPayLag,2bd\r\n" +
                "FixedLegPayBusAdj,F\r\n" +
                "FloatLegPayFreq,3M\r\n" +
                "FloatLegDayCount,ACT/360\r\n" +
                "FloatLegPayLag,2bd\r\n" +
                "FloatLegPayBusAdj,F\r\n" +
                "FloatLegAccrualFreq,1bd\r\n" +
                "FloatLegAccrualBusAdj,F\r\n" +
                "FloatLegFixingLag,0bd,\r\n" +
                "FloatLegEndOfMonthRule,false\r\n" +
                "FloatLegSpread,0\r\n" +
                "SettlementLag,2bd\r\n" +
                "FloatLegIndexCurve,CURVE_USD_OIS#BLOOMBERG#MID\r\n" +
                "FloatLegIndexFixings,FEDL01#BLOOMBERG#1";
        results = api.evaluate(prodCode, csvParams);
        res.put("Result",IRSConstant.parseFromResults(results));
        return res;
    }

    @Override
    public JSONObject getCCSPricingResult(String pricingType, Object requestContent){
        JSONObject jRequestContent =(JSONObject) requestContent;
        Map<String, String> m = new HashMap<String, String>();
        String key;
        String value;
        String[] results;
        JSONObject res =new JSONObject();
        log.info(pricingType + " ----  Pricing Type");
        String prodCode = "Product_CCBasisSwap_Generic";
        String csvParams = "ValuationDate,18-jun-2019\r\n" +
                "Currency1,USD\r\n" +
                "Currency2,EUR\r\n" +
                "Notional1,1000000\r\n" +
                "Notional2,904428.9888\r\n" +
                "EffectiveDate,27-mar-2018\r\n" +
                "MaturityDate,27-mar-2023\r\n" +
                "Currency1_Spread,0.0\r\n" +
                "Currency1_PayFreq,3M\r\n" +
                "Currency1_DayCount,ACT/360\r\n" +
                "Currency2_Spread,-0.0020875\r\n" +
                "Currency2_PayFreq,3M\r\n" +
                "Currency2_DayCount,ACT/360\r\n" +
                "Currency1_IndexCurve,CURVE_USD_LIBOR3M#BLOOMBERG#MID\r\n" +
                "Currency2_IndexCurve,CURVE_EUR_EURIBOR6M#BLOOMBERG#MID\r\n" +
                "Currency1_DiscountCurve,CURVE_USD_LIBOR6M#BLOOMBERG#MID\r\n" +
                "Currency2_DiscountCurve,CURVE_EUR_BASIS_USD#BLOOMBERG#MID\r\n" +
                "Currency1_IndexFixing,US0003M#BLOOMBERG#1\r\n" +
                "Currency2_IndexFixing,US0003M#BLOOMBERG#1\r\n" +
                "FxSpot,FXSPOT_USD#BLOOMBERG#MID";
        results = api.evaluate(prodCode, csvParams);

        res.put("Result",CCSConstant.parseFromResults(results));
        return res;
    }

    @Override
    @RequestMapping(value = "/frtbdata/getSwaptionPricingResult")
    public JSONObject getSwaptionPricingResult(@RequestParam(value = "PricingType", required = true) String pricingType, @RequestBody Object requestContent) {
        Map<String, String> m = new HashMap<String, String>();
        String key;
        String value;
        String[] results;
        JSONObject res =new JSONObject();
        log.info(pricingType + " ----  Pricing Type");
        String prodCode = "Product_Swaption_Generic";
        String csvParams = "ValuationDate,18-jun-2019\r\n" +
                "Notional,10000000\r\n" +
                "Currency,USD\r\n" +
                "OptionStrike,0.01800624\r\n" +
                "OptionPosition,LongReceiver\r\n" +
                "OptionExpiryDate,18-jun-2020\r\n" +
                "OptionNotificationDays,2bd\r\n" +
                "SwapStartDate,22-jun-2020\r\n" +
                "SwapEndDate,22-jun-2025\r\n" +
                "SwapFixedLegPayFreq,6M\r\n" +
                "SwapFixedLegDayCount,30/360\r\n" +
                "SwapFloatLegResetFreq,3M\r\n" +
                "SwapFloatLegPayFreq,3M\r\n" +
                "SwapFloatLegDayCount,ACT/360\r\n" +
                "SwapFloatLegSpread,0\r\n" +
                "SwapFloatLegIndexCurve,CURVE_USD_LIBOR3M#BLOOMBERG#MID\r\n" +
                "SwapFloatLegIndexFixings,US0003M#BLOOMBERG#1\r\n" +
                "Volatility,Vol_USD_SWAPTION_VCUB_LIBOR3M#BLOOMBERG#MID";
        results = api.evaluate(prodCode, csvParams);
        res.put("Result",FX_SwaptionConstant.parseFromResults(results));
        return res;


    }


    @Override
    @RequestMapping(value = "/frtbdata/getFXDigitalPricingResult")
    public JSONObject getFXDigitalPricingResult(@RequestParam(value = "PricingType", required = true) String pricingType, @RequestBody Object requestContent){
        Map<String, String> m = new HashMap<String, String>();
        String key;
        String value;
        String[] results;
        JSONObject res =new JSONObject();
        log.info(pricingType + " ----  Pricing Type");
        String prodCode = "Product_FX_Digital_Generic";
        String csvParams = "ValuationDate,18-jun-2019\r\n" +
                "BaseCurrency,USD\r\n" +
                "Currency,CNY\r\n" +
                "Direction,Buy\r\n" +
                "CallPut,Call\r\n" +
                "ExpiryDate,06-jan-2020\r\n" +
                "DeliveryDate,08-jan-2020\r\n" +
                "Strike,6.9099\r\n" +
                "PayoutAmount,1\r\n" +
                "PayoutCurrency,CNY\r\n" +
                "ModelType,LocalVol\r\n" +
                "MonteCarloPaths,10000\r\n" +
                "MonteCarloSteps,100\r\n" +
                "BaseCcyDiscountCurve,CURVE_USD_IMPLIED_USDCNY#BLOOMBERG#MID\r\n" +
                "DiscountCurve,CURVE_CNY_REPO7D#BLOOMBERG#MID\r\n" +
                "FxSpot,FXSPOT_USD#BLOOMBERG#MID\r\n" +
                "Volatility,VOL_USDCNY_OPTIONVOL#BLOOMBERG#MID";
        results = api.evaluate(prodCode, csvParams);
        String[] sourceStrArray = results[1].split("\r\n");
        res.put("Result",FX_DigitalConstant.parseFromResults(results));
        return res;
    }


    @Override
    @RequestMapping(value = "/frtbdata/getFXFWDPricingResult")
    public JSONObject getFXFWDPricingResult(@RequestParam(value = "PricingType", required = true) String pricingType, @RequestBody Object requestContent){
        Map<String, String> m = new HashMap<String, String>();
        String key;
        String value;
        String[] results;
        JSONObject res =new JSONObject();
        log.info(pricingType + " ----  Pricing Type");
        String prodCode = "Product_FX_Forward_Generic";
        String csvParams = "ValuationDate,18-jun-2019\r\n" +
                "BaseCurrency,USD\r\n" +
                "Currency,CNY\r\n" +
                "DeliveryDate,08-jan-2020\r\n" +
                "ForwardRate,6.9099\r\n" +
                "Notional,1000000\r\n" +
                "BaseCcyDiscountCurve,CURVE_USD_IMPLIED_USDCNY#BLOOMBERG#MID\r\n" +
                "DiscountCurve,CURVE_CNY_REPO7D#BLOOMBERG#MID\r\n" +
                "FxSpot,FXSPOT_USD#BLOOMBERG#MID\r\n" +
                "";
        results = api.evaluate(prodCode, csvParams);
        String[] sourceStrArray = results[1].split("\r\n");
        res.put("Result",FX_ForwardConstant.parseFromResults(results));
        return res;
    }

    @Override
    @RequestMapping(value = "/frtbdata/getEuroOptionPricingResult")
    public JSONObject getFXEuropeanPricingResult(@RequestParam(value = "PricingType", required = true) String pricingType, @RequestBody Object requestContent){
        Map<String, String> m = new HashMap<String, String>();
        String key;
        String value;
        String[] results;
        JSONObject res =new JSONObject();
        log.info(pricingType + " ----  Pricing Type");
        String prodCode = "Product_FX_EuropeanVanilla_Generic";
        String csvParams = "ValuationDate,18-jun-2019\r\n" +
                "BaseCurrency,USD\r\n" +
                "Currency,CNY\r\n" +
                "Direction,Buy\r\n" +
                "SettlementType,Physical\r\n" +
                "CallPut,Call\r\n" +
                "ExpiryDate,06-jan-2020\r\n" +
                "DeliveryDate,08-jan-2020\r\n" +
                "Strike,6.9099\r\n" +
                "Delta,0.5\r\n" +
                "DeltaType,Forward\r\n" +
                "Notional,1000000\r\n" +
                "ImpliedVol,0.1\r\n" +
                "ModelType,Black-Scholes\r\n" +
                "BaseCcyDiscountCurve,CURVE_USD_IMPLIED_USDCNY#BLOOMBERG#MID\r\n" +
                "DiscountCurve,CURVE_CNY_REPO7D#BLOOMBERG#MID\r\n" +
                "FxSpot,FXSPOT_USD#BLOOMBERG#MID\r\n" +
                "Volatility,VOL_USDCNY_OPTIONVOL#BLOOMBERG#MID";
        results = api.evaluate(prodCode, csvParams);
        String[] sourceStrArray = results[1].split("\r\n");
        res.put("Result",FX_EuropeanVanilla.parseFromResults(results));
        return res;
    };

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
        res.put("Result",BondConstant.parseFromResults(results));
        return res;


    }

}
