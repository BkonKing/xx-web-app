import React from 'react'
import TableList from '@/components/TableList'
import { Input } from 'antd'
import { ProColumns } from '@ant-design/pro-table';
import { getAreasList, addAreas, updateAreas, deleteAreas } from './service';

const areasTableList: React.FC<{}> = () => {
  const columns: ProColumns<{}>[] = [
    {
      title: '区域名称',
      dataIndex: 'areas_name',
      rules: [
        {
          required: true,
          message: '区域名称为必填项',
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
      headerTitle="区域字典列表"
      modalTitle="区域字典"
      isAction
      isActionBar
      columns={columns}
      getData={getAreasList}
      addData={addAreas}
      updateData={updateAreas}
      deleteData={deleteAreas}
    />
  )
}

export default areasTableList
