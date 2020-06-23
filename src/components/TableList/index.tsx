import { DownOutlined, PlusOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { Button, Divider, Dropdown, Menu, message, Modal } from 'antd';
import React, { useState, useRef, forwardRef, useImperativeHandle } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import ProTable, { ProColumns, ActionType } from '@ant-design/pro-table';
import { FormInstance } from 'antd/lib/form';

import SimpleModal from '../SimpleModal';

const { confirm } = Modal

interface TableListProps {
  headerTitle: string
  modalTitle: string;
  columns: ProColumns<any>[];
  getData: (params: any) => Promise<any>;
  addData?: any;
  updateData?: any;
  deleteData?: any;
  selectabled?: boolean;
  isAction?: boolean;
  isActionBar?: boolean;
  searchable?: boolean | {};
  actionRender?: any;
  pagination?: boolean
}

interface ObjAnyProps { [propname: string]: any }

const TableList = forwardRef((props: TableListProps, ref) => {
  const { headerTitle, columns, getData, modalTitle, selectabled, addData, updateData, deleteData, isAction, isActionBar, searchable = false, actionRender, pagination = false } = props
  const [createModalVisible, handleModalVisible] = useState<boolean>(false);
  const actionRef = useRef<ActionType>();
  const formRef = useRef<FormInstance>();
  /**
   * 添加
   * @param fields
   */
  const handleAdd = async (fields: ObjAnyProps) => {
    const hide = message.loading('正在添加');
    try {
      await addData({ ...fields });
      hide();
      message.success('添加成功');
      return true;
    } catch (error) {
      hide();
      message.error('添加失败请重试！');
      return false;
    }
  };

  /**
   * 更新
   * @param fields
   */
  const handleUpdate = async (fields: ObjAnyProps) => {
    const hide = message.loading('正在配置');
    try {
      await updateData(fields);
      hide();

      message.success('配置成功');
      return true;
    } catch (error) {
      hide();
      message.error('配置失败请重试！');
      return false;
    }
  };

  /**
   * 删除
   * @param selectedRows
   */
  const handleRemove = async (selectedRows: ObjAnyProps[]) => {
    const hide = message.loading('正在删除');
    const id = selectedRows.map((row) => row.id)
    if (!selectedRows) return true;
    try {
      const res = await deleteData({
        id,
      });
      hide();
      // eslint-disable-next-line no-unused-expressions
      res.ok && message.success('删除成功，即将刷新');
      return true;
    } catch (error) {
      hide();
      message.error('删除失败，请重试');
      return false;
    }
  };

  /**
   * 删除提示
   * @param selectedRows
   */
  const removeConfirm = (selectedRows: any[]) => {
    return new Promise((resolve, reject) => {
      confirm({
        title: `是否删除当前${modalTitle}?`,
        icon: <ExclamationCircleOutlined />,
        okText: '确定',
        cancelText: '取消',
        content: '删除后将无法还原，请谨慎处理',
        async onOk() {
          await handleRemove(selectedRows)
          resolve()
        },
        onCancel() {
          reject()
        },
      });
    })
  }

  /**
   * 给表格数据添加key
   * @param data 表格数据
   */
  const addKey = (data: any) => {
    return data.map((col: ProColumns<{}>) => {
      const keyData: any = col
      keyData.key = col.id
      if (keyData.children) {
        keyData.children = addKey(keyData.children)
      }
      return keyData
    })
  }

  /**
   * 获取表格数据，并格式化表格数据格式
   * @param params 表格搜索翻页等参数
   */
  const requestData = async (params: ObjAnyProps) => {
    const { current: pageNum, ...newParams } = params
    if (pagination) {
      newParams.pageNum = pageNum
    }
    return getData(newParams).then(({ data }: ObjAnyProps) => {
      if (pagination) {
        const { records, current, size, total } = data
        const columnData = addKey(records)
        return {
          current,
          pageSize: size,
          success: true,
          data: columnData,
          total
        }
      }
      const columnData = addKey(data)
      return {
        success: true,
        data: columnData,
      }
    })
  }

  const showEditModal = (item: Partial<ObjAnyProps>) => {
    handleModalVisible(true);
    setTimeout(() => {
      if (formRef.current) {
        formRef.current.setFieldsValue(item);
      }
    }, 0);
  };

  useImperativeHandle(ref, () => ({
    showAddModal: (item: any) => {
      showEditModal(item)
    }
  }))

  // 判断是否有操作栏
  if (isActionBar) {
    columns.push({
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record, index, action) => (
        <>
          {actionRender && actionRender(record)}
          <a
            onClick={() => {
              showEditModal(record);
            }}
          >
            修改
          </a>
          <Divider type="vertical" />
          <a onClick={() => {
            removeConfirm([record]).then(() => {
              action.reload();
            }).catch(() => { });
          }}>删除</a>
        </>
      ),
    })
  }

  let forms

  // 是否显示表单
  if (isAction || isActionBar) {
    forms = <SimpleModal onCancel={() => handleModalVisible(false)} modalVisible={createModalVisible} title={modalTitle} footer={null}>
      <ProTable<ObjAnyProps, ObjAnyProps>
        formRef={formRef}
        onSubmit={async (value) => {
          let success = false
          if (value.id) {
            success = await handleUpdate(value);
          } else {
            success = await handleAdd(value);
          }
          if (success) {
            handleModalVisible(false);
            if (actionRef.current) {
              actionRef.current.reload();
            }
          }
        }}
        rowKey="key"
        type="form"
        columns={columns}
        rowSelection={{}}
      />
    </SimpleModal>
  }

  return (
    <PageHeaderWrapper>
      <ProTable<ObjAnyProps>
        headerTitle={headerTitle}
        actionRef={actionRef}
        rowKey="key"
        toolBarRender={(action, { selectedRows }) => {
          if (isAction) {
            return [
              <Button type="primary" onClick={() => handleModalVisible(true)}>
                <PlusOutlined /> 新建
                </Button>,
              selectedRows && selectedRows.length > 0 && (
                <Dropdown
                  overlay={
                    <Menu
                      onClick={(e) => {
                        if (e.key === 'remove') {
                          removeConfirm(selectedRows).then(() => {
                            action.reload();
                          }).catch(() => { });
                        }
                      }}
                      selectedKeys={[]}
                    >
                      <Menu.Item key="remove">批量删除</Menu.Item>
                    </Menu>
                  }
                >
                  <Button>
                    批量操作 <DownOutlined />
                  </Button>
                </Dropdown>
              ),
            ]
          }
          return []
        }}
        search={searchable}
        request={(params) => requestData(params)}
        columns={columns}
        rowSelection={selectabled ? {} : false}
      />
      {forms}
    </PageHeaderWrapper>
  );
});

export default TableList;
