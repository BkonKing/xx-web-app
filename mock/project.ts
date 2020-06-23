export default {
  'GET /api/project/areas/getAreasList': {
    "success":true,
    "message":"OK",
    "code":200,
    "data": {
        "records":[{
            "id": "1",
            "parent_id": "0",
            "level": "1",
            "areas_name": "福建省",
            "list_order": "1",
            "is_enabled": "1"
        },{
            "id": "2",
            "parent_id": "1",
            "level": "2",
            "areas_name": "福州市",
            "list_order": "1",
            "is_enabled": "1"
        },{
            "id": "3",
            "parent_id": "1",
            "level": "2",
            "areas_name": "厦门市",
            "list_order": "2",
            "is_enabled": "1"
        },{
            "id": "4",
            "parent_id": "0",
            "level": "1",
            "areas_name": "河南省",
            "list_order": "2",
            "is_enabled": "1"
        },{
            "id": "5",
            "parent_id": "4",
            "level": "2",
            "areas_name": "郑州市",
            "list_order": "1",
            "is_enabled": "1"
        }]
     }
  },
  'GET /api/project/regions/getRegionsList': {
    "success":true,
    "message":"OK",
    "code":200,
    "data": {
        "total":3,
        "size":20,
        "current":1,
        "pages":1,
        "records":[{
            "id": "1",
            "province": "河南省",
            "city": "郑州市",
            "area": "金水区",
            "project_name": "五凤兰庭",
            "houses": "3000",
            "link_man": "陈小明",
            "link_mobile": "13799256325",
            "longitude": "25.36989",
            "latitude": "136.36987"
        },{
            "id": "2",
            "province": "河南省",
            "city": "郑州市",
            "area": "中原区",
            "project_name": "山河观邸",
            "houses": "2300",
            "link_man": "雷小平",
            "link_mobile": "15622365258",
            "longitude": "25.36989",
            "latitude": "136.36987"
        },{
            "id": "3",
            "province": "河南省",
            "city": "郑州市",
            "area": "高新区",
            "project_name": "佳木斯天福城",
            "houses": "500",
            "link_man": "赵小刚",
            "link_mobile": "15825623652",
            "longitude": "25.36989",
            "latitude": "136.36987"
        }]
     }
  },
  'POST /api/project/regions/addRegions': {
    "success":true,
    "message":"OK",
    "code":200,
    "data": {
        "id": "1",
        "province": "河南省",
        "city": "郑州市",
        "area": "高新区",
        "project_name": "五凤兰庭",
        "link_man": "陈小明",
        "link_mobile": "13799256325",
        "thumb": "https://www.mhshjy.com/lib/upload/images/2020/0125/324242432.jpg",
        "address": "福建省福州市仓山区三盛滨江际3号1205室",
        "longitude": "25.236545",
        "latitude": "135.2565455",
    },
    "timestamp":"1585622391072"
  },
  'GET /api/project/regions/updateRegions':  {
    "success":true,
    "message":"OK",
    "code":200,
    "data": {
        "id": "1",
        "province": "河南省",
        "city": "郑州市",
        "area": "高新区",
        "project_name": "五凤兰庭",
        "link_man": "陈小明",
        "link_mobile": "13799256325",
        "thumb": "https://www.mhshjy.com/lib/upload/images/2020/0125/324242432.jpg",
        "address": "福建省福州市仓山区三盛滨江际3号1205室",
        "longitude": "25.236545",
        "latitude": "135.2565455",
    },
    "timestamp":"1585622391072"
  },
  'GET /api/project/regions/deleteRegions':  {
    "success":true,
    "message":"OK",
    "code":200,
    "timestamp":"1585622391072"
  },
  'GET /api/project/regions/getRegionsMenu': {
    "success":true,
    "message":"OK",
    "code":200,
    "data": {
        "records":[{
            "id":"124",
            "parent_id":"0",
            "icon":"",
            "menu_text":"系统设置",
            "children":[{
                "id":"125",
                "parent_id":"124",
                "icon":"",
                "menu_text":"通知类别",
                "children":[{
                    "id":"163",
                    "parent_id":"125",
                    "icon":"",
                    "menu_text":"通知类别列表",
                    "children":false,
                    "state":{"opened":true}
                },{
                    "id":"164",
                    "parent_id":"125",
                    "icon":"",
                    "menu_text":"新增通知类别",
                    "children":false,
                    "state":{"opened":true}
                },{
                    "id":"165",
                    "parent_id":"125",
                    "icon":"",
                    "menu_text":"修改通知类别",
                    "children":false,
                    "state":{"opened":true}
                },{
                    "id":"166",
                    "parent_id":"125",
                    "icon":"",
                    "menu_text":"删除通知类别",
                    "children":false,
                    "state":{"opened":true}
                }],
                "state":{"opened":true}
            }],
            "state":{"opened":true}
        },{
            "id":"14",
            "parent_id":"0",
            "icon":"",
            "menu_text":"楼栋管理",
            "children":[{
                "id":"130",
                "parent_id":"14",
                "icon":"",
                "menu_text":"楼宇管理",
                "children":[{
                    "id":"164",
                    "parent_id":"130",
                    "icon":"","level":"3",
                    "menu_text":"楼宇列表",
                    "children":false,
                    "state":{"opened":true}
                }],
                "state":{"opened":true}
            }],
            "state":{"opened":true}
        }]
     }
  },
  'GET /api/project/regions/updateRegionsMenu': {
    "success":true,
    "message":"OK",
    "code":200,
    "timestamp":"1585622391072"
  },
}
