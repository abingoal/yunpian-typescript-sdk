/**
 * 日账单导出响应
 *
 * @export
 * @interface IGetTotalFee
 */
export interface IGetTotalFee {
  /**
   * 总计短信条数
   *
   * @type {number}
   * @memberof IGetTotalFee
   */
  totalCount: number;
  /**
   * 花费费用
   *
   * @type {string}
   * @memberof IGetTotalFee
   */
  totalFee: string;
  /**
   * 成功短信条数
   *
   * @type {number}
   * @memberof IGetTotalFee
   */
  totalSuccessCount: number;
  /**
   * 失败短信条数
   *
   * @type {number}
   * @memberof IGetTotalFee
   */
  totalFailedCount: number;
  /**
   * 未知短信条数
   *
   * @type {number}
   * @memberof IGetTotalFee
   */
  totalUnknownCount: number;
}
