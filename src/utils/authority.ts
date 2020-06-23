import { reloadAuthorized } from './Authorized';

// 使用localStorage存储可能从实际项目中的服务器发送的权限信息
export function getAuthority(str?: string): string | string[] {
  const authorityString =
    typeof str === 'undefined' && localStorage ? localStorage.getItem('token') : str;
  // authorityString could be admin, "admin", ["admin"]
  let authority;
  try {
    if (authorityString) {
      authority = JSON.parse(authorityString);
    }
  } catch (e) {
    authority = authorityString;
  }
  if (typeof authority === 'string') {
    return [authority];
  }
  return authority;
}

export function setAuthority(authority: string | string[]): void {
  // const proAuthority = typeof authority === 'string' ? [authority] : authority;
  localStorage.setItem('token', JSON.stringify(authority));
  // auto reload
  reloadAuthorized();
}
