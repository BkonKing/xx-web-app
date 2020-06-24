import React from 'react';
import TableList from '@/components/TableList';
import { Input } from 'antd';
import { ProColumns } from '@ant-design/pro-table';

import { getExpressList, addExpress, updateExpress, deleteExpress } from './service';

const adminTableList: React.FC<{}> = () => {
  const columns: ProColumns<{}>[] = [
    {
      title: '快递公司名称',
      dataIndex: 'express_name',
      rules: [
        {
          required: true,
          message: '快递公司名称为必填项',
        },
      ],
    },
    {
      title: '拼音简称',
      dataIndex: 'pinyin',
      rules: [
        {
          required: true,
          message: '拼音简称为必填项',
        },
      ],
    },
    {
      title: '配送备注',
      dataIndex: 'content',
    },
    {
      title: '数据接收',
      dataIndex: 'is_api',
      valueEnum: {
        0: { text: '否' },
        1: { text: '是' },
      },
    },
    {
      title: '排序',
      dataIndex: 'list_order',
      valueType: 'digit',
      rules: [
        {
          required: true,
          message: '排序为必填项',
        },
      ],
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
      headerTitle="快递公司列表"
      modalTitle="快递公司"
      columns={columns}
      getData={getExpressList}
      pagination
      isAction
      isActionBar
      addData={addExpress}
      updateData={updateExpress}
      deleteData={deleteExpress}
    />
  );
};

export default adminTableList;
