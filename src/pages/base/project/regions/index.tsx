/* eslint-disable prefer-destructuring */
import React, { useState, useRef, useEffect } from 'react';
import { message, Divider, Input, Cascader } from 'antd';
import { ProColumns } from '@ant-design/pro-table';
import TableList from '@/components/TableList';
import SimpleTree from '@/components/SimpleTree';
import SimpleModal from '@/components/SimpleModal';
import UploadImage from '@/components/UploadImage';
import PreviewImage from '@/components/PreviewImage';
import { isPhone, longitudeValid, latitudeValid } from '@/utils/validate';
import {
  getRegionsList,
  addRegions,
  updateRegions,
  deleteRegions,
  getRegionsMenu,
  updateRegionsMenu,
} from './service';
import { getAreasList } from '../areas/service';

const regionTableList: React.FC<{}> = () => {
  const parentRef = useRef();
  const [regionTreeModal, setRegionTreeModal] = useState<boolean>(false);
  const [treeData, setTreeData] = useState<[]>([]);
  const [projectId, setProjectId] = useState<number>();
  const [areaOption, setAreaOption] = useState<[]>([]);
  const transformAreas = (data: any) => {
    return data.map((obj: any) => {
      const keyData: any = {
        value: obj.id,
        label: obj.areas_name,
        children: obj.children,
      };
      if (keyData.children) {
        keyData.children = transformAreas(keyData.children);
      }
      return keyData;
    });
  };
  useEffect(() => {
    getAreasList().then(({ data }) => {
      setAreaOption(transformAreas(data));
    });
  }, []);
  const changeArea = (value: any) => {
    const newData = value;
    newData.province_id = value.areaArr[0];
    newData.city_id = value.areaArr[1];
    newData.area_id = value.areaArr[2];
    delete newData.areaArr;
    return newData;
  };
  const onAmend = (value: any) => {
    const newData = value;
    newData.areaArr = [value.province_id, value.city_id, value.area_id];
    return newData;
  };
  const columns: ProColumns<{}>[] = [
    {
      title: '省',
      dataIndex: 'province',
      hideInForm: true,
    },
    {
      title: '市',
      dataIndex: 'city',
      hideInForm: true,
    },
    {
      title: '区',
      dataIndex: 'area',
      hideInForm: true,
      // rules: [
      //   {
      //     required: true,
      //     message: '区为必填项',
      //   },
      // ],
    },
    {
      title: '省市县',
      dataIndex: 'areaArr',
      hideInTable: true,
      renderFormItem(_, { value, onChange }) {
        return (
          <Cascader
            value={value}
            options={areaOption}
            onChange={onChange}
            placeholder="选择省市县"
          />
        );
      },
      rules: [
        {
          required: true,
          message: '省市县为必填项',
        },
      ],
    },
    {
      title: '地址',
      dataIndex: 'address',
      rules: [
        {
          required: true,
          message: '地址为必填项',
        },
      ],
    },
    {
      title: '小区名称',
      dataIndex: 'project_name',
      rules: [
        {
          required: true,
          message: '小区名称为必填项',
        },
      ],
    },
    {
      title: '小区缩略图',
      dataIndex: 'thumb',
      render: (_) => {
        return <PreviewImage src={String(_)} alt="小区缩略图" />;
      },
      renderFormItem: (item, { value, onChange }, form) => {
        return (
          <UploadImage
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            value={value}
            onChange={onChange}
          />
        );
      },
      rules: [
        {
          required: true,
          message: '小区缩略图为必填项',
        },
      ],
    },
    {
      title: '联系人',
      dataIndex: 'link_man',
      rules: [
        {
          required: true,
          message: '联系人为必填项',
        },
      ],
    },
    {
      title: '联系手机',
      dataIndex: 'link_mobile',
      rules: [
        {
          required: true,
          message: '联系手机为必填项',
        },
        {
          validator: (_, value) =>
            isPhone(value) ? Promise.resolve() : Promise.reject('请输入正确的手机号或电话格式'),
        },
      ],
    },
    {
      title: '经度',
      dataIndex: 'longitude',
      rules: [
        {
          required: true,
          message: '经度为必填项',
        },
        {
          validator: (_, value) =>
            longitudeValid(value) ? Promise.resolve() : Promise.reject('经度必须在-180~180之间'),
        },
      ],
    },
    {
      title: '纬度',
      dataIndex: 'latitude',
      rules: [
        {
          required: true,
          message: '纬度为必填项',
        },
        {
          validator: (_, value) =>
            latitudeValid(value) ? Promise.resolve() : Promise.reject('经度必须在-90~90之间'),
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
  const showRoleTree = (id: number) => {
    getRegionsMenu({
      projectId: id,
    }).then(({ data }) => {
      setTreeData(data.records);
      setRegionTreeModal(true);
      setProjectId(id);
    });
  };
  const saveRoleMenu = () => {
    const checkedArr = parentRef.current.getData();
    updateRegionsMenu({
      id: projectId,
      menu_allots: checkedArr.join(','),
    }).then(() => {
      message.success('保存成功');
      setRegionTreeModal(false);
    });
  };
  return (
    <>
      <TableList
        headerTitle="项目列表"
        modalTitle="项目"
        columns={columns}
        isAction
        isActionBar
        pagination
        getData={getRegionsList}
        addData={addRegions}
        updateData={updateRegions}
        deleteData={deleteRegions}
        onAmend={onAmend}
        onSubmit={changeArea}
        actionRender={(record: any) => {
          return (
            <>
              <a
                onClick={() => {
                  showRoleTree(record.id);
                }}
              >
                设置物业菜单
              </a>
              <Divider type="vertical" />
            </>
          );
        }}
      />
      <SimpleModal
        title="编辑权限菜单"
        onCancel={() => setRegionTreeModal(false)}
        modalVisible={regionTreeModal}
        onOk={saveRoleMenu}
      >
        <SimpleTree ref={parentRef} data={treeData} />
      </SimpleModal>
    </>
  );
};

export default regionTableList;
