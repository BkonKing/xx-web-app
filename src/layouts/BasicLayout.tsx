/**
 * Ant Design Pro v4 use `@ant-design/pro-layout` to handle Layout.
 * You can view component api by:
 * https://github.com/ant-design/ant-design-pro-layout
 */
import ProLayout, {
  MenuDataItem,
  BasicLayoutProps as ProLayoutProps,
  Settings,
  DefaultFooter,
} from '@ant-design/pro-layout';
import { createFromIconfontCN } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import { Link, connect, Dispatch } from 'umi';
import { Result, Button } from 'antd';
import Authorized from '@/utils/Authorized';
import RightContent from '@/components/GlobalHeader/RightContent';
import { ConnectState } from '@/models/connect';
import { getAuthorityFromRouter } from '@/utils/utils';
import { queryMenu } from '@/services/user';
import logo from '../assets/logo.svg';

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1908587_ppeo1ml9et.js',
});

const noMatch = (
  <Result
    status={403}
    title="403"
    subTitle="对不起，你没有权限访问当前页面。"
    extra={
      <Button type="primary">
        <Link to="/login">登录</Link>
      </Button>
    }
  />
);
export interface BasicLayoutProps extends ProLayoutProps {
  breadcrumbNameMap: {
    [path: string]: MenuDataItem;
  };
  route: ProLayoutProps['route'] & {
    authority: string[];
  };
  settings: Settings;
  dispatch: Dispatch;
}
export type BasicLayoutContext = { [K in 'location']: BasicLayoutProps[K] } & {
  breadcrumbNameMap: {
    [path: string]: MenuDataItem;
  };
};

const defaultFooterDom = (
  <DefaultFooter copyright={`${new Date().getFullYear()} 天福集团科技部出品`} links={[]} />
);
/**
 * 使用Authorized检查所有菜单项
 */

// const menuDataRender = (menuList: MenuDataItem[]): MenuDataItem[] =>
//   menuList.map((item) => {
//     const localItem = {
//       ...item,
//       children: item.children ? menuDataRender(item.children) : undefined,
//     };
//     return Authorized.check(item.authority, localItem, null) as MenuDataItem;
//   });

const BasicLayout: React.FC<BasicLayoutProps> = (props) => {
  const [menuData, setMenuData] = useState([]);
  const {
    dispatch,
    children,
    settings,
    location = {
      pathname: '/',
    },
  } = props;

  useEffect(() => {
    queryMenu()
      .then((res) => {
        if (res.success) {
          const { data } = res;
          setMenuData((data && data.records) || []);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  /**
   * 初始化菜单折叠变量
   */
  const handleMenuCollapse = (payload: boolean): void => {
    if (dispatch) {
      dispatch({
        type: 'global/changeLayoutCollapsed',
        payload,
      });
    }
  };

  // get children authority
  const authorized = getAuthorityFromRouter(props.route.routes, location.pathname || '/') || {
    authority: undefined,
  };
  return (
    <ProLayout
      logo={logo}
      menuHeaderRender={(logoDom, titleDom) => (
        <Link to="/">
          {logoDom}
          {titleDom}
        </Link>
      )}
      onCollapse={handleMenuCollapse}
      subMenuItemRender={(HeaderViewProps, defaultDom) => {
        return (
          <>
            <IconFont type={HeaderViewProps.icon} style={{ fontSize: '20px' }} />
            {HeaderViewProps.name}
          </>
        );
      }}
      menuItemRender={(menuItemProps, defaultDom) => {
        // console.log(menuItemProps.icon);
        if (menuItemProps.isUrl || menuItemProps.children || !menuItemProps.path) {
          return (
            <>
              <IconFont type={menuItemProps.icon} style={{ fontSize: '20px' }} />
              {menuItemProps.name}
            </>
          );
        }

        return (
          <Link to={menuItemProps.path}>
            <IconFont type={menuItemProps.icon} style={{ fontSize: '20px' }} />
            {menuItemProps.name}
          </Link>
        );
      }}
      breadcrumbRender={(routers = []) => [
        {
          path: '/',
          breadcrumbName: '首页',
        },
        ...routers,
      ]}
      itemRender={(route, params, routes, paths) => {
        const first = routes.indexOf(route) === 0;
        return first ? (
          <Link to={paths.join('/')}>{route.breadcrumbName}</Link>
        ) : (
          <span>{route.breadcrumbName}</span>
        );
      }}
      footerRender={() => defaultFooterDom}
      menuDataRender={() => menuData}
      // menuDataRender={menuDataRender}
      rightContentRender={() => <RightContent />}
      {...props}
      {...settings}
    >
      <Authorized authority={authorized!.authority} noMatch={noMatch}>
        {children}
      </Authorized>
    </ProLayout>
  );
};

export default connect(({ global, settings }: ConnectState) => ({
  collapsed: global.collapsed,
  settings,
}))(BasicLayout);
