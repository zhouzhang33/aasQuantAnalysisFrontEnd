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

// *******************************
var url_pre = "http://localhost:9990";
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
  var url_pre2 = "http://127.0.0.1:8000"
  console.log(td,'calcFXFWDSwap')
  return request({
    url: url_pre2+'/frtb/',
    //url:'http://47.102.152.250:9000/stockindex?code=sh000001',
    method: 'post',
    responseType: 'json',
    data: td
  })
}
