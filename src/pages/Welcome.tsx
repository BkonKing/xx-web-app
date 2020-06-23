import React from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import styles from './Welcome.less';


export default (): React.ReactNode => (
  <PageHeaderWrapper>
    <div className={styles.pre}>欢迎使用美好生活家园后台管理系统</div>
  </PageHeaderWrapper>
);
