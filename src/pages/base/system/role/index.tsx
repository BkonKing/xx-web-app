import React, { useState, useRef } from 'react';
import TableList from '@/components/TableList';
import RoleTree from '@/components/SimpleTree';
import SimpleModal from '@/components/SimpleModal';
import { message, Divider, Input } from 'antd';
import { ProColumns } from '@ant-design/pro-table';

import {
  getRoleList,
  addRole,
  deleteRole,
  updateRole,
  getRoleMenu,
  updateRoleMenu,
} from './service';

const adminTableList: React.FC<{}> = () => {
  const parentRef = useRef();
  const tableRef = useRef();
  const [roleTreeModal, setRoleTreeModal] = useState<boolean>(false);
  const [treeData, setTreeData] = useState<[]>([]);
  const [checkedKeyData, setCheckedKeyData] = useState<[]>([]);
  const [role_id, setRole_id] = useState<number>();
  const columns: ProColumns<{}>[] = [
    {
      title: '权限角色名称',
      dataIndex: 'role_name',
      rules: [
        {
          required: true,
          message: '权限角色名称为必填项',
        },
      ],
    },
    {
      title: '权限角色描述',
      dataIndex: 'content',
      width: '50%',
    },
    {
      title: '排序',
      dataIndex: 'list_order',
      valueType: 'digit',
    },
    {
      dataIndex: 'id',
      hideInTable: true,
      // hideInForm: true,
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
  const showRoleTree = (id: number) => {
    getRoleMenu({
      roleId: id,
    }).then((res) => {
      if (res.success) {
        setTreeData(res.data.records);
        setCheckedKeyData(res.data.allots.split(','));
        setRoleTreeModal(true);
        setRole_id(id);
      }
    });
  };
  const saveRoleMenu = () => {
    const checkedArr = parentRef.current.getData();
    updateRoleMenu({
      role_id,
      menu_allots: checkedArr.join(','),
    }).then((res) => {
      if (res.success) {
        message.success('保存成功');
        setRoleTreeModal(false);
      }
    });
  };
  return (
    <>
      <TableList
        ref={tableRef}
        headerTitle="权限角色列表"
        modalTitle="权限角色"
        columns={columns}
        getData={getRoleList}
        isAction
        isActionBar
        addData={addRole}
        updateData={updateRole}
        deleteData={deleteRole}
        actionRender={(record: any) => {
          return (
            <>
              <a
                onClick={() => {
                  showRoleTree(record.id);
                }}
              >
                设置权限菜单
              </a>
              <Divider type="vertical" />
              <a
                onClick={() => {
                  const newRecord = {
                    parent_id: record.id,
                  };
                  tableRef.current.showAddModal(newRecord);
                }}
              >
                添加
              </a>
              <Divider type="vertical" />
            </>
          );
        }}
      />
      <SimpleModal
        title="编辑权限菜单"
        onCancel={() => setRoleTreeModal(false)}
        modalVisible={roleTreeModal}
        onOk={saveRoleMenu}
      >
        <RoleTree ref={parentRef} data={treeData} checkedKeyData={checkedKeyData} />
      </SimpleModal>
    </>
  );
};

export default adminTableList;
