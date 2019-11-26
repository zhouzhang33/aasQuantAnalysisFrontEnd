package com.ey.pricingservice.server;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.ey.pricingservice.entity.*;
import com.quant.release.api.ApiPricer;
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
import com.ey.pricingservice.entity.FX_SwapConstant;
import com.ey.pricingservice.entity.IRSRequest;
import com.ey.pricingservice.entity.EuropeanOptionRequest;
import com.ey.pricingservice.entity.SWAPTIONRequest;
import com.ey.pricingservice.entity.BONDRequest;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;

// , targetNamespace = "http://com.ey.pricingservice"
@RestController
@CrossOrigin
public class PricingServiceImpl implements PricingService {

    private static Logger log = LogManager.getLogger(PricingServiceImpl.class.getName());
    private final String ERR_MSG = " ERR_INF:=";
    private final String PROCESS_START = " Processing START para:=";
    private final String RPOCESS_SUCCESS_END = " Processing SUCCESS para:=";
    private final String PROCESS_FAILED_END = " Processing FAIL";
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

        // Todo 最终给客户演示时，需要在具有License的机器上，把debugMode关掉，否则无法运行
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
        JSONObject requestContentLeg1 = jRequestContent.getJSONObject("leg1");
        JSONObject requestContentLeg2 = jRequestContent.getJSONObject("leg2");
        Map<String, String> m = new HashMap<String, String>();
        String key;
        String value;
        String[] results;
        JSONObject res =new JSONObject();
        log.info(pricingType + " ----  Pricing Type");
        IRSRequest irsleg1Request = JSON.parseObject(requestContentLeg1.toString(), IRSRequest.class);
        IRSRequest irsleg2Request = JSON.parseObject(requestContentLeg2.toString(), IRSRequest.class);
        String leg1effectiveDate = DateStandardString(irsleg1Request.getQiXiRi());
        String leg1maturityDate = DateStandardString(irsleg2Request.getDaoQiRi());
        String valuationDate = DateStandardString(Calendar.getInstance().getTime());


        String prodCode = "Product_OISSwap_Generic";
        String csvParams = "ValuationDate," + valuationDate + "\r\n" +
                "Currency,"+irsleg1Request.getBiZhong()+"\r\n" +
                "Notional,"+irsleg1Request.getAmount()+"\r\n" +
                "EffectiveDate,"+leg1effectiveDate+"\r\n" +
                "MaturityDate,"+leg1maturityDate+"\r\n" +
                "FixedLegCouponRate,"+irsleg1Request.getXiPiaoLv()+"\r\n" +
                "FixedLegPayFreq,"+"3M"+"\r\n" +
                "FixedLegDayCount,"+irsleg1Request.getJiXiJiZhun()+"\r\n" +
                "FixedLegPayLag,"+"1bd"+"\r\n" +
                "FixedLegPayBusAdj,"+"F"+"\r\n" +
                "FloatLegPayFreq,"+"3M"+"\r\n" +
                "FloatLegDayCount,"+irsleg2Request.getJiXiJiZhun()+"\r\n" +
                "FloatLegPayLag,"+"1bd"+"\r\n" +
                "FloatLegPayBusAdj,"+"F"+"\r\n" +
                "FloatLegAccrualFreq,"+"2bd"+"\r\n" +
                "FloatLegAccrualBusAdj,"+"F"+"\r\n" +
                "FloatLegFixingLag,"+"0bd"+"\r\n" +
                "FloatLegEndOfMonthRule,"+"false\r\n" +
                "FloatLegSpread,"+"0.0005\r\n" +
                "SettlementLag,"+"2bd\r\n" +
                "FloatLegIndexCurve,CURVE_USD_OIS#BLOOMBERG#MID\r\n" +
                "FloatLegIndexFixings,FEDL01#BLOOMBERG#1";
        results = api.evaluate(prodCode, csvParams);
        res.put("Result",IRSConstant.parseFromResults(results));
        return res;
    }

    @Override
    public JSONObject getCCSPricingResult(String pricingType, Object requestContent){
        JSONObject jRequestContent =(JSONObject) requestContent;
        JSONObject requestContentLeg1 = jRequestContent.getJSONObject("leg1");
        JSONObject requestContentLeg2 = jRequestContent.getJSONObject("leg2");
        Map<String, String> m = new HashMap<String, String>();
        String key;
        String value;
        String[] results;
        JSONObject res =new JSONObject();
        log.info(pricingType + " ----  Pricing Type");
        IRSRequest irsleg1Request = JSON.parseObject(requestContentLeg1.toString(), IRSRequest.class);
        IRSRequest irsleg2Request = JSON.parseObject(requestContentLeg2.toString(), IRSRequest.class);
        String leg1effectiveDate = DateStandardString(irsleg1Request.getQiXiRi());
        String leg1maturityDate = DateStandardString(irsleg1Request.getDaoQiRi());
        String valuationDate = DateStandardString(Calendar.getInstance().getTime());
        String prodCode = "Product_CCBasisSwap_Generic";
        String csvParams = "ValuationDate,"+valuationDate+"\r\n" +
                "Currency1,"+irsleg1Request.getBiZhong()+"\r\n" +
                "Currency2,"+irsleg2Request.getBiZhong()+"\r\n" +
                "Notional1,"+irsleg1Request.getAmount()+"\r\n" +
                "Notional2,"+irsleg2Request.getAmount()+"\r\n" +
                "EffectiveDate,"+leg1effectiveDate+"\r\n" +
                "MaturityDate,"+leg1maturityDate+"\r\n" +
                "Currency1_Spread,"+"0.0005"+"\r\n" +
                "Currency1_PayFreq,"+"3M"+"\r\n" +
                "Currency1_DayCount,"+irsleg1Request.getJiXiJiZhun()+"\r\n" +
                "Currency2_Spread,"+"0.0005"+"\r\n" +
                "Currency2_PayFreq,"+"3M"+"\r\n" +
                "Currency2_DayCount,"+irsleg2Request.getJiXiJiZhun()+"\r\n" +
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
        SWAPTIONRequest swaptionRequest = JSON.parseObject(requestContent.toString(), SWAPTIONRequest.class);
        String valuationDate = DateStandardString(Calendar.getInstance().getTime());
        String prodCode = "Product_Swaption_Generic";
        String csvParams = "ValuationDate," + valuationDate + "\r\n" +
                "Notional,"+swaptionRequest.getTouCun()+"\r\n" +
                "Currency,"+swaptionRequest.getBiZhong()+"\r\n" +
                "OptionStrike,"+swaptionRequest.getXingQuanJia()+"\r\n" +
                "OptionPosition,LongReceiver\r\n" +
                "OptionExpiryDate,"+swaptionRequest.getQiQuanFeiJiaoFuRi()+"\r\n" +
                "OptionNotificationDays,"+"2bd"+"\r\n" +
                "SwapStartDate,"+swaptionRequest.getQiXiRi() +"\r\n" +
                "SwapEndDate,"+swaptionRequest.getDaoQiRi()+"\r\n" +
                "SwapFixedLegPayFreq,"+"6M"+"\r\n" +
                "SwapFixedLegDayCount,"+swaptionRequest.getJiXiTianShuFangshi()+"\r\n" +
                "SwapFloatLegResetFreq,"+"3M"+"\r\n" +
                "SwapFloatLegPayFreq,"+"3M"+"\r\n" +
                "SwapFloatLegDayCount,"+swaptionRequest.getJiXiTianShuFangShiFuDongDuan() +"\r\n" +
                "SwapFloatLegSpread,"+"0.0005"+"\r\n" +
                "SwapFloatLegIndexCurve,CURVE_USD_LIBOR3M#BLOOMBERG#MID\r\n" +
                "SwapFloatLegIndexFixings,US0003M#BLOOMBERG#1\r\n" +
                "Volatility,Vol_USD_SWAPTION_VCUB_LIBOR3M#BLOOMBERG#MID";
        results = api.evaluate(prodCode, csvParams);
        res.put("Result",FX_SwaptionConstant.parseFromResults(results));
        return res;


    }
    @Override
    @RequestMapping(value = "/frtbdata/getFXFWDSwapPricingResult" )
    public JSONObject getFXFWDSwapPricingResult(@RequestParam(value = "PricingType", required = true) String pricingType, @RequestBody Object requestContent){
        Map<String, String> m = new HashMap<String, String>();
        String key;
        String value;
        String[] results;
        JSONObject res =new JSONObject();
        log.info(pricingType + " ----  Pricing Type");
       //FX SWAP 和 FX FWD 用了一个表单
        FXFWDRequest fxfwdswapRequest = JSON.parseObject(requestContent.toString(), FXFWDRequest.class);
        String valuationDate = DateStandardString(Calendar.getInstance().getTime());
        String baseCurrency = fxfwdswapRequest.getCurrencyPair().substring(0, 3);
        String termCurrency = fxfwdswapRequest.getCurrencyPair().substring(4, 7);
        String deliveryDate = DateStandardString(fxfwdswapRequest.getYuanDuanJiaogeRi());
        String nearlegDate = DateStandardString(fxfwdswapRequest.getJinDuanQiXiRi());
        String nearlegEndDate = DateStandardString(fxfwdswapRequest.getJinDuanJiaoGeRi());
        String farlegDate = DateStandardString(fxfwdswapRequest.getYuanDuanQixiRi());
        String farlegEndDate = DateStandardString(fxfwdswapRequest.getYuanDuanJiaogeRi());
        String prodCode = "Product_FX_Swap_Generic";
        String csvParams = "ValuationDate,"+valuationDate+"\r\n" +
                "BaseCurrency,"+baseCurrency+"\r\n" +
                "Currency,"+termCurrency+"\r\n" +
                "NearLegDate,"+nearlegDate+"\r\n" +
                "NearLegForwardRate,"+fxfwdswapRequest.getJinDuanHuiLv()+"\r\n" +
                "NearLegNotional,"+fxfwdswapRequest.getWaiBiJinDuanJingE()+"\r\n" +
                "FarLegDate,"+farlegDate+"\r\n" +
                "FarLegForwardRate,"+fxfwdswapRequest.getYuanDuanHuiLv()+"\r\n" +
                "FarLegNotional,"+fxfwdswapRequest.getWaiBiYuanDuanJingE()+"\r\n" +
                "BaseCcyDiscountCurve,CURVE_USD_IMPLIED_USDCNY#BLOOMBERG#MID\r\n" +
                "DiscountCurve,CURVE_CNY_REPO7D#BLOOMBERG#MID\r\n" +
                "FxSpot,FXSPOT_USD#BLOOMBERG#MID\r\n" +
                "";
        results = api.evaluate(prodCode, csvParams);
        res.put("Result",FX_SwapConstant.parseFromResults(results));
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

        FXDigitalRequest fxdigitalRequest = JSON.parseObject(requestContent.toString(), FXDigitalRequest.class);
        String valuationDate = DateStandardString(Calendar.getInstance().getTime());
        String baseCurrency = fxdigitalRequest.getCurrencyPair().substring(0, 3);
        String termCurrency = fxdigitalRequest.getCurrencyPair().substring(4, 7);
        String endDate = DateStandardString(fxdigitalRequest.getDaoQiRi());
        String deliveryDate = DateStandardString(fxdigitalRequest.getJiaoGeRi());
        String prodCode = "Product_FX_Digital_Generic";
        String csvParams = "ValuationDate,"+valuationDate+"\r\n" +
                "BaseCurrency,"+baseCurrency+"\r\n" +
                "Currency,"+termCurrency+"\r\n" +
                "Direction,"+"Buy"+"\r\n" +
                "CallPut,"+fxdigitalRequest.getDigitalOptionType()+"\r\n" +
                "ExpiryDate,"+endDate+"\r\n" +
                "DeliveryDate,"+deliveryDate+"\r\n" +
                "Strike,"+fxdigitalRequest.getXingQuanJia()+"\r\n" +
                "PayoutAmount,"+fxdigitalRequest.getBenBiJingE()+"\r\n" +
                "PayoutCurrency,"+"CNY"+"\r\n" +
                "ModelType,"+"LocalVol"+"\r\n" +
                "MonteCarloPaths,"+"10000"+"\r\n" +
                "MonteCarloSteps,"+"100"+"\r\n" +
                "BaseCcyDiscountCurve,CURVE_USD_IMPLIED_USDCNY#BLOOMBERG#MID\r\n" +
                "DiscountCurve,CURVE_CNY_REPO7D#BLOOMBERG#MID\r\n" +
                "FxSpot,FXSPOT_USD#BLOOMBERG#MID\r\n" +
                "Volatility,VOL_USDCNY_OPTIONVOL#BLOOMBERG#MID";
        results = api.evaluate(prodCode, csvParams);
        String[] sourceStrArray = results[1].split("\r\n");
        res.put("Result",FX_DigitalConstant.parseFromResults(results));
        return res;
    }


    /*Todo 需要根据品种修改自己的Function
        1. 增加自己的Request实体Class，把自己前端传进来的报文，解析出来。 见下文包含 FXFWDRequest.class 这一行的代码
        1.1 在编写 自己的Request实体Class时， 建议来到这个网址， http://www.bejson.com/json2javapojo/new/ 把顾博士示例用的Form 放进去，会自动生成Pojo实体 Class，注意事项见下文。
        1.2 由于需要跟发送报文的格式匹配，强烈建议检查每个取值的 类型是否标准。
        1.3 匹配过程最容易遇到的问题就是字符类型不匹配，所以强烈建议，日期类型用 Date，然后参考 DateStandardString 这一行的实现方法把他转成标准格式
        1.4 数值类型用 Double， 字符类型就是 String
        2. 在下文对自己报文与定价所需Input要素，做一一匹配
        2.1 目标数据类型一定是 String
        2.2 最简单的方法是直接用字符串拼接的方法 + + 就搞定了
        3. 最后就是返回数值了，返回数值也是csv格式
        3.1 To 顾博士，目前我发现返回值好像还有对应关系有问题的情况，明天可以再看一下，跟他们同步修改吧
        以上是我能想到最快的修改方法了。。 供大家参考。
    */

    @Override
    @RequestMapping(value = "/frtbdata/getFXFWDPricingResult")
    public JSONObject getFXFWDPricingResult(@RequestParam(value = "PricingType", required = true) String pricingType, @RequestBody Object requestContent) {

        String[] results;
        JSONObject res = new JSONObject();
        log.info(pricingType + " ----  Pricing Type");

        FXFWDRequest fxfwdRequest = JSON.parseObject(requestContent.toString(), FXFWDRequest.class);
        String baseCurrency = fxfwdRequest.getCurrencyPair().substring(0, 3);
        String termCurrency = fxfwdRequest.getCurrencyPair().substring(4, 7);
        String deliveryDate = DateStandardString(fxfwdRequest.getYuanDuanJiaogeRi());
        String valuationDate = DateStandardString(Calendar.getInstance().getTime());

        log.info("baseCurrency:" + baseCurrency + "-----termCurrency:" + termCurrency + "-----deliveryDate:" + deliveryDate + "-----valuationDate:" + valuationDate);
        String prodCode = "Product_FX_Forward_Generic";
        String csvParams = "ValuationDate," + valuationDate + "\r\n" +
                "BaseCurrency," + baseCurrency + "\r\n" +
                "Currency," + termCurrency + "\r\n" +
                "DeliveryDate," + deliveryDate + "\r\n" +
                "ForwardRate," + fxfwdRequest.getYuanDuanHuiLv() + "\r\n" +
                "Notional," + fxfwdRequest.getWaiBiYuaDuanLiLv() + "\r\n" +
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

        EuropeanOptionRequest fxeuropeanRequest = JSON.parseObject(requestContent.toString(), EuropeanOptionRequest.class);
        String valuationDate = DateStandardString(Calendar.getInstance().getTime());
        String baseCurrency = fxeuropeanRequest.getCurrencyPair().substring(0, 3);
        String termCurrency = fxeuropeanRequest.getCurrencyPair().substring(4, 7);
        String expiryDate = DateStandardString(fxeuropeanRequest.getExpireDate());
        String deliveryDate = DateStandardString(fxeuropeanRequest.getJiaoGeDate());
        String prodCode = "Product_FX_EuropeanVanilla_Generic";
        String csvParams = "ValuationDate,"+valuationDate+"\r\n" +
                "BaseCurrency,"+baseCurrency+"\r\n" +
                "Currency,"+termCurrency+"\r\n" +
                "Direction,"+fxeuropeanRequest.getDirection()+"\r\n" +
                "SettlementType,"+"Physical"+"\r\n" +
                "CallPut,"+fxeuropeanRequest.getOptionType()+"\r\n" +
                "ExpiryDate,"+expiryDate+"\r\n" +
                "DeliveryDate,"+deliveryDate+"\r\n" +
                "Strike,"+fxeuropeanRequest.getXingQuanJia()+"\r\n" +
                "Delta,"+"0.5"+"\r\n" +
                "DeltaType,"+"Forward"+"\r\n" +
                "Notional,"+fxeuropeanRequest.getWaibiQiQuanJingE()+"\r\n" +
                "ImpliedVol,"+fxeuropeanRequest.getVolatility()+"\r\n" +
                "ModelType,"+"Black-Scholes"+"\r\n" +
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
        BONDRequest bondRequest = JSON.parseObject(requestContent.toString(), BONDRequest.class);
        String valuationDate = DateStandardString(Calendar.getInstance().getTime());
        String effectiveDate = DateStandardString(bondRequest.getInterestStartDate());
        String maturityDate = DateStandardString(bondRequest.getJieSuanRi());
        String prodCode = "Product_Bond_Generic";
        String csvParams = "ValuationDate,"+valuationDate+"\r\n" +
                "Currency,"+"CNY"+"\r\n" +
                "Notional,"+bondRequest.getPiaoMianZongE()+"\r\n" +
                "CouponRate,"+bondRequest.getPiaoMianLiLv()+"\r\n" +
                "CouponBasis,"+bondRequest.getJiXiTianShuFangshi()+"\r\n" +
                "PayPrincipalAtMaturity,"+"true"+"\r\n" +
                "TradeDate,"+bondRequest.getExerciseDate() +"\r\n" +
                "EffectiveDate,"+effectiveDate+"\r\n" +
                "MaturityDate,"+maturityDate +"\r\n" +
                "FirstCouponDate,"+effectiveDate+"\r\n" +
                "PenultimateCouponDate,"+maturityDate+"\r\n" +
                "PayFreq,"+"3M"+"\r\n" +
                "CompoundingFreq,"+"3M"+"\r\n" +
                "FrontStub,true\r\n" +
                "LongStub,false\r\n" +
                "AccrualDateBusAdj,"+"MF"+"\r\n" +
                "PayDateBusAdj,"+"F"+"\r\n" +
                "PrincipalPayDateBusAdj,"+"F"+"\r\n" +
                "CouponPaymentLag,2bd\r\n" +
                "SettlementLag,2bd\r\n" +
                "YieldToMaturity,"+bondRequest.getShouYiLv() +"\r\n" +
                "SolvingYieldByPrice,false\r\n" +
                "QuotedPrice,123.0919296\r\n" +
                "IsDirtyPrice,true\r\n" +
                "IsCallable,false\r\n" +
                "CallDate,"+maturityDate+"\r\n" +
                "CallPrice,100";
        results = api.evaluate(prodCode, csvParams);
        String[] sourceStrArray = results[1].split("\r\n");
        res.put("Result",BondConstant.parseFromResults(results));
        return res;


    }

    public String DateStandardString(Object date) {
        SimpleDateFormat DateFormat = new SimpleDateFormat("dd-MMM-yyyy", Locale.US);
        if (date instanceof Date) {
            return DateFormat.format(date);
        } else if (date instanceof String) {
            SimpleDateFormat simpleDateFormat = new SimpleDateFormat("dd-MMM-yyyy", Locale.US);
            try {
                Date petsDate = simpleDateFormat.parse((String) date);
                return DateFormat.format(petsDate);
            } catch (ParseException e) {
                log.error("parse date error:{}  date:{}", e.getMessage(), date);
                return DateFormat.format(new Date());
            }
        } else {
            log.error("date:{} type:{} not supported", date, date.getClass());
            return DateFormat.format(new Date());
        }
    }

}
