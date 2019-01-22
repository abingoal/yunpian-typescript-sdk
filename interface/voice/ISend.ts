/**
 * 语音验证码参数
 *
 * @export
 * @interface ISendParams
 */
export interface ISendParams {
  /**
   * 用户唯一标识
   *
   * @type {string}
   * @memberof ISendParams
   */
  apikey: string;
  /**
   * 接收的手机号、固话（需加区号）
   *
   * @type {string}
   * @memberof ISendParams
   */
  mobile: string;
  /**
   * 验证码，支持4~6位阿拉伯数字
   *
   * @type {string}
   * @memberof ISendParams
   */
  code: string;
  /**
   * 该条短信在您业务系统内的ID，如订单号或者短信发送记录流水号。默认不开放，如有需要请联系客服申请。
   *
   * @type {string}
   * @memberof ISendParams
   */
  uid?: string;
  /**
   * 本条语音验证码状态报告推送地址。 如推送地址固定，建议在"数据推送与获取”做批量设置。
   *
   * @type {string}
   * @memberof ISendParams
   */
  callback_url?: string;
}

/**
 * 语音验证码响应
 *
 * @export
 * @interface ISendResult
 */
export interface ISendResult {
  /**
   * 成功发送的语音呼叫次数
   *
   * @type {number}
   * @memberof ISendResult
   */
  count: number;
  /**
   * 扣费金额，一次语音验证码呼叫扣一条短信
   *
   * @type {number}
   * @memberof ISendResult
   */
  fee: number;
  /**
   * 记录id，32位的唯一字符串
   *
   * @type {string}
   * @memberof ISendResult
   */
  sid: string;
}
