import React from 'react';
import TableList from '@/components/TableList';
import { ProColumns } from '@ant-design/pro-table';

import { getUserList } from './service';

const UserTableList: React.FC<{}> = () => {
  const columns: ProColumns<{}>[] = [
    {
      title: '姓名',
      dataIndex: 'realname',
    },
    {
      title: '手机号',
      dataIndex: 'mobile',
    },
    {
      title: '性别',
      dataIndex: 'gender',
      valueEnum: {
        1: { text: '男' },
        2: { text: '女' },
        0: { text: '未知' },
      },
    },
    {
      title: '微信ID',
      dataIndex: 'unionid',
    },
    {
      title: '微信昵称',
      dataIndex: 'nickname',
    },
    {
      title: '微信头像',
      dataIndex: 'avatar',
      valueType: 'avatar',
    },
    {
      title: '幸福币',
      dataIndex: 'virtual_coin',
    },
    {
      title: '用户类型',
      dataIndex: 'user_type',
      valueEnum: {
        0: { text: '访客' },
        1: { text: '业主' },
        2: { text: '业主成员' },
        3: { text: '租户' },
        4: { text: '租户成员' },
      },
    },
    {
      title: '注册时间',
      dataIndex: 'ctime',
      valueType: 'dateTime',
    },
  ];
  return (
    <TableList
      headerTitle="用户对象列表"
      modalTitle="用户"
      pagination
      columns={columns}
      getData={getUserList}
    />
  );
};

export default UserTableList;
