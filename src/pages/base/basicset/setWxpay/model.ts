import { Effect } from 'umi';
import { message } from 'antd';
import { setWxpay } from './service';

export interface ModelType {
  namespace: string;
  state: {};
  effects: {
    submitRegularForm: Effect;
  };
}
const Model: ModelType = {
  namespace: 'basicsetAndsetWxpay',

  state: {},

  effects: {
    *submitRegularForm({ payload }, { call }) {
      yield call(setWxpay, payload);
      message.success('提交成功');
    },
  },
};

export default Model;
