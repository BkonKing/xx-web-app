import { Card, Input, Form, Button } from 'antd';
import { connect, Dispatch } from 'umi';
import React, { FC, useState, useEffect } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { getJpush } from './service';

const FormItem = Form.Item;

interface SetJpushProps {
  submitting: boolean;
  dispatch: Dispatch<any>;
}

const SetJpush: FC<SetJpushProps> = (props) => {
  const { submitting } = props;
  const [form] = Form.useForm();
  const [disabled, setDisabled] = useState<boolean>(true);
  const getJpushForm = () => {
    getJpush().then(({ data }) => {
      form.setFieldsValue(data);
    });
  };
  useEffect(() => {
    getJpushForm();
  }, []);
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 7 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 12 },
      md: { span: 10 },
    },
  };

  const submitFormLayout = {
    wrapperCol: {
      xs: { span: 24, offset: 0 },
      sm: { span: 10, offset: 7 },
    },
  };

  const toEdit = () => {
    setDisabled(false);
  };

  const onFinish = (values: { [key: string]: any }) => {
    const { dispatch } = props;
    dispatch({
      type: 'basicsetAndsetJpush/submitRegularForm',
      payload: values,
    }).then(() => {
      setDisabled(true);
    });
  };

  const onFinishFailed = (errorInfo: any) => {
    // eslint-disable-next-line no-console
    console.log('Failed:', errorInfo);
  };

  return (
    <PageHeaderWrapper>
      <Card bordered={false}>
        <Form
          hideRequiredMark
          style={{ marginTop: 8 }}
          form={form}
          name="basic"
          initialValues={{ public: '1' }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <FormItem
            {...formItemLayout}
            label="极光推送key"
            name="jpushAppKey"
            rules={[
              {
                required: true,
                message: '请输入',
              },
            ]}
          >
            <Input placeholder="" disabled={disabled} />
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="极光推送master"
            name="jpushAppMaster"
            rules={[
              {
                required: true,
                message: '请输入',
              },
            ]}
          >
            <Input placeholder="" disabled={disabled} />
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="极光推送链接"
            name="jpushUrl"
            rules={[
              {
                required: true,
                message: '请输入',
              },
            ]}
          >
            <Input placeholder="" disabled={disabled} />
          </FormItem>
          <FormItem {...submitFormLayout} style={{ marginTop: 32 }}>
            <Button style={{ marginRight: 8 }} type="primary" disabled={!disabled} onClick={toEdit}>
              编辑
            </Button>
            <Button type="primary" htmlType="submit" disabled={disabled} loading={submitting}>
              提交
            </Button>
          </FormItem>
        </Form>
      </Card>
    </PageHeaderWrapper>
  );
};

export default connect(({ loading }: { loading: { effects: { [key: string]: boolean } } }) => ({
  submitting: loading.effects['basicsetAndsetJpush/submitRegularForm'],
}))(SetJpush);
