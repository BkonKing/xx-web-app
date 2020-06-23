import React from 'react'
import TableList from '@/components/TableList'
import { Input } from 'antd'
import { ProColumns } from '@ant-design/pro-table';
import { getUnitList, addUnit, updateUnit, deleteUnit } from './service';

const areasTableList: React.FC<{}> = () => {
  const columns: ProColumns<{}>[] = [
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
      title: '开门设备',
      hideInTable: true,
      dataIndex: 'open_door',
      valueEnum: {
        0: {text: '二维码'},
        1: {text: '人脸'},
        2: {text: '远程开门'},
      }
    },
    {
      title: '门禁设备ID',
      hideInTable: true,
      dataIndex: 'device_id',
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
  ]
  return (
    <TableList
      headerTitle="楼宇单元列表"
      modalTitle="楼宇单元"
      isAction
      isActionBar
      columns={columns}
      getData={getUnitList}
      addData={addUnit}
      updateData={updateUnit}
      deleteData={deleteUnit}
    />
  )
}

export default areasTableList
