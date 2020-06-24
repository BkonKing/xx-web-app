import React from 'react';
import TableList from '@/components/TableList';
import { Input } from 'antd';
import { ProColumns } from '@ant-design/pro-table';
import {
  getHouseCategoryList,
  addHouseCategory,
  updateHouseCategory,
  deleteHouseCategory,
} from './service';

const areasTableList: React.FC<{}> = () => {
  const columns: ProColumns<{}>[] = [
    {
      title: '房产类别名称',
      dataIndex: 'category',
      rules: [
        {
          required: true,
          message: '房产类别名称为必填项',
        },
      ],
    },
    {
      title: '备注',
      dataIndex: 'remarks',
      valueType: 'textarea',
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
    {
      dataIndex: 'parent_id',
      hideInTable: true,
      renderFormItem: (_, { value }) => {
        return <Input type="hidden" value={value} />;
      },
    },
  ];
  return (
    <TableList
      headerTitle="房产类别列表"
      modalTitle="房产类别"
      isAction
      isActionBar
      columns={columns}
      getData={getHouseCategoryList}
      addData={addHouseCategory}
      updateData={updateHouseCategory}
      deleteData={deleteHouseCategory}
    />
  );
};

export default areasTableList;
