/**
 * 取默认模板响应
 *
 * @export
 * @interface IGetDefaultTplResult
 */
export interface IGetDefaultTplResult {
  /**
   * 模板id
   *
   * @type {string}
   * @memberof IGetDefaultTplResult
   */
  tpl_id: string;
  /**
   * 模板内容
   *
   * @type {string}
   * @memberof IGetDefaultTplResult
   */
  tpl_content: string;
  /**
   * 审核状态：CHECKING/SUCCESS/FAIL
   *
   * @type {string}
   * @memberof IGetDefaultTplResult
   */
  check_status: string;
  /**
   * 审核未通过的原因
   *
   * @type {string}
   * @memberof IGetDefaultTplResult
   */
  reason: string;
}
