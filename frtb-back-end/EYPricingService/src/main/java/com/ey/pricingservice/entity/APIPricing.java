package com.ey.pricingservice.entity;

import com.quant.release.api.ApiPricer;

import java.io.File;

public class APIPricing {
    public ApiPricer api;
    public APIPricing(){
        String pathTestMarketCsv = "../market/TestMarket.csv";
        //
        // Change path to local file location of "TestFixings.csv".
        String pathTestFixingsCsv = "../market/TestFixings.csv";

        // create context
        //
        String prodCode;
        String csvParams;
        String[] results;

        String contextID = "Test api pricer";
        String marketDataFilePath = new File(pathTestMarketCsv).getPath();
        String fixingDataFilePath = new File(pathTestFixingsCsv).getPath();
        boolean debugMode = true;
        api = new ApiPricer(contextID, marketDataFilePath, fixingDataFilePath,debugMode);
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
    }

}
