import { Request, Response } from 'express';

// 代码中会兼容本地 service mock 以及部署站点的静态数据
export default {
  'GET /api/system/menu/getMenuList': {
    "success": true,
    "message": "OK",
    "code": 200,
    "data": [{
      "id": "1",
      "parent_id": "0",
      "icon": "https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png",
      "level": "1",
      "model": "",
      "controller": "",
      "action": "",
      "menu_text": "系统管理",
      "list_order": "1",
      "display": "1",
      "children": [
        {
          "id": "5",
          "parent_id": "1",
          "icon": "",
          "level": "5",
          "model": "",
          "controller": "",
          "action": "",
          "menu_text": "权限菜单",
          "list_order": "1",
          "display": "1",
        },
        {
          "id": "6",
          "parent_id": "1",
          "icon": "",
          "level": "5",
          "model": "",
          "controller": "",
          "action": "",
          "menu_text": "权限角色",
          "list_order": "2",
          "display": "1",
        }
      ]
    }, {
      "id": "2",
      "parent_id": "1",
      "icon": "",
      "level": "2",
      "model": "system",
      "controller": "admin",
      "action": "getAdminList",
      "menu_text": "管理用户",
      "list_order": "1",
      "display": "1"
    }, {
      "id": "3",
      "parent_id": "1",
      "icon": "",
      "level": "2",
      "model": "system",
      "controller": "role",
      "action": "getRoleList",
      "menu_text": "权限角色",
      "list_order": "1",
      "display": "1"
    }, {
      "id": "4",
      "parent_id": "1",
      "icon": "",
      "level": "2",
      "model": "system",
      "controller": "menu",
      "action": "getMenuList",
      "menu_text": "权限菜单",
      "list_order": "1",
      "display": "1"
    }],
    "timestamp": "1585622391072"
  },
  // 'POST /api/system/menu/deleteMenu': {
  //   "success": true,
  //   "message": "OK",
  //   "code": 200,
  //   "timestamp": "1585622391072"
  // },
  'POST /api/system/menu/deleteMenu': (req: Request, res: Response) => {
    res.status(401).send({
      timestamp: 1513932555104,
      status: 403,
      error: 'Unauthorized',
      message: 'Unauthorized',
      path: '/base/category/list',
    });
  },
  'POST /api/system/menu/updateMenu': {
    "success": true,
    "message": "OK",
    "code": 200,
    "data": {
      "id": "1",
      "parent_id": "0",
      "icon": "",
      "level": "1",
      "model": "",
      "controller": "",
      "action": "",
      "menu_text": "系统管理",
      "list_order": "1",
      "display": "1"
    },
    "timestamp": "1585622391072"
  },
  'POST /api/system/menu/addMenu': {
    "success": true,
    "message": "OK",
    "code": 200,
    "data": {
      "id": "1",
      "parent_id": "0",
      "icon": "",
      "level": "1",
      "model": "",
      "controller": "",
      "action": "",
      "menu_text": "系统管理",
      "list_order": "1",
      "display": "1"
    },
    "timestamp": "1585622391072"
  },
  'GET /api/user/user/getUserList': {
    "success": true,
    "message": "OK",
    "code": 200,
    "data": {
      "total": 2,
      "size": 20,
      "current": 1,
      "pages": 1,
      "records": [{
        "id": "1",
        "account": "xiaosheng",
        "realname": "陈晓晟",
        "mobile": "1399625698",
        "gender": "1",
        "user_type": "1",
        "unionid": "oPUwCwHY6crgN7ass-0qJcgnTGFI",
        "nickname": "之之",
        "avatar": "https://wx.qlogo.cn/library/user_avatar/202006/0720/tx_220.jpg",
        "virtual_coin": "0",
        "user_type": "1",
        "ctime": "2020-06-09 11:23:33",
      }, {
        "id": "2",
        "account": "shumen",
        "realname": "苏萌",
        "mobile": "13993652698",
        "gender": "1",
        "user_type": "1",
        "unionid": "oPUwCwHY6crgN7ass-0qJcgnTGFI",
        "nickname": "犯罪级可爱",
        "avatar": "https://wx.qlogo.cn/library/user_avatar/202006/0815/tx_283.jpg",
        "virtual_coin": "0",
        "user_type": "1",
        "ctime": "2020-06-09 13:29:12",
      }, {
        "id": "3",
        "account": "zhengshi",
        "realname": "陈晓英",
        "mobile": "13733623654",
        "gender": "1",
        "unionid": "oPUwCwHY6crgN7ass-0qJcgnTGFI",
        "nickname": "蔷薇",
        "avatar": "https://wx.qlogo.cn/library/user_avatar/202006/0815/tx_286.jpg.jpg",
        "virtual_coin": "0",
        "user_type": "1",
        "ctime": "2020-06-09 13:52:18",
      }]
    },
    "timestamp": "1585622391072"
  },
  'GET /api/system/admin/getAdminList': {
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
        "account": "admin",
        "realname": "陈华明",
        "mobile": "13799436215",
        "gender": "1",
        "unionid": "okVQswSWy0PIaSDWZeDGqlLIfA8k",
        "role_id": "1",
        "role_name": "超级管理员"
      }, {
        "id": "2",
        "account": "chenxiaoming",
        "realname": "陈小明",
        "mobile": "13855256985",
        "gender": "1",
        "unionid": "okVQswfnBz_DxWIYeYpZ4x15GXkA",
        "role_id": "2",
        "role_name": "管理员"
      }, {
        "id": "3",
        "account": "tiantian",
        "realname": "黄小茱",
        "mobile": "13688547123",
        "gender": "1",
        "unionid": "oPUwCwFQHFIYLAOGUVym4w1n3ZYs",
        "role_id": "3",
        "role_name": "编辑员"
      }]
    }
  },
  'GET /api/system/role/getRoleList': {
    "success": true,
    "message": "OK",
    "code": 200,
    "data": {
      "total": 2,
      "size": 20,
      "current": 1,
      "pages": 1,
      "records": [{
        "id": "1",
        "parent_id": "0",
        "role_name": "管理员",
        "content": "",
        "list_order": "1"
      }, {
        "id": "2",
        "parent_id": "0",
        "role_name": "编辑员",
        "content": "",
        "list_order": "2"
      }]
    }
  },
  'POST /api/system/role/addRole': {
    "success": true,
    "message": "OK",
    "code": 200,
    "data": {
      "id": "5",
      "parent_id": "0",
      "role_name": "编辑员",
      "content": "方案内容编辑",
      "list_order": "1"
    },
    "timestamp": "1585622391072"
  },
  'POST /api/system/role/updateRole': {
    "success": true,
    "message": "OK",
    "code": 200,
    "data": {
      "id": "5",
      "parent_id": "0",
      "role_name": "编辑员",
      "content": "方案内容编辑",
      "list_order": "1"
    },
    "timestamp": "1585622391072"
  },
  'POST /api/system/role/deleteRole': {
    "success": true,
    "message": "OK",
    "code": 200,
    "timestamp": "1585622391072"
  },
  'GET /api/system/role/getRoleMenu': {
    "success": true,
    "message": "OK",
    "code": 200,
    "data": {
      "records": [{
        "id": "124",
        "parent_id": "0",
        "icon": "",
        "menu_text": "商品",
        "children": [{
          "id": "125",
          "parent_id": "124",
          "icon": "",
          "menu_text": "商品管理",
          "children": [{
            "id": "163",
            "parent_id": "125",
            "icon": "",
            "menu_text": "商品列表",
            "children": [{
              "id": "126",
              "parent_id": "163",
              "icon": "",
              "menu_text": "添加商品",
              "children": false,
              "state": { "opened": true }
            }],
            "state": { "opened": true }
          }],
          "state": { "opened": true }
        }],
        "state": { "opened": true }
      }, {
        "id": "14",
        "parent_id": "0",
        "icon": "",
        "menu_text": "订单",
        "children": [{
          "id": "130",
          "parent_id": "14",
          "icon": "",
          "menu_text": "订单管理",
          "children": [{
            "id": "164",
            "parent_id": "130",
            "icon": "", "level": "3",
            "menu_text": "支付订单",
            "children": false,
            "state": { "opened": true }
          }],
          "state": { "opened": true }
        }],
        "state": { "opened": true }
      }]
    }
  },
  'POST /api/system/role/updateRoleMenu': {
    "success": true,
    "message": "OK",
    "code": 200,
    "timestamp": "1585622391072"
  }
};
