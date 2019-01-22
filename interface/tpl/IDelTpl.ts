/**
 * 删除模板响应
 *
 * @export
 * @interface IdelTplResult
 */
export interface IdelTplResult {
  /**
   * 模板id
   *
   * @type {number}
   * @memberof IdelTplResult
   */
  tpl_id: number;
  /**
   * 模板内容
   *
   * @type {string}
   * @memberof IdelTplResult
   */
  tpl_content: string;
  /**
   * 审核状态：CHECKING/SUCCESS/FAIL
   *
   * @type {string}
   * @memberof IdelTplResult
   */
  check_status: string;
  /**
   * 审核未通过的原因
   *
   * @type {string}
   * @memberof IdelTplResult
   */
  reason: string;
}
