/**
 * 注册成功回调响应
 *
 * @export
 * @interface IRegCompleteResult
 */
export interface IRegCompleteResult {
  /**
   * 正确为0表示成功，其他值表示错误，错误时不会有下面的数据
   *
   * @type {number}
   * @memberof IRegCompleteResult
   */
  code: number;
  /**
   * 请求状态消息
   *
   * @type {string}
   * @memberof IRegCompleteResult
   */
  msg: string;
}
