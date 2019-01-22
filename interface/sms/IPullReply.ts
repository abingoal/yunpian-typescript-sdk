/**
 * 获取回复短信响应
 *
 * @interface IPullReplyResult
 */
export interface IPullReplyResult {
  /**
   * 唯一序列号，无特别含义及用途
   *
   * @type {string}
   * @memberof IPullReplyResult
   */
  id: string;
  /**
   * 回复短信的手机号
   *
   * @type {string}
   * @memberof IPullReplyResult
   */
  mobile: string;
  /**
   * 回复的短信内容
   *
   * @type {string}
   * @memberof IPullReplyResult
   */
  text: string;
  /**
   * 回复短信的时间
   *
   * @type {string}
   * @memberof IPullReplyResult
   */
  reply_time: string;
  /**
   * 您发送时传入的扩展子号，未申请扩展功能或者未传入时为空串
   *
   * @type {string}
   * @memberof IPullReplyResult
   */
  extend: string;
  /**
   * 系统分配的扩展子号
   *
   * @type {string}
   * @memberof IPullReplyResult
   */
  base_extend: string;
  /**
   * 签名字段
   *
   * @type {string}
   * @memberof IPullReplyResult
   */
  _sign: string;
}
