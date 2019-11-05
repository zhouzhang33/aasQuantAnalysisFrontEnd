package com.ey.pricingservice.entity;

import java.util.Arrays;
import java.util.List;

public class FXFWDConstant {


    public static String GetNPV = "getNPV";
    public static String LOGLINEAR_TermStructure = "log_linear";
    public static String CUBICSPLINE_TermStructure = "cubic_spline";

    public static String BASECCY = "CURRENCY1";
    public static String TERMCCY = "CURRENCY2";
    public static String BASENotional = "BASENotional";
    public static String NPV = "pv";
    public static String DF1 = "df currency1";
    public static String DF2 = "df currency2";
    public static List<String> FXFWD_PRICING_INPUTS = Arrays.asList(
            BASECCY, TERMCCY, BASENotional
    );
    public static List<String> FXFWD_PRICING_OUTPUTS = Arrays.asList(
            NPV, DF1, DF2
    );

}
