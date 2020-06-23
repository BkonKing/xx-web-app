import React from 'react'
import TableList from '@/components/TableList'
import UploadImage from '@/components/UploadImage'
import { Input } from 'antd'
import { ProColumns } from '@ant-design/pro-table';
import { getReservationCategoryList, addReservationCategory, updateReservationCategory, deleteReservationCategory } from './service';

const areasTableList: React.FC<{}> = () => {
  const columns: ProColumns<{}>[] = [
    {
      title: '预约类别',
      dataIndex: 'category',
      rules: [
        {
          required: true,
          message: '预约类别为必填项',
        },
      ],
    },
    {
      title: '服务次数(0为不限)',
      dataIndex: 'nums',
      valueType: 'digit',
      rules: [
        {
          required: true,
          message: '服务次数为必填项',
        },
      ],
    },
    {
      title: '排序',
      dataIndex: 'list_order',
      valueType: 'digit',
    },
    {
      title: '图标',
      dataIndex: 'icon',
      render: (_) => {
        return <img width="30" src={String(_)} alt="图标" />
      },
      renderFormItem: (item, { value, onChange }, form) => {
        return <UploadImage action="https://www.mocky.io/v2/5cc8019d300000980a055e76" value={value}
        onChange={onChange} />
      },
      rules: [
        {
          required: true,
          message: '图标为必填项',
        },
      ],
    },
    {
      title: '是否启用',
      dataIndex: 'is_enabled',
      valueEnum: {
        0: {text: '否'},
        1: {text: '是'},
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
        return <Input type='hidden' value={value}/>;
      },
    },
    {
      dataIndex: 'parent_id',
      hideInTable: true,
      renderFormItem: (_, { value }) => {
        return <Input type='hidden' value={value}/>;
      },
    }
  ]
  return (
    <TableList
      headerTitle="免费服务列表"
      modalTitle="免费服务"
      isAction
      isActionBar
      columns={columns}
      getData={getReservationCategoryList}
      addData={addReservationCategory}
      updateData={updateReservationCategory}
      deleteData={deleteReservationCategory}
    />
  )
}

export default areasTableList
