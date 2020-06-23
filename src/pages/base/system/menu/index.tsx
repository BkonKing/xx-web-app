import React, { useRef } from 'react'
import TableList from '@/components/TableList'
import UploadImage from '@/components/UploadImage'
import { ProColumns } from '@ant-design/pro-table';
import { Divider, Input } from 'antd'
import { menuItem } from './data'
import { getMenuList, addMenu, deleteMenu, updateMenu } from './service';

const adminTableList: React.FC<{}> = () => {
  const parentRef = useRef()
  const columns: ProColumns<menuItem>[] = [
    {
      title: '菜单名称',
      dataIndex: 'menu_text',
      rules: [
        {
          required: true,
          message: '菜单名称为必填项',
        },
      ],
    },
    {
      title: '菜单图标',
      dataIndex: 'icon',
      render: (_) => {
        return <img width="30" src={String(_)} alt="菜单图标" />
      },
      renderFormItem: (item, { value, onChange }, form) => {
        return <UploadImage action="https://www.mocky.io/v2/5cc8019d300000980a055e76" value={value}
        onChange={onChange} />
      }
    },
    {
      title: '模块',
      dataIndex: 'model',
    },
    {
      title: '功能',
      dataIndex: 'controller',
    },
    {
      title: '方法名',
      dataIndex: 'action',
    },
    {
      title: '排序',
      dataIndex: 'list_order',
    },
    {
      title: '是否显示',
      dataIndex: 'display',
      valueEnum: {
        0: { text: '否' },
        1: { text: '是' }
      },
      rules: [
        {
          required: true,
          message: '是否显示为必填项',
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
  ];
  return (
    <TableList
      ref={parentRef}
      headerTitle="管理用户列表"
      modalTitle="管理用户"
      columns={columns}
      getData={getMenuList}
      isActionBar
      actionRender={(record:any) => {
        return <><a
        onClick={() => {
          const newRecord = {
            parent_id: record.id
          }
          parentRef.current.showAddModal(newRecord)
        }}
      >
        添加
      </a><Divider type="vertical" /></>
      }}
      addData={addMenu}
      updateData={updateMenu}
      deleteData={deleteMenu}
    />
  )
}

export default adminTableList
