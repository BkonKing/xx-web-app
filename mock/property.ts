export default {
  'GET /api/property/house/getBuildingList': {
    "success":true,
    "message":"OK",
    "code":200,
    "data": {
        "records":[{
            "id": "1",
            "category" : "高层",
            "building_name": "1号楼",
            "is_enabled": "1",
            "list_order": "1"
        },{
            "id": "2",
            "category" : "高层",
            "building_name": "2号楼",
            "is_enabled": "1",
            "list_order": "2"
        },{
            "id": "3",
            "category" : "高层",
            "building_name": "3号楼",
            "is_enabled": "1",
            "list_order": "3"
        }]
     },
     "timestamp":"1585622391072"
  },
  'POST /api/property/house/addBuilding': {
    "success":true,
    "message":"OK",
    "code":200,
    "data": {
        "id": "1",
        "project_id": "1",
        "category_id": "1",
        "building_name": "高层",
        "is_enabled": "1",
        "list_order": "1"
    },
    "timestamp":"1585622391072"
  },
  'POST /api/property/house/updateBuilding': {
    "success":true,
    "message":"OK",
    "code":200,
    "data": {
        "id": "1",
        "project_id": "1",
        "category_id": "1",
        "building_name": "高层",
        "is_enabled": "1",
        "list_order": "1"
    },
    "timestamp":"1585622391072"
  },
  'POST /api/property/house/deleteBuilding':  {
    "success":true,
    "message":"OK",
    "code":200,
    "timestamp":"1585622391072"
  },
  'GET /api/property/house/getUnitList': {
    "success":true,
    "message":"OK",
    "code":200,
    "data": {
        "records":[{
            "id": "1",
            "building_name" : "1号楼",
            "unit_name": "1单元",
            "is_enabled": "1",
            "list_order": "1"
        },{
            "id": "2",
            "building_name" : "1号楼",
            "unit_name": "2单元",
            "is_enabled": "1",
            "list_order": "2"
        },{
            "id": "3",
            "building_name" : "1号楼",
            "unit_name": "3单元",
            "is_enabled": "1",
            "list_order": "3"
        }]
     },
     "timestamp":"1585622391072"
  },
  'POST /api/property/house/addUnit':  {
    "success":true,
    "message":"OK",
    "code":200,
    "data": {
        "id": "1",
        "project_id": "1",
        "building_id": "1",
        "unit_name": "1单元",
        "open_door": "1,2,3",
        "device_id": "41018150000101010001",
        "is_enabled": "1",
        "list_order": "1"
    },
    "timestamp":"1585622391072"
  },
  'POST /api/property/house/updateUnit': {
    "success":true,
    "message":"OK",
    "code":200,
    "data": {
        "id": "1",
        "project_id": "1",
        "building_id": "1",
        "unit_name": "1单元",
        "open_door": "1,2,3",
        "device_id": "41018150000101010001",
        "is_enabled": "1",
        "list_order": "1"
    },
    "timestamp":"1585622391072"
  },
  'POST /api/property/house/deleteUnit':  {
    "success":true,
    "message":"OK",
    "code":200,
    "timestamp":"1585622391072"
  },
  'GET /api/property/house/getHouseList': {
    "success":true,
    "message":"OK",
    "code":200,
    "data": {
        "records":[{
            "id": "1",
            "building_name" : "1号楼",
            "unit_name": "1单元",
            "house_name": "101室",
            "floor": "1",
            "owner_name": "陈小东",
            "owner_mobile": "13699466258",
            "house_area": "163.30",
            "usable_area": "139.00",
            "additive_area": "10.00",
            "water_meter": "1.0",
            "electric_meter": "1.0",
            "gas_meter": "0.0",
            "is_enabled": "1",
            "list_order": "1"
        },{
            "id": "2",
            "building_name" : "1号楼",
            "unit_name": "1单元",
            "house_name": "201室",
            "floor": "2",
            "owner_name": "许岩",
            "owner_mobile": "13793636398",
            "house_area": "163.30",
            "usable_area": "139.00",
            "additive_area": "10.00",
            "water_meter": "1.0",
            "electric_meter": "1.0",
            "gas_meter": "0.0",
            "is_enabled": "1",
            "list_order": "2"
        },{
            "id": "3",
            "building_name" : "1号楼",
            "unit_name": "1单元",
            "house_name": "301室",
            "floor": "3",
            "owner_name": "黄三",
            "owner_mobile": "13599465985",
            "house_area": "163.30",
            "usable_area": "139.00",
            "additive_area": "10.00",
            "water_meter": "1.0",
            "electric_meter": "1.0",
            "gas_meter": "0.0",
            "is_enabled": "1",
            "list_order": "3"
        }]
     },
     "timestamp":"1585622391072"
  },
  'POST /api/property/house/addHouse': {
    "success":true,
    "message":"OK",
    "code":200,
    "data": {
        "id": "3",
        "building_id" : "1",
        "unit_id": "1",
        "house_name": "301室",
        "floor": "3",
        "top_floor": "11",
        "owner_name": "黄三",
        "owner_mobile": "13599465985",
        "house_area": "163.30",
        "usable_area": "139.00",
        "additive_area": "10.00",
        "water_meter": "1.0",
        "electric_meter": "1.0",
        "gas_meter": "0.0",
        "is_enabled": "1",
        "list_order": "3"
    },
    "timestamp":"1585622391072"
  },
  'POST /api/property/house/updateHouse': {
    "success":true,
    "message":"OK",
    "code":200,
    "data": {
        "id": "3",
        "building_id" : "1",
        "unit_id": "1",
        "house_name": "301室",
        "floor": "3",
        "top_floor": "11",
        "owner_name": "黄三",
        "owner_mobile": "13599465985",
        "house_area": "163.30",
        "usable_area": "139.00",
        "additive_area": "10.00",
        "water_meter": "1.0",
        "electric_meter": "1.0",
        "gas_meter": "0.0",
        "is_enabled": "1",
        "list_order": "3"
    },
    "timestamp":"1585622391072"
  },
  'POST /api/property/house/deleteHouse':  {
    "success":true,
    "message":"OK",
    "code":200,
    "timestamp":"1585622391072"
  },
}
