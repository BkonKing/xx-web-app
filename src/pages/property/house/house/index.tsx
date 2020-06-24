import React from 'react';
import TableList from '@/components/TableList';
import { Input } from 'antd';
import { ProColumns } from '@ant-design/pro-table';
import { getHouseList, addHouse, updateHouse, deleteHouse } from './service';

const areasTableList: React.FC<{}> = () => {
  const columns: ProColumns<{}>[] = [
    {
      title: '楼宇名称',
      dataIndex: 'areas_name',
      rules: [
        {
          required: true,
          message: '楼宇名称为必填项',
        },
      ],
    },
    {
      title: '单元名称',
      dataIndex: 'unit_name',
      rules: [
        {
          required: true,
          message: '单元名称为必填项',
        },
      ],
    },
    {
      title: '房屋名称',
      dataIndex: 'house_name',
      rules: [
        {
          required: true,
          message: '房屋名称为必填项',
        },
      ],
    },
    {
      title: '所在楼层',
      dataIndex: 'floor',
      valueType: 'digit',
      rules: [
        {
          required: true,
          message: '所在楼层为必填项',
        },
      ],
    },
    {
      title: '业主',
      dataIndex: 'owner_name',
    },
    {
      title: '业主电话',
      dataIndex: 'owner_mobile',
    },
    {
      title: '建筑面积',
      dataIndex: 'house_area',
      valueType: 'digit',
    },
    {
      title: '使用面积',
      dataIndex: 'usable_area',
      valueType: 'digit',
    },
    {
      title: '附加面积',
      dataIndex: 'additive_area',
      valueType: 'digit',
    },
    {
      title: '水表',
      dataIndex: 'water_meter',
      valueType: 'digit',
    },
    {
      title: '电表',
      dataIndex: 'electric_meter',
      valueType: 'digit',
    },
    {
      title: '燃气表',
      dataIndex: 'gas_meter',
      valueType: 'digit',
    },
    {
      title: '排序',
      dataIndex: 'list_order',
      valueType: 'digit',
    },
    {
      title: '是否启用',
      dataIndex: 'is_enabled',
      valueEnum: {
        0: { text: '否' },
        1: { text: '是' },
      },
      rules: [
        {
          required: true,
          message: '是否启用为必填项',
        },
      ],
    },
    {
      dataIndex: 'id',
      hideInTable: true,
      renderFormItem: (_, { value }) => {
        return <Input type="hidden" value={value} />;
      },
    },
  ];
  return (
    <TableList
      headerTitle="楼宇房屋列表"
      modalTitle="楼宇房屋"
      isAction
      isActionBar
      columns={columns}
      getData={getHouseList}
      addData={addHouse}
      updateData={updateHouse}
      deleteData={deleteHouse}
    />
  );
};

export default areasTableList;
