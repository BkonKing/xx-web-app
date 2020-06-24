import React from 'react';
import TableList from '@/components/TableList';
import { Input } from 'antd';
import { ProColumns } from '@ant-design/pro-table';
import { getBuildingList, addBuilding, updateBuilding, deleteBuilding } from './service';

const areasTableList: React.FC<{}> = () => {
  const columns: ProColumns<{}>[] = [
    {
      title: '房产类别',
      dataIndex: 'category',
      rules: [
        {
          required: true,
          message: '房产类别为必填项',
        },
      ],
    },
    {
      title: '楼宇名称',
      dataIndex: 'building_name',
      rules: [
        {
          required: true,
          message: '楼宇名称为必填项',
        },
      ],
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
      headerTitle="楼宇管理列表"
      modalTitle="楼宇管理"
      isAction
      isActionBar
      columns={columns}
      getData={getBuildingList}
      addData={addBuilding}
      updateData={updateBuilding}
      deleteData={deleteBuilding}
    />
  );
};

export default areasTableList;
