/**
 * 获取短信模板响应
 *
 * @export
 * @interface IGetTplResult
 */
export interface IGetTplResult {
  /**
   * 模板id
   *
   * @type {number}
   * @memberof IGetTplResult
   */
  tpl_id: number;
  /**
   * 模板内容
   *
   * @type {string}
   * @memberof IGetTplResult
   */
  tpl_content: string;
  /**
   * 审核状态：CHECKING/SUCCESS/FAIL
   *
   * @type {string}
   * @memberof IGetTplResult
   */
  check_status: string;
  /**
   * 审核未通过的原因
   *
   * @type {string}
   * @memberof IGetTplResult
   */
  reason: string;
}
