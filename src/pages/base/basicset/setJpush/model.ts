import { Effect } from 'umi';
import { message } from 'antd';
import { setJpush } from './service';

export interface ModelType {
  namespace: string;
  state: {};
  effects: {
    submitRegularForm: Effect;
  };
}
const Model: ModelType = {
  namespace: 'basicsetAndsetJpush',

  state: {},

  effects: {
    *submitRegularForm({ payload }, { call }) {
      yield call(setJpush, payload);
      message.success('提交成功');
    },
  },
};

export default Model;
