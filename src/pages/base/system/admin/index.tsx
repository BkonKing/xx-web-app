import React from 'react'
import TableList from '@/components/TableList'
import { Input } from 'antd'
import { ProColumns } from '@ant-design/pro-table';

import { genderObj } from '@/const/columns'
import { isPhone } from '@/utils/validate'
import { getAdminList, addAdmin, updateAdmin, deleteAdmin } from './service'
import styles from './style.less'

const adminTableList: React.FC<{}> = () => {
  const columns: ProColumns<{}>[] = [
    {
      title: '管理员登录账户',
      dataIndex: 'account',
      rules: [
        {
          required: true,
          message: '管理员登录账户为必填项',
        },
      ],
    },
    {
      title: '密码',
      dataIndex: 'password',
      hideInTable: true,
      renderFormItem: (item, { value, onChange }) => {
        const warning = value ?
          <div className={styles.warning__text}>修改状态下密码不更改则不会更新密码</div>
          : ''
        return <>
          <Input.Password value={value} onChange={onChange} />
          {warning}
        </>
      }
    },
    {
      title: '真实姓名',
      dataIndex: 'realname'
    },
    {
      title: '手机号',
      dataIndex: 'mobile',
      rules: [
        {
          validator: (_, value) => {
            if (!value || isPhone(value)) {
              return Promise.resolve()
            }
            return Promise.reject('请输入正确的手机号或电话格式')
          }
        }
      ]
    },
    {
      title: '性别',
      dataIndex: 'gender',
      valueEnum: genderObj
    },
    {
      title: '权限角色',
      dataIndex: 'role_id',
      hideInTable: true,
      valueEnum: {
        1: '超级管理员',
        2: '管理员',
        3: '编辑员',
      },
      rules: [
        {
          required: true,
          message: '权限角色为必填项',
        },
      ],
    },
    {
      title: '权限角色名称',
      dataIndex: 'role_name',
      hideInForm: true,
    },
    {
      dataIndex: 'id',
      hideInTable: true,
      // hideInForm: true,
      renderFormItem: (_, { value }) => {
        return <Input type='hidden' value={value} />;
      },
    },
  ]
  return (
    <TableList
      headerTitle="管理用户列表"
      modalTitle="管理用户"
      columns={columns}
      getData={getAdminList}
      isAction
      isActionBar
      pagination
      addData={addAdmin}
      updateData={updateAdmin}
      deleteData={deleteAdmin}
    />
  )
}

export default adminTableList
