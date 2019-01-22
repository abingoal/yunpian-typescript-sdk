/**
 * 修改账号信息参数
 *
 * @export
 * @interface ISetParams
 */
export interface ISetParams {
  /**
   * 用户唯一标识
   *
   * @type {string}
   * @memberof ISetParams
   */
  apikey: string;
  /**
   * 紧急联系人
   *
   * @type {string}
   * @memberof ISetParams
   */
  emergency_contact?: string;
  /**
   * 紧急联系人手机号
   *
   * @type {string}
   * @memberof ISetParams
   */
  emergency_mobile?: string;
  /**
   * 短信余额提醒阈值。 一天只提示一次
   *
   * @type {number}
   * @memberof ISetParams
   */
  alarm_balance?: number;
}
/**
 * 修改账号信息响应
 *
 * @export
 * @interface ISetResult
 */
export interface ISetResult {
  /**
   * 用户昵称
   *
   * @type {string}
   * @memberof ISetResult
   */
  nick: string;
  /**
   * 账号创建时间
   *
   * @type {string}
   * @memberof ISetResult
   */
  gmt_created: string;
  /**
   * 手机号
   *
   * @type {string}
   * @memberof ISetResult
   */
  mobile: string;
  /**
   * 邮箱
   *
   * @type {string}
   * @memberof ISetResult
   */
  email: string;
  /**
   * IP白名单，推荐使用
   *
   * @type {string}
   * @memberof ISetResult
   */
  ip_whitelist: string;
  /**
   * 调用api版本
   *
   * @type {string}
   * @memberof ISetResult
   */
  api_version: string;
  /**
   * 账户剩余条数或者剩余金额（根据账户类型）
   *
   * @type {number}
   * @memberof ISetResult
   */
  balance: number;
  /**
   * 剩余条数或剩余金额低于该值时提醒
   *
   * @type {number}
   * @memberof ISetResult
   */
  alarm_balance: number;
  /**
   * 紧急联系人
   *
   * @type {string}
   * @memberof ISetResult
   */
  emergency_contact: string;
  /**
   * 紧急联系人电话
   *
   * @type {string}
   * @memberof ISetResult
   */
  emergency_mobile: string;
}
