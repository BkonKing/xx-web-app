export default {
  'GET /api/sysset/repair/getRepairCategoryList': {
    "success":true,
    "message":"OK",
    "code":200,
    "data": {
        "records":[{
            "id": "1",
            "category": "家庭报修",
            "remarks": "",
            "is_enabled": "1",
            "list_order": "1"
            },{
            "id": "2",
            "category": "水电维修",
            "remarks": "",
            "is_enabled": "1",
            "list_order": "2"
        },{
            "id": "3",
            "category": "门禁报修",
            "remarks": "",
            "is_enabled": "1",
            "list_order": "3"
        }]
     },
     "timestamp":"1585622391072"
  },
  'POST /api/sysset/repair/addRepairCategory': {
    "success":true,
    "message":"OK",
    "code":200,
    "data": {
        "id": "1",
        "project_id": "1",
        "category": "门禁到期",
        "is_enabled": "1",
        "remarks": "",
        "list_order": "1"
    },
    "timestamp":"1585622391072"
  },
  'POST /api/sysset/repair/updateRepairCategory':  {
    "success":true,
    "message":"OK",
    "code":200,
    "data": {
        "id": "1",
        "project_id": "1",
        "category": "门禁到期",
        "group_id": "1",
        "is_enabled": "1",
        "remarks": "",
        "list_order": "1"
    },
    "timestamp":"1585622391072"
  },
  'POST /api/sysset/repair/deleteRepairCategory':  {
    "success":true,
    "message":"OK",
    "code":200,
    "timestamp":"1585622391072"
  },
  'GET /api/sysset/reservation/getReservationCategoryList':  {
    "success":true,
    "message":"OK",
    "code":200,
    "data": {
        "records":[{
            "id": "1",
            "icon": "https://mmm.cc/libaray/upload/images/2020/05/01/ssss.jpg",
            "category": "免费打印复印",
            "nums": "0",
            "is_enabled": "1",
            "list_order": "1"
            },{
            "id": "2",
            "icon": "https://mmm.cc/libaray/upload/images/2020/05/01/ssss.jpg",
            "category": "免费代交电费",
            "nums": "0",
            "is_enabled": "1",
            "list_order": "2"
        },{
            "id": "3",
            "icon": "https://mmm.cc/libaray/upload/images/2020/05/01/ssss.jpg",
            "category": "免费借用充电宝",
            "nums": "10",
            "is_enabled": "1",
            "list_order": "3"
        }]
     },
     "timestamp":"1585622391072"
  },
  'POST /api/sysset/reservation/addReservationCategory': {
    "success":true,
    "message":"OK",
    "code":200,
    "data": {
        "id": "1",
        "project_id": "1",
        "category": "免费代交电费",
        "is_enabled": "1",
        "list_order": "1"
    },
    "timestamp":"1585622391072"
  },
  'POST /api/sysset/reservation/updateReservationCategory':  {
    "success":true,
    "message":"OK",
    "code":200,
    "data": {
        "id": "1",
        "project_id": "1",
        "category": "免费代交电费",
        "is_enabled": "1",
        "list_order": "1"
    },
    "timestamp":"1585622391072"
  },
  'POST /api/sysset/reservation/deleteReservationCategory': {
    "success":true,
    "message":"OK",
    "code":200,
    "timestamp":"1585622391072"
  },
  'GET /api/sysset/house/getHouseCategoryList': {
    "success":true,
    "message":"OK",
    "code":200,
    "data": {
        "records":[{
            "id": "1",
            "category": "高层",
            "remarks": "",
            "is_enabled": "1",
            "list_order": "1"
            },{
            "id": "2",
            "category": "商铺",
            "remarks": "",
            "is_enabled": "1",
            "list_order": "2"
        },{
            "id": "3",
            "category": "公寓",
            "remarks": "",
            "is_enabled": "1",
            "list_order": "3"
        }]
     },
     "timestamp":"1585622391072"
  },
  'POST /api/sysset/house/addHouseCategory':  {
    "success":true,
    "message":"OK",
    "code":200,
    "data": {
        "id": "1",
        "project_id": "1",
        "category": "高层",
        "is_enabled": "1",
        "list_order": "1"
    },
    "timestamp":"1585622391072"
  },
  'POST /api/sysset/house/updateHouseCategory': {
    "success":true,
    "message":"OK",
    "code":200,
    "data": {
        "id": "1",
        "project_id": "1",
        "category": "高层",
        "is_enabled": "1",
        "list_order": "1"
    },
    "timestamp":"1585622391072"
  },
  'POST /api/sysset/house/deleteHouseCategory': {
    "success":true,
    "message":"OK",
    "code":200,
    "timestamp":"1585622391072"
  },
}
