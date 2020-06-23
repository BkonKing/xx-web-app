import { Form } from 'antd';
import React, { useState } from 'react';
import useMergeValue from 'use-merge-value';
import classNames from 'classnames';
import { FormInstance } from 'antd/es/form';
import { LoginParamsType } from '@/services/login';

import LoginContext from './LoginContext';
import LoginItem, { LoginItemProps } from './LoginItem';
import LoginSubmit from './LoginSubmit';
import styles from './index.less';

export interface LoginProps {
  activeKey?: string;
  onTabChange?: (key: string) => void;
  style?: React.CSSProperties;
  onSubmit?: (values: LoginParamsType) => void;
  className?: string;
  from?: FormInstance;
  children: any[];
}

interface LoginType extends React.FC<LoginProps> {
  Submit: typeof LoginSubmit;
  UserName: React.FunctionComponent<LoginItemProps>;
  Password: React.FunctionComponent<LoginItemProps>;
}

const Login: LoginType = (props) => {
  const { className } = props;
  const [active, setActive] = useState({});
  const [type] = useMergeValue('', {
    value: props.activeKey,
    onChange: props.onTabChange,
  });
  const otherChildren: React.ReactElement<unknown>[] = [];
  React.Children.forEach(
    props.children,
    (child: React.ReactElement<unknown>) => {
      if (!child) {
        return;
      }
      otherChildren.push(child);
    },
  );
  return (
    <LoginContext.Provider
      value={{
        updateActive: (activeItem) => {
          if (!active) return;
          if (active[type]) {
            active[type].push(activeItem);
          } else {
            active[type] = [activeItem];
          }
          setActive(active);
        },
      }}
    >
      <div className={classNames(className, styles.login)}>
        <Form
          form={props.from}
          onFinish={(values) => {
            if (props.onSubmit) {
              props.onSubmit(values as LoginParamsType);
            }
          }}
        >
          {props.children}
        </Form>
      </div>
    </LoginContext.Provider>
  );
};

Login.Submit = LoginSubmit;

Login.UserName = LoginItem.UserName;
Login.Password = LoginItem.Password;

export default Login;
