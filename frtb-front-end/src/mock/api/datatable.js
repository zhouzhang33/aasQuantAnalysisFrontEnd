import data_a from  './table_data.json'
import data_l from  './table_data_l.json'
import data_s from  './table_data_s.json'
import credit_examine from './credit_examine.json'
// import aml from './aml.json'
// import aml2 from './aml2.json'
// import frtbworkflow from './frtbworkflow'

const frtbworkflow= [{
  id: '20',
  name: 'LoadRates',
  status: 'success',
  desc: 'Load all private rates',
  type: 'LoadRate',
  started: '2019-08-27 11:36 AM',
  ended: '2019-08-27 11:37 AM',
  elapsed: '-',
  dep: '',
  runalone: 'False',
  user: 'System',
  expandData: [{
    calcDesc: 'MarketStandard - CD_Desks_Americas',
    progress: 100,
    details: 'View Details'
  },{
    calcDesc: 'MarketStandard - Equity_Desks_Americas',
    progress: 100,
    details: 'View Details'
  },{
    calcDesc: 'MarketStandard - FX_Desks_Asia',
    progress: 100,
    details: 'View Details'
  },{
    calcDesc: 'MarketStandard - IR_Desks_Asia',
    progress: 100,
    details: 'View Details'
  },{
    calcDesc: 'MarketStandard - Total_New_York',
    progress: 100,
    details: 'View Details'
  },{
    calcDesc: 'MarketStandard - Total_Singapre',
    progress: 100,
    details: 'View Details'
  },]
},
{
  id: '30',
  name: 'LoadTrades',
  status: 'success',
  desc: 'Load all trades',
  type: 'LoadTrade',
  started: '2019-08-27 11:36 AM',
  ended: '2019-08-27 11:37 AM',
  elapsed: '0.18',
  dep: '',
  runalone: 'False',
  user: 'Robin',
  expandData: []
},
{
  id: '40',
  name: 'LoadSA',
  status: 'success',
  desc: 'Load external FRTB sensitivities, SA DRC and residual',
  type: 'LoadTrade',
  started: '2019-08-27 11:36 AM',
  ended: '2019-08-27 11:37 AM',
  elapsed: '0.18',
  dep: '',
  runalone: 'False',
  user: 'System',
  expandData: []
},
{
  id: '45',
  name: 'LoadDRC',
  status: 'success',
  desc: 'Load parameters for internal DRC calculation',
  type: 'LoadMarketSensitivity',
  started: '2019-08-27 11:36 AM',
  ended: '2019-08-27 11:37 AM',
  elapsed: '-',
  dep: '',
  runalone: 'False',
  user: 'System',
  expandData: []
},
{
  id: '50',
  name: 'ReconcileTrades',
  status: 'success',
  desc: 'Reconsile trades with front office',
  type: 'MarketToMarket',
  started: '2019-08-27 11:36 AM',
  ended: '2019-08-27 11:37 AM',
  elapsed: '0.27',
  dep: '20, 30',
  runalone: 'False',
  user: 'Robin',
  expandData: []
},
{
  id:'100',
  name:'ReadyForFRTB',
  status:'success',
  desc:'Prerequisites for FRTB completed',
  type:'Milestone',
  started:'2018-9-21',
  ended:'2018-9-21',
  elapsed:'0:00',
  dep:'40,45,50',
  runalone:'False',
  user:'System',
  expeandData:[]
},
{
  id:'110',
  name:'SAPrep',
  status:'success',
  desc:'Run FRTB SA Prep on all desks',
  type:'MarketStandardPreparation',
  started:'2018-9-21',
  ended:'2018-9-21',
  elapsed:'0:48',
  dep:'100',
  runalone:'False',
  user:'System',
  expeandData:[]
},
{
  id:'120',
  name:'SA',
  status:'success',
  desc:'Run FRTB standard model on SA desks',
  type:'Marketstandard',
  started:'2018-9-21',
  ended:'2018-9-21',
  elapsed:'1:06',
  dep:'40,110',
  runalone:'False',
  user:'System',
  expeandData:[]
},
{
  id:'130',
  name:'SA-Floor',
  status:'success',
  desc:'Run FRTB standard model on IMA desks',
  type:'Marketstandard',
  started:'2018-9-21',
  ended:'2018-9-21',
  elapsed:'1:09',
  dep:'40,110',
  runalone:'False',
  user:'System',
  expeandData:[]
},
{
  id:'200',
  name:'ExpectedShortfall',
  status:'success',
  desc:'Run FRTB expected shortfall on IMA desks',
  type:'ExpectedShortfall',
  started:'2018-9-21',
  ended:'2018-9-21',
  elapsed:'3:28',
  dep:'100',
  runalone:'False',
  user:'System',
  expeandData:[]
},
{
  id:'210',
  name:'SES',
  status:'success',
  desc:'Run IMA stressed capital add-on for NMRF',
  type:'Marketstress',
  started:'2018-9-21',
  ended:'2018-9-21',
  elapsed:'1:55',
  dep:'100',
  runalone:'False',
  user:'System',
  expeandData:[]
},
{
  id:'220',
  name:'DRC',
  status:'success',
  desc:'Run internal default risk model',
  type:'InternalDRC',
  started:'2018-9-21',
  ended:'2018-9-21',
  elapsed:'1:38',
  dep:'45,100',
  runalone:'False',
  user:'System',
  expeandData:[]
},
{
  id:'230',
  name:'IMA',
  status:'success',
  desc:'Aggregate Expected Shortfall, SES and DRC',
  type:'Marketinternal',
  started:'2018-9-21',
  ended:'2018-9-21',
  elapsed:'0:03',
  dep:'200,210,220',
  runalone:'False',
  user:'System',
  expeandData:[]
},
{
  id:'300',
  name:'Capital',
  status:'success',
  desc:'Gather complete FRTB capital results',
  type:'Capital',
  started:'2018-9-21',
  ended:'2018-9-21',
  elapsed:'0:01',
  dep:'120,130,230',
  runalone:'False',
  user:'System',
  expeandData:[]
},
{
  id:'310',
  name:'PublishCapital',
  status:'success',
  desc:'Publish capital and other reports',
  type:'Publish',
  started:'2018-9-21',
  ended:'2018-9-21',
  elapsed:'0:05',
  dep:'50-300',
  runalone:'False',
  user:'System',
  expeandData:[]
},
{
  id:'500',
  name:'ReadyForValidation',
  status:'success',
  desc:'Ready for Backtesting and P&L tests',
  type:'Milestone',
  started:'2018-9-21',
  ended:'2018-9-21',
  elapsed:'0:00',
  dep:'300',
  runalone:'False',
  user:'System',
  expeandData:[]
},
{
  id:'600',
  name:'VaR975',
  status:'success',
  desc:'VaR 97.5 confidence',
  type:'MarketVar',
  started:'2018-9-21',
  ended:'2018-9-21',
  elapsed:'1:15',
  dep:'500',
  runalone:'False',
  user:'System',
  expeandData:[]
},
{
  id:'610',
  name:'VaR99',
  status:'success',
  desc:'VaR 99 confidence',
  type:'MarketVar',
  started:'2018-9-21',
  ended:'2018-9-21',
  elapsed:'1:04',
  dep:'500',
  runalone:'False',
  user:'System',
  expeandData:[]
},
{
  id:'700',
  name:'LoadActualPL',
  status:'success',
  desc:'Load actual P&L',
  type:'LoadDayilyPL',
  started:'2018-9-21',
  ended:'2018-9-21',
  elapsed:'-',
  dep:'',
  runalone:'False',
  user:'System',
  expeandData:[]
},
{
  id:'710',
  name:'LoadHypotheticalPL',
  status:'success',
  desc:'Load Hypothetical P&L',
  type:'LoadDayilyPL',
  started:'2018-9-21',
  ended:'2018-9-21',
  elapsed:'-',
  dep:'',
  runalone:'False',
  user:'System',
  expeandData:[]
},
{
  id:'720',
  name:'BackTesting',
  status:'success',
  desc:'Run BackTesting',
  type:'BackTesting',
  started:'2018-9-21',
  ended:'2018-9-21',
  elapsed:'0:09',
  dep:'500,600-710',
  runalone:'False',
  user:'System',
  expeandData:[]
},
{
  id:'730',
  name:'TheoreticalPL',
  status:'success',
  desc:'Run theoretical P&L',
  type:'TheoreticalPL',
  started:'2018-9-21',
  ended:'2018-9-21',
  elapsed:'0:54',
  dep:'500,710',
  runalone:'False',
  user:'System',
  expeandData:[]
},
{
  id:'740',
  name:'PLAttribution',
  status:'success',
  desc:'Run P&L attribution',
  type:'PLAttribution',
  started:'2018-9-21',
  ended:'2018-9-21',
  elapsed:'0:07',
  dep:'710,730',
  runalone:'False',
  user:'System',
  expeandData:[]
},
{
  id:'800',
  name:'PublishValidation',
  status:'success',
  desc:'Publish BackTesting and P&L reports',
  type:'Publish',
  started:'2018-9-21',
  ended:'2018-9-21',
  elapsed:'0:00',
  dep:'720-740',
  runalone:'False',
  user:'System',
  expeandData:[]
},
{
  id:'900',
  name:'IMACalibration',
  status:'success',
  desc:'Run IMA Calibration-runs monthly',
  type:'ExpectedShortfall',
  started:'2018-9-21',
  ended:'2018-9-21',
  elapsed:'6:12',
  dep:'500',
  runalone:'False',
  user:'System',
  expeandData:[]
},
{
  id:'950',
  name:'AnalyseRates',
  status:'success',
  desc:'Analyse rates',
  type:'RateAnalysis',
  started:'2018-9-21',
  ended:'2018-9-21',
  elapsed:'0:53',
  dep:'100',
  runalone:'True',
  user:'System',
  expeandData:[]
}

];

export default [
  {
    path: "/api/datatable/allcomp",
    method: "post",
    handle() {
      return {
        code: 0,
        msg: "获取数据成功",
        data: {
          list: data_a
        }
      };
    }
  },
  {
    path: "/api/datatable/small",
    method: "post",
    handle() {
      return {
        code: 0,
        msg: "获取数据成功",
        data: {
          list: data_s
        }
      };
    }
  },
  {
    path: "/api/datatable/large",
    method: "post",
    handle() {
      return {
        code: 0,
        msg: "获取数据成功",
        data: {
          list: data_l
        }
      };
    }
  },
  {
    path: "/api/datatable/credit_examine",
    method: "post",
    handle() {
      return {
        code: 0,
        msg: "获取数据成功",
        data: {
          list: credit_examine
        }
      };
    }
  },
  {
    path: "/api/datatable/aml",
    method: "post",
    handle() {
      return {
        code: 0,
        msg: "获取数据成功",
        data: {
          list: aml
        }
      };
    }
  },
  {
    path: "/api/datatable/bml",
    method: "post",
    handle() {
      return {
        code: 0,
        msg: "获取数据成功",
        data: {
          list: aml2
        }
      };
    }
  },
  {
    path: "/api/datatable/workflow",
    method: "get",
    handle() {
      return {
        code: 0,
        msg: "获取数据成功",
        data: {
          list: frtbworkflow
        }
      };
    }
  },


]
