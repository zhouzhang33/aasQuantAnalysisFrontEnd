import request from '@/plugin/axios'

export function cardindex () {
  return request({
    url: '/index/cardindex',
    method: 'post'
  })
}

export function creditindex () {
  return request({
    url: '/index/creditindex',
    method: 'post'
  })
}

export function provinceindex () {
  return request({
    url: '/index/provinceindex',
    method: 'post'
  })
}

export function loancatagory () {
  return request({
    url: '/index/loancatagory',
    method: 'post'
  })
}

export function customerIncome () {
  return request({
    url: '/index/customerIncome',
    method: 'post'
  })
}


// 预警指标集页面
export function allcomp () {
  return request({
    url: '/datatable/allcomp',
    method: 'post'
  })
}

export function small () {
  return request({
    url: '/datatable/small',
    method: 'post'
  })
}

export function large () {
  return request({
    url: '/datatable/large',
    method: 'post'
  })
}

export function credit_examine () {
  return request({
    url: '/datatable/credit_examine',
    method: 'post'
  })
}

export function aml () {
  return request({
    url: '/datatable/aml',
    method: 'post'
  })
}
export function aml2 () {
  return request({
    url: '/datatable/bml',
    method: 'get'
  })
}

export function frtbWorkFlow () {
  return request({
    url: '/datatable/workflow',
    method: 'get'
  })
}

////frtb data function
export function getDiscountCurve(){
  return request({
        url:'/frtbdata/discountcurve',
        method:'get'
      })
}
export function getInterestCurve(curveName){
  console.log('getInterestCurve')
  return request({
    url:'/frtbdata/getMarketData?curvename='+curveName,
    method:'get',
    data:null
  })
}
export function SavePricing(foldername,td){
  return request({
    url:'/frtbdata/save?product='+foldername,
    method:'post',
    responseType: 'json',
    data: td
  })
}
// //*************************
// //mock API
// export function getFXFWDPricingResult(type,td){
//   return request({
//     url:'/frtbdata/getFXFWDPricingResult?PricingType='+type,
//     method:'get',
//     responseType: 'json',
//     data: td
//   })
// }
// export function getEuroOptionPricingResult(type,td){
//   return request({
//     url: '/frtbdata/getEuroOptionPricingResult?PricingType='+type,
//     method:'get',
//     responseType: 'json',
//     data: td
//   })
// }
// export function getIRSCCSPricingResult(type,td){
//   return request({
//     url: '/frtbdata/getIRSCCSPricingResult?PricingType='+type,
//     method:'get',
//     responseType: 'json',
//     data: td
//   })
// }
// export function getBondPricingResult(type,td){
//   return request({
//     url: '/frtbdata/getBondPricingResult?PricingType='+type,
//     method:'get',
//     responseType: 'json',
//     data: td
//   })
// }
// export function getSwaptionPricingResult(type,td){
//   return request({
//     url: '/frtbdata/getSwaptionPricingResult?PricingType='+type,
//     method:'get',
//     responseType: 'json',
//     data: td
//   })
// }
// export function getFXDigitalPricingResult(type,td){
//   return request({
//     url: '/frtbdata/getFXDigitalPricingResult?PricingType='+type,
//     method:'get',
//     responseType: 'json',
//     data: td
//   })
// }
//

 //*************************
// //后端API
var url_pre = 'http://127.0.0.1:8081'
export function getFXFWDPricingResult(type,td){
  return request({
    url:'/frtbdata/getFXFWDPricingResult?PricingType='+type,
    method:'get',
    responseType: 'json',
    data: td
  })
}
export function getEuroOptionPricingResult(type,td){
  return request({
    url: url_pre + '/frtbdata/getEuroOptionPricingResult?PricingType='+type,
    method:'get',
    responseType: 'json',
    data: td
  })
}
export function getIRSCCSPricingResult(type,td){
  return request({
    url: '/frtbdata/getIRSCCSPricingResult?PricingType='+type,
    method:'get',
    responseType: 'json',
    data: td
  })
}
export function getBondPricingResult(type,td){
  console.log(td,'data in pricing')
  return request({
    url: url_pre + '/frtbdata/getBondPricingResult?PricingType='+type,
    method:'post',
    responseType: 'json',
    data: td
  })
}
export function getSwaptionPricingResult(type,td){
  return request({
    url: '/frtbdata/getSwaptionPricingResult?PricingType='+type,
    method:'get',
    responseType: 'json',
    data: td
  })
}
export function getFXDigitalPricingResult(type,td){
  return request({
    url: '/frtbdata/getFXDigitalPricingResult?PricingType='+type,
    method:'get',
    responseType: 'json',
    data: td
  })
}

// *******************************
export function cpus () {
  return request({
    url: url_pre+'/system/resources/cpu',
    method: 'get'
  })
}
export function pricing (amount) {
  return request({
    url: url_pre+'/numerix/bermudan/'+amount,
    method: 'get'
  })
}
export function calcFxFWD (td, amount) {
  return request({
    url: url_pre+'/frtb/fxfwd/'+amount,
    method: 'post',
    data: td
  })
}


export function calcFXFWDSwap (td) {
  var url_pre2 = "http://127.0.0.1:8888"
  console.log(td,'calcFXFWDSwap')
  return request({
    url: url_pre2+'/getFXFWDPricingResult?PricingType=GetNPV',
    //url:'http://47.102.152.250:9000/stockindex?code=sh000001',
    method: 'post',
    responseType: 'json',
    data: td
  })
}


