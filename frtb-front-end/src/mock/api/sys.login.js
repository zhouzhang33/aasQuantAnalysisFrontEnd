const userDB = [
  { username: 'admin', password: 'fintech', uuid: 'admin-uuid', name: '管理员' },
  { username: 'editor', password: 'fintech', uuid: 'editor-uuid', name: '编辑' },
  { username: 'ey_user', password: 'frtb', uuid: 'user4-uuid', name: 'EY User' },
]


import axios from 'axios';
export default [
  {
    path: '/api/login',
    method: 'post',
    handle ({ body }) {
      const prodName = 'bigdatarisk-'
      const user = userDB.find(e => e.username === body.username && e.password === body.password)

      if (user) {
        // ***************** 保存用户设备信息，IP及来源
        // axios.get('http://fangyuanxiaozhan.com/get_ip', {
        //   headers: {}
        // })
        // .then(function (response) {
        //   // 保存用户IP及来源
        //   var instance = axios.create({
        //     baseURL: 'https://p6wvt2em.api.lncld.net/1.1/classes/visitors',
        //     timeout: 2000,
        //     headers: {
        //       "X-LC-Id":"P6WvT2EM5S1aeTvEy7VJw4Rf-gzGzoHsz",
        //       "X-LC-Key": "1AJapWr7kvFceez9Tn5tNC98",
        //       "Content-Type": "application/json",
        //     },
        //   });
        //   var data = {
        //     "ip": response.data.ip,
        //     "ip_attr": response.data.ip_attr,
        //     "info": navigator.userAgent.toLowerCase(),
        //     "product": "Bigdata Risk",
        //     "user": user.name,
        //     "page": "index"
        //   }
        //   instance.post("",data)
        //   .then(function (response) {
        //     // console.log(response);
        //   })
        //   .catch(function (error) {
        //     console.log(error);
        //   });
        // })
        // .catch(function (error) {
        //   console.log(error);
        // });
        // ***************** 保存用户设备信息，IP及来源
        return {
          code: 0,
          msg: '登录成功',
          data: {
            ...user,
            token: prodName + '8dfhassad0asdjwoeiruty'
          }
        }
      } else {
        return {
          code: 401,
          msg: '用户名或密码错误',
          data: {}
        }
      }
    }
  }
]
