export default {
  'GET /api/basicset/express/getExpressList': {
    "success": true,
    "message": "OK",
    "code": 200,
    "data": {
      "total": 3,
      "size": 20,
      "current": 1,
      "pages": 1,
      "records": [{
        "id": "1",
        "express_name": "中通快递",
        "pinyin": "zto",
        "content": "",
        "is_api": "1",
        "list_order": "1",
        "is_enabled": "1"
      }, {
        "id": "2",
        "express_name": "宅急送",
        "pinyin": "zjs",
        "content": "",
        "is_api": "1",
        "list_order": "2",
        "is_enabled": "1"
      }, {
        "id": "3",
        "express_name": "申通快递",
        "pinyin": "sto",
        "content": "",
        "is_api": "1",
        "list_order": "3",
        "is_enabled": "1"
      }]
    }
  },
  'POST /api/basicset/express/addExpress': {
    "success": true,
    "message": "OK",
    "code": 200,
    "data": {
      "id": "5",
      "express_name": "中通快递",
      "pinyin": "zto",
      "content": "",
      "is_api": "1",
      "list_order": "1",
      "is_enabled": "0"
    },
    "timestamp": "1585622391072"
  },
  'POST /api/basicset/express/updateExpress': {
    "success": true,
    "message": "OK",
    "code": 200,
    "data": {
      "id": "5",
      "express_name": "中通快递",
      "pinyin": "zto",
      "content": "",
      "is_api": "1",
      "list_order": "1",
      "is_enabled": "0"
    },
    "timestamp": "1585622391072"
  },
  'POST /api/basicset/express/deleteExpress': {
    "success": true,
    "message": "OK",
    "code": 200,
    "timestamp": "1585622391072"
  },
  'GET /api/basicset/setting/getJpush': {
    "success": true,
    "message": "OK",
    "code": 200,
    "data": {
      "jpushAppKey": "175d93483ecc350ef6fee2f4",
      "jpushAppMaster": "301139965dfee0fd2a7deacf",
      "jpushUrl": "https://api.jpush.cn/v3/push"
    },
    "timestamp": "1585622391072"
  },
  'POST /api/basicset/setting/setJpush': {
    "success": true,
    "message": "OK",
    "code": 200,
    "timestamp": "1585622391072"
  },
  'GET /api/basicset/setting/getWxpay': {
    "success": true,
    "message": "OK",
    "code": 200,
    "data": {
      "wxpayAppId": "wx7245d2cb43a093d",
      "wxpayAppSecret": "d3bcb3c7e30a7e2addac23b8407a2b8b",
      "wxpayNotifyUrl": "http://wap.mhshjy.com:8080/brawLive/system/wechatPay/notify/json",
      "wxpayP12File": "/mnt/app/cert/brawLive/apiclient_cert.p12",
      "wxpayPartner": "1522977271",
      "wxpayPartnerKey": "MHSHJY9876554123MHSHJY0030030020"
    },
    "timestamp": "1585622391072"
  },
  'POST /api/basicset/setting/setWxpay': {
    "success": true,
    "message": "OK",
    "code": 200,
    "timestamp": "1585622391072"
  },
  'GET /api/basicset/setting/getAuthorized': {
    "success": true,
    "message": "OK",
    "code": 200,
    "data": {
      "authClientId": "257_mhshjy_0013",
      "authClientSecret": "xxkjwfpz8mhsh9zsp6s63thryyklhb5b"
    },
    "timestamp": "1585622391072"
  },
  'POST /api/basicset/setting/setAuthorized': {
    "success": true,
    "message": "OK",
    "code": 200,
    "timestamp": "1585622391072"
  },
}
