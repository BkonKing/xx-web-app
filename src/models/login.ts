import { history, Reducer, Effect } from 'umi';
import { message } from 'antd'

import { login, outlogin } from '@/services/user';
import { getPageQuery } from '@/utils/utils';
import { setStore, getStore, removeStore } from '@/utils/store'

export interface StateType {
  userInfo?: any;
  status?: 'ok' | 'error';
  // type?: string;
  currentAuthority?: 'user' | 'guest' | 'admin';
}

export interface LoginModelType {
  namespace: string;
  state: StateType;
  effects: {
    login: Effect;
    logout: Effect;
  };
  reducers: {
    changeLoginStatus: Reducer<StateType>;
  };
}

const Model: LoginModelType = {
  namespace: 'login',

  state: {
    userInfo: getStore({name: 'userInfo'}) || {},
  },

  effects: {
    *login({ payload }, { call, put }) {
      const response = yield call(login, payload);
      // 登录成功
      if (response.success) {
        yield put({
          type: 'changeLoginStatus',
          payload: response.data,
        });
        const urlParams = new URL(window.location.href);
        const params = getPageQuery();
        let { redirect } = params as { redirect: string };
        if (redirect) {
          const redirectUrlParams = new URL(redirect);
          if (redirectUrlParams.origin === urlParams.origin) {
            redirect = redirect.substr(urlParams.origin.length);
            if (redirect.match(/^\/.*#/)) {
              redirect = redirect.substr(redirect.indexOf('#') + 1);
            }
          } else {
            window.location.href = '/';
            return;
          }
        }
        history.replace(redirect || '/');
      }
    },

    *logout(_, { call }) {
      const response = yield call(outlogin);
      if (response.success) {
        message.success('退出成功！')
        removeStore({name: 'access_token'})
        removeStore({name: 'refresh_token'})
        history.replace({
          pathname: '/login'
        });
      }
    },
  },

  reducers: {
    changeLoginStatus(state, { payload }) {
      setStore({
        name: 'access_token',
        content: payload.access_token
      });
      setStore({
        name: 'refresh_token',
        content: payload.refresh_token
      });
      setStore({
        name: 'userInfo',
        content: payload
      });
      return {
        ...state,
        userInfo: payload
      };
    },
  },
};

export default Model;
