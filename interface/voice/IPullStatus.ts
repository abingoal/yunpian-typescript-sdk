/**
 * 状态报告获取响应
 *
 * @export
 * @interface IPullStatusResult
 */
export interface IPullStatusResult {
  /**
   * 语音记录id，32位的唯一字符串
   *
   * @type {string}
   * @memberof IPullStatusResult
   */
  sid: string;
  /**
   * 用户自定义id
   *
   * @type {string}
   * @memberof IPullStatusResult
   */
  uid: string;
  /**
   * 用户接收时间
   *
   * @type {string}
   * @memberof IPullStatusResult
   */
  user_receive_time: string;
  /**
   * 通话时长
   *
   * @type {number}
   * @memberof IPullStatusResult
   */
  duration: number;
  /**
   * 接收失败的原因，如："Send Exception","用户信号不佳、关机等"
   *
   * @type {string}
   * @memberof IPullStatusResult
   */
  error_msg: string;
  /**
   * 接收手机号
   *
   * @type {string}
   * @memberof IPullStatusResult
   */
  mobile: string;
  /**
   * 接收状态有:SUCCESS/FAIL，状态值无需引号
   *
   * @type {string}
   * @memberof IPullStatusResult
   */
  report_status: string;
}
