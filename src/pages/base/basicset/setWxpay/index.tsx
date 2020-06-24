import { Card, Input, Form, Button } from 'antd';
import { connect, Dispatch } from 'umi';
import React, { FC, useState, useEffect } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { getWxpay } from './service';

const FormItem = Form.Item;

interface SetWxpayProps {
  submitting: boolean;
  dispatch: Dispatch<any>;
}

const SetWxpay: FC<SetWxpayProps> = (props) => {
  const { submitting } = props;
  const [form] = Form.useForm();
  const [disabled, setDisabled] = useState<boolean>(true);
  const queryWxpay = () => {
    getWxpay().then(({ data }) => {
      form.setFieldsValue(data);
    });
  };
  useEffect(() => {
    queryWxpay();
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
      type: 'basicsetAndsetWxpay/submitRegularForm',
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
            label="微信支付APPID"
            name="wxpayAppId"
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
            label="微信支付APPSecret"
            name="wxpayAppSecret"
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
            label="微信支付回调地址"
            name="wxpayNotifyUrl"
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
            label="微信支付证书地址"
            name="wxpayP12File"
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
            label="微信支付商户号"
            name="wxpayPartner"
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
            label="微信支付秘钥"
            name="wxpayPartnerKey"
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
  submitting: loading.effects['basicsetAndsetWxpay/submitRegularForm'],
}))(SetWxpay);
