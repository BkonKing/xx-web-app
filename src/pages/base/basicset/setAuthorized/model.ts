import { Effect } from 'umi';
import { message } from 'antd';
import { setAuthorized } from './service';

export interface ModelType {
  namespace: string;
  state: {};
  effects: {
    submitRegularForm: Effect;
  };
}
const Model: ModelType = {
  namespace: 'basicsetAndsetAuthorized',

  state: {},

  effects: {
    *submitRegularForm({ payload }, { call }) {
      yield call(setAuthorized, payload);
      message.success('ζδΊ€ζε');
    },
  },
};

export default Model;
