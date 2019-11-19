package smoketest;

import java.io.File;

import com.quant.release.api.ApiPricer;

public class API_Tester {

	public static void main(String[] args) {
		System.out.println("Test_release_api_ApiPricer.main()");

		test_ApiPricer();

		System.out.println("done");
	}

	public static void test_ApiPricer() {
		// ================================================================================
		// Arguments:
		// ================================================================================
		//
		// Debug mode set to true in development environment.
		// Debug mode set to false in production environment.
		boolean debugMode = true;
		//
		// Change path to local file location of "TestMarket.csv".
		String pathTestMarketCsv = "resources/TestMarket.csv";
		//
		// Change path to local file location of "TestFixings.csv".
		String pathTestFixingsCsv = "resources/TestFixings.csv";

		// ================================================================================
		// Test starts here:
		// ================================================================================

		// time
		//
		long start = System.currentTimeMillis();

		// create context
		//
		String prodCode;
		String csvParams;
		String[] results;

		String contextID = "Test api pricer";
		String marketDataFilePath = new File(pathTestMarketCsv).getPath();
		String fixingDataFilePath = new File(pathTestFixingsCsv).getPath();
		ApiPricer api = new ApiPricer(contextID, marketDataFilePath, fixingDataFilePath, debugMode);
		//
		// time
		//
		System.out.println("Time: " + (System.currentTimeMillis() - start) + " ms. Create new api pricer context.");
		start = System.currentTimeMillis();

		// ================================================================================
		// signatures of market data & fixing data
		//
		String[] mdSigs = api.getMarketDataSignatures();
		String[] fdSigs = api.getFixingsDataSignatures();
		// display
		//
		for (String line : mdSigs) {
			System.out.println(line);
		}
		System.out.println("================================================================================");

		for (String line : fdSigs) {
			System.out.println(line);
		}
		System.out.println("================================================================================");
		//
		// ================================================================================

		// ================================================================================
		// calculate a trade
		//
		prodCode = "Product_Bond_Generic";
		csvParams = "ValuationDate,10-oct-2011\r\n" +
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

		// display
		//
		if (results == null)
			System.out.println("Error happens in calculation");
		else
			for (String line : results) {
				System.out.println(line);
			}
		System.out.println("================================================================================");
		//
		// ================================================================================

		// ================================================================================
		// calculate a trade
		//
		prodCode = "Product_FX_EuropeanVanilla_Generic";
		csvParams = "ValuationDate,18-jun-2019\r\n" +
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

		// display
		//
		if (results == null)
			System.out.println("Error happens in calculation");
		else
			for (String line : results) {
				System.out.println(line);
			}
		System.out.println("================================================================================");
		//
		// ================================================================================

		// ================================================================================
		// calculate a trade
		//
		prodCode = "Product_FX_Forward_Generic";
		csvParams = "ValuationDate,18-jun-2019\r\n" +
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

		// display
		//
		if (results == null)
			System.out.println("Error happens in calculation");
		else
			for (String line : results) {
				System.out.println(line);
			}
		System.out.println("================================================================================");
		//
		// ================================================================================

		// ================================================================================
		// calculate a trade
		//
		prodCode = "Product_FX_Swap_Generic";
		csvParams = "ValuationDate,18-jun-2019\r\n" +
				"BaseCurrency,USD\r\n" +
				"Currency,CNY\r\n" +
				"NearLegDate,18-jun-2019\r\n" +
				"NearLegForwardRate,7\r\n" +
				"NearLegNotional,1000000\r\n" +
				"FarLegDate,08-jan-2020\r\n" +
				"FarLegForwardRate,7.2\r\n" +
				"FarLegNotional,1000000\r\n" +
				"BaseCcyDiscountCurve,CURVE_USD_IMPLIED_USDCNY#BLOOMBERG#MID\r\n" +
				"DiscountCurve,CURVE_CNY_REPO7D#BLOOMBERG#MID\r\n" +
				"FxSpot,FXSPOT_USD#BLOOMBERG#MID\r\n" +
				"";
		results = api.evaluate(prodCode, csvParams);

		// display
		//
		if (results == null)
			System.out.println("Error happens in calculation");
		else
			for (String line : results) {
				System.out.println(line);
			}
		System.out.println("================================================================================");
		//
		// ================================================================================

		// ================================================================================
		// calculate a trade
		//
		prodCode = "Product_FX_Digital_Generic";
		csvParams = "ValuationDate,18-jun-2019\r\n" +
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

		// display
		//
		if (results == null)
			System.out.println("Error happens in calculation");
		else
			for (String line : results) {
				System.out.println(line);
			}
		System.out.println("================================================================================");
		//
		// ================================================================================

		// ================================================================================
		// calculate a trade
		//
		prodCode = "Product_OISSwap_Generic";
		csvParams = "ValuationDate,18-jun-2019\r\n" +
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

		// display
		//
		if (results == null)
			System.out.println("Error happens in calculation");
		else
			for (String line : results) {
				System.out.println(line);
			}
		System.out.println("================================================================================");
		//
		// ================================================================================

		// ================================================================================
		// calculate a trade
		//
		prodCode = "Product_CCBasisSwap_Generic";
		csvParams = "ValuationDate,18-jun-2019\r\n" +
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

		// display
		//
		if (results == null)
			System.out.println("Error happens in calculation");
		else
			for (String line : results) {
				System.out.println(line);
			}
		System.out.println("================================================================================");
		//
		// ================================================================================

		// ================================================================================
		// calculate a trade
		//
		prodCode = "Product_Swaption_Generic";
		csvParams = "ValuationDate,18-jun-2019\r\n" +
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

		// display
		//
		if (results == null)
			System.out.println("Error happens in calculation");
		else
			for (String line : results) {
				System.out.println(line);
			}
		System.out.println("================================================================================");
		//
		// ================================================================================

	}
}
