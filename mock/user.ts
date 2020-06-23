import { Request, Response } from 'express';

function getFakeCaptcha(req: Request, res: Response) {
  return res.json('captcha-xxx');
}
// 代码中会兼容本地 service mock 以及部署站点的静态数据
export default {
  // 支持值为 Object 和 Array
  'GET /api/currentUser': {
    name: 'Serati Ma',
    avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
    userid: '00000001',
    email: 'antdesign@alipay.com',
    signature: '海纳百川，有容乃大',
    title: '交互专家',
    group: '蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED',
    tags: [
      {
        key: '0',
        label: '很有想法的',
      },
      {
        key: '1',
        label: '专注设计',
      },
      {
        key: '2',
        label: '辣~',
      },
      {
        key: '3',
        label: '大长腿',
      },
      {
        key: '4',
        label: '川妹子',
      },
      {
        key: '5',
        label: '海纳百川',
      },
    ],
    notifyCount: 12,
    unreadCount: 11,
    country: 'China',
    geographic: {
      province: {
        label: '浙江省',
        key: '330000',
      },
      city: {
        label: '杭州市',
        key: '330100',
      },
    },
    address: '西湖区工专路 77 号',
    phone: '0752-268888888',
  },
  // GET POST 可省略
  'GET /api/users': [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
  ],
  'POST /api/system/slognin/login': {
    "success": true,
    "message": "OK",
    "code": 200,
    "data": {
      "id": "5",
      "account": "zwq",
      "realname": "张伟强",
      "role_name": "编辑员",
      "login_time": "2020-06-02 11:26:23",
      "access_token": "6551518b5c1908cf37bff1c4ac64c75a74a6f0d9",
      "refresh_token": "a5bcab54abad2a3f75f89fb4bbbbb7394c58d014"
    },
    "timestamp": "1585622391072"
  },
  'POST /api/register': (req: Request, res: Response) => {
    res.send({ status: 'ok', currentAuthority: 'user' });
  },
  'GET /api/500': (req: Request, res: Response) => {
    res.status(500).send({
      timestamp: 1513932555104,
      status: 500,
      error: 'error',
      message: 'error',
      path: '/base/category/list',
    });
  },
  'GET /api/404': (req: Request, res: Response) => {
    res.status(404).send({
      timestamp: 1513932643431,
      status: 404,
      error: 'Not Found',
      message: 'No message available',
      path: '/base/category/list/2121212',
    });
  },
  'GET /api/403': (req: Request, res: Response) => {
    res.status(403).send({
      timestamp: 1513932555104,
      status: 403,
      error: 'Unauthorized',
      message: 'Unauthorized',
      path: '/base/category/list',
    });
  },
  'GET /api/401': (req: Request, res: Response) => {
    res.status(401).send({
      timestamp: 1513932555104,
      status: 401,
      error: 'Unauthorized',
      message: 'Unauthorized',
      path: '/base/category/list',
    });
  },
  'GET  /api/login/captcha': getFakeCaptcha,
  'GET /api/queryMenu': {
    "success": true,
    "message": "OK",
    "code": 200,
    "data": [{
      "path": "/system",
      "name": "系统设置",
      "icon": '',
      "children": [
        {
          "path": "/system/menu/list",
          "hideInMenu": true,
          "name": "权限菜单",
          "icon": '',
        },
      ]
    }],
    "timestamp": "1585622391072"
  },
  'POST /api/authorization/token/getToken': {
    "success": true,
    "message": "OK",
    "code": 200,
    "access_token": "fd5d4401fd8fed303c68744ee523b36200ffab88",
    "expires_in": "3600",
    "token_type": "Bearer",
    "refresh_token": "ca031a408069316bf39d0dd2651fd354fb3c20ac",
    "timestamp": "1585622391072"
  },
  'POST /api/system/slognin/outlogin': {
    "success": true,
    "message": "OK",
    "code": 200,
    "timestamp": "1585622391072"
  }
};
