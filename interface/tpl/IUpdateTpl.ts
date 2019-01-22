/**
 * 修改模版参数
 *
 * @export
 * @interface IUpdateTplParams
 */
export interface IUpdateTplParams {
  /**
   * 用户唯一标识
   *
   * @type {string}
   * @memberof IUpdateTplParams
   */
  apikey: string;
  /**
   * 指定id时返回id对应的模板。未指定时返回所有模板
   *
   * @type {number}
   * @memberof IUpdateTplParams
   */
  tpl_id: number;
  /**
   * 指定id时返回id对应的模板。未指定时返回所有模板模板内容，必须以带符号【】的签名开头
   *
   * @type {string}
   * @memberof IUpdateTplParams
   */
  tpl_content: string;
  /**
   * 验证码类模板对应的官网注册页面，验证码类模板必填
   *
   * @type {string}
   * @memberof IUpdateTplParams
   */
  website?: string;
  /**
   * 1代表验证码类模板，验证码类模板必填
   *
   * @type {number}
   * @memberof IUpdateTplParams
   */
  tplType?: number;
  /**
   * 审核结果会向这个地址推送，推送参数如下
   *
   * | 名称        | 类型    |  描述  |
   * | :--------    | :----- | :---- |
   * | tpl_id      | string | 模板id    |
   * | tpl_content | string | 模板内容   |
   * | check_status| string | 审核状态：CHECKING/SUCCESS/FAIL    |
   * | reason      | string | 审核未通过的原因    |
   *
   * @type {string}
   * @memberof IUpdateTplParams
   */
  callback?: string;
}
/**
 * 修改模版响应
 *
 * @export
 * @interface IUpdateTplResult
 */
export interface IUpdateTplResult {
  /**
   * 模板id
   *
   * @type {string}
   * @memberof IUpdateTplResult
   */
  tpl_id: string;
  /**
   * 模板内容
   *
   * @type {string}
   * @memberof IUpdateTplResult
   */
  tpl_content: string;
  /**
   * 审核状态：CHECKING/SUCCESS/FAIL
   *
   * @type {string}
   * @memberof IUpdateTplResult
   */
  check_status: string;
  /**
   * 审核未通过的原因
   *
   * @type {string}
   * @memberof IUpdateTplResult
   */
  reason: string;
}
