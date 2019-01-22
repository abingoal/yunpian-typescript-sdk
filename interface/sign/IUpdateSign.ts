/**
 * 修改签名请求参数
 *
 * @export
 * @interface IUpdateSignParams
 */
export interface IUpdateSignParams {
  /**
   * 用户唯一标识
   *
   * @type {string}
   * @memberof IUpdateSignParams
   */
  apikey: string;
  /**
   * 完整签名内容，用于指定修改哪个签名，可以加【】也可不加
   *
   * @type {string}
   * @memberof IUpdateSignParams
   */
  old_sign: string;
  /**
   * 修改后签名内容，不带【】，无此参数表示不修改
   *
   * @type {string}
   * @memberof IUpdateSignParams
   */
  sign?: string;
  /**
   * 是否短信通知结果，无此参数默认true
   *
   * @type {boolean}
   * @memberof IUpdateSignParams
   */
  notify?: boolean;
  /**
   * 是否申请专用通道，无此参数默认false
   *
   * @type {boolean}
   * @memberof IUpdateSignParams
   */
  apply_vip?: boolean;
  /**
   * 是否仅发国际短信，无此参数默认false
   *
   * @type {boolean}
   * @memberof IUpdateSignParams
   */
  is_only_global?: boolean;
  /**
   * 所属行业，无此参数不修改
   *
   * @type {string}
   * @memberof IUpdateSignParams
   */
  industry_type?: string;
  /**
   * 签名对应的营业执照或其他企业资质的图片文件URL，URL由请求方提供
   *
   * @type {string}
   * @memberof IUpdateSignParams
   */
  license_url?: string;
}
/**
 * 修改签名请求响应
 *
 * @export
 * @interface IUpdateSignResult
 */
export interface IUpdateSignResult {
  /**
   * 正确为0表示成功，其他值表示错误，错误时不会有下面的数据
   *
   * @type {number}
   * @memberof IUpdateSignResult
   */
  code: number;
  /**
   * 请求状态消息
   *
   * @type {string}
   * @memberof IUpdateSignResult
   */
  msg: string;
  /**
   * 签名集合，为空表示没有符合条件的签名
   *
   * @type {ISign}
   * @memberof IUpdateSignResult
   */
  sign: ISign;
}
/**
 * sign具体值
 *
 * @interface ISign
 */
interface ISign {
  /**
   * 当前审核状态
   *
   * @type {string}
   * @memberof ISign
   */
  apply_state: string;
  /**
   * 签名
   *
   * @type {string}
   * @memberof ISign
   */
  sign: string;
  /**
   * 是否为专用通道
   *
   * @type {boolean}
   * @memberof ISign
   */
  is_only_global: boolean;
  /**
   * 是否申请仅国际短信
   *
   * @type {boolean}
   * @memberof ISign
   */
  industry_type: boolean;
  /**
   * 类型
   *
   * @type {string}
   * @memberof ISign
   */
  is_apply_vip: string;
}
