export default {
  login:{
    title: '大数据风险评级平台'
  },

  menu:{
    nh: '你好',
    zhuxiao: '注销',
  	gljsc:' 管理驾驶舱',
    fxjkpt: '风险监控平台',
    hgxx: '宏观信息',
    hgsj: '宏观数据',
    fxyjk: '风险知识库',
    gywm: '关于我们',
    solutions: '解决方案',
    customers: '客户案例',

    dsjqbz: '大数据情报站',
    qyfxhx: '企业风险画像',
    mxgl: '模型管理',
    mxjkjc: '模型健康监测',
    mxxlyfb: '模型训练与发布',
    glfx: '关联分析',
    gxcx: '关联关系查询',
    gxwj: '隐藏关系挖掘',

    gmjjhs: '国民经济核算',
    jgzs: '价格指数',
    jrbx: '金融保险',
    rkyjy: '人口与就业',

    yjzbj: '预警指标集',
    large: '信贷审批规则',
    small: '金融犯罪打标类',

    // 估值应用
    gzyy: '估值应用',
    gzss: '单笔试算',
    gjsysp: '贵金属衍生品',
    whysp: '外汇衍生品',
    pljs: '批量计算',
    sunyihz: '损益汇总',
    guiyinfx: '归因分析',
    sunyiyg: '损益预估',

    frtb: 'FRTB',
    workflow: '任务列表',
    fxfwd: '外汇远期',
    fxswap: '外汇利率互换',
    bond:'债券',
    bermudanswap: 'Bermudan Swap',
    irsccs:'IRS CCS',
    cds: 'CDS',
    european: '欧式期权',
    american: '美式期权',
    europeanOption:'欧式期权',
  },

  page:{
    index:{
      cjrd:'财经热点',
      hysxbj: '行业授信比较',
      jgfxfb: '各机构风险分布',

      t1: '今日待办事项',
      t2: "本月新增预警",
      t3: "监控企业数量",
      t4: "当月出险企业",

      bchart1: '贷款种类分布',
      bchart2: '客户流量与收入',
      bchart3: '逾期总额',
      bchart4: '平均流动性比率（人民币）',
    },
    riskmonitor:{
      header1: '今天',
      header2: '本月',
      header3: '本季度',

      wt1: '红色预警',
      wt2: '黄色预警',
      wt3: '蓝色预警',

      th11: '日期',
      th12: '公司',
      th13: '风险项',
      th14: '发生次数'

    },
    riskportrait:{
      txt1: "公司",
      txt11: "综合评分",
      txt12: "更新时间",
      txt2: "基本信息",
      txt3: "模块信用评分",
      txt4: "风险评分",
      txt5: "风险级别"
    },

    modelhealth:{
      txt1: "当前模型",
      txt2: "模型发布日期",
      txt3: "服务器概览",
      txt4: "模型健康监控",
      txt5: "集群状态监控"
    },
    modeldeploy:{
      txt1: "当前模块",
      txt2: "模型选择器",
      txt2_1:"点击以下卡片来选择对应模型",
      txt3: "模型训练与发布",
      txt4: "计算结果",

      fig1: "混淆矩阵",
      fig2: "特征重要性",
      fig3: "KS曲线",
      fig4: "ROC 曲线",

      form1: "训练",
      form2: "载入默认设置",
      form3: "保存设置",
      form4: "清空",
      desc: "使用默认配置训练的模型"
    },
    macrodata:{
      txt1: "国民经济核算",
      txt2: "价格指数",
      txt3: "金融保险",
      txt4: "人口就业",
      txt5: "新闻信息",
      txt6: "相关数据及新闻来源",
    },
    guominjingji:{
      txt1: "年度国内生产总值",
      txt2: "月度社会消费品零售总额",
      txt3: "月度全国外商直接投资",
    },
    jiagezhishu:{
      txt1: "月度工业品出厂价格指数",
      txt2: "月度居民消费价格指数",
      txt3: "月度国房景气指数",
    },
    jinrongbaoxian:{
      txt1: "月度货币供应数据",
      txt2: "月度外汇占款，黄金和外汇储备",
      txt3: "月度有效名义，实际汇率",
    },
    renkoujiuye:{
      txt1: "年度全国人口数及其构成",
      txt2: "年度全国从业人员和职工人数",
      txt3: "",
    },
    guanxichaxun:{
      txt1: "依次点击以下步骤可进行图挖掘操作，也可在右侧自定义算法。注意：使用本功能前，请确保浏览器可以访问剪切板！",
      txt2: "图挖掘算法",
      txt3: '注意：使用本功能前，请确保浏览器可以访问剪切板。',

      step1: "在下面窗口执行剪切板中的指令可以查看图库。",
      step2: "根据中心度算法计算可得5家主要公司：'瑞宝力源集团有限公司'，'资邦（上海）投资咨询有限公司'，'资邦（上海）投资管理有限公司'，'资邦元达（上海）互联网金融信息服务有限公司'，'资邦金服网络科技集团有限公司'" ,
      step3: "根据社区发现算法可得：'资邦（上海）投资咨询有限公司'的所有关联公司" ,
      step4: "根据相似度算法可得：'瑞宝力源集团有限公司'与'资邦金服网络科技集团有限公司'存在联系且'陶蕾'与'俞永生'具有极大的相似度",

      tip1: '算法已复制到剪切板',
      tip2: '算法调用失败，请允许浏览器访问剪切板',

      alg1: '中心度算法',
      alg2: '社区发现',
      alg3: '标签传播算法',
      alg4: '聚类系数算法',
      alg5: '相似度算法',
      alg6: '子网切割',
      alg7: '连通图算法',
      alg8: '疑似控制人',
      alg9: '疑似关联关系',
    }

  },
  pub: {
    pageHeader: {
      demo: '示例'
    }
  }
}
