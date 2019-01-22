/**
 * 获取状态报告响应
 *
 * @export
 * @interface IPullStatusResult
 */
export interface IPullStatusResult {
  /**
   * 运营商反馈代码的中文解释，仅供参考
   *
   * @type {string}
   * @memberof IPullStatusResult
   */
  error_detail: string;
  /**
   * 短信id，64位整型， 对应Java和C#的long，不可用int解析
   *
   * @type {number}
   * @memberof IPullStatusResult
   */
  sid: number;
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
   * 运营商返回的代码，如："DB:0103"
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
