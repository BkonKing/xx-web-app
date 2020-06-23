import React, { useRef } from 'react'
import TableList from '@/components/TableList'
import { Input, Divider } from 'antd'
import { ProColumns } from '@ant-design/pro-table';
import { getAreasList, addAreas, updateAreas, deleteAreas } from './service';

const areasTableList: React.FC<{}> = () => {
  const parentRef = useRef()
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
        return <Input type='hidden' value={value} />;
      },
    },
    {
      dataIndex: 'parent_id',
      hideInTable: true,
      renderFormItem: (_, { value }) => {
        return <Input type='hidden' value={value} />;
      },
    }
  ]
  return (
    <TableList
      ref={parentRef}
      headerTitle="区域字典列表"
      modalTitle="区域字典"
      isAction
      isActionBar
      actionRender={(record: any) => {
        const btn = record.level === '3' ? null : <><a
          onClick={() => {
            const newRecord = {
              parent_id: record.id
            }
            parentRef.current.showAddModal(newRecord)
          }}
        >
          添加
      </a><Divider type="vertical" /></>
        return btn
      }}
      columns={columns}
      getData={getAreasList}
      addData={addAreas}
      updateData={updateAreas}
      deleteData={deleteAreas}
    />
  )
}

export default areasTableList
