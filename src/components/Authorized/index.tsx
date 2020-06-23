import Authorized from './Authorized';
import Secured from './Secured';
import check from './CheckPermissions';
import renderAuthorize from './renderAuthorize';

// 固定权限
Authorized.Secured = Secured;
// 可选权限
Authorized.check = check;

const RenderAuthorize = renderAuthorize(Authorized);

export default RenderAuthorize;
