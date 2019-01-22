/**
 * 添加模板参数
 *
 * @export
 * @interface ITplAddParams
 */
export interface ITplAddParams {
  /**
   * 用户唯一标识
   *
   * @type {string}
   * @memberof ITplAddParams
   */
  apikey: string;
  /**
   * 模板内容，必须以带符号【】的签名开头
   *
   * @type {string}
   * @memberof ITplAddParams
   */
  tpl_content: string;
  /**
   * 审核结果短信通知的方式: 0表示需要通知,默认; 1表示仅审核不通过时通知; 2表示仅审核通过时通知; 3表示不需要通知
   *
   * @type {number}
   * @memberof ITplAddParams
   */
  notify_type: number;
  /**
   * 验证码类模板对应的官网注册页面，验证码类模板必填
   *
   * @type {string}
   * @memberof ITplAddParams
   */
  website: string;
  /**
   * 1代表验证码类模板，验证码类模板必填
   *
   * @type {number}
   * @memberof ITplAddParams
   */
  tplType: number;
  /**
   * 审核后半小时，审核结果会向这个地址异步推送
   *
   * callback推送参数举例，您需要post方式接收数据
   *
   * | 名称        | 类型    |  描述  |
   * | :--------    | :----- | :---- |
   * | tpl_id      | string | 模板id    |
   * | tpl_content | string | 模板内容   |
   * | check_status| string | 审核状态：CHECKING/SUCCESS/FAIL    |
   * | reason      | string | 审核未通过的原因    |
   *
   * @type {string}
   * @memberof ITplAddParams
   */
  callback: string;
}
/**
 * 添加模版响应
 *
 * @export
 * @interface ITplAddResult
 */
export interface ITplAddResult {
  /**
   * 模板id
   *
   * @type {string}
   * @memberof ITplAddResult
   */
  tpl_id: string;
  /**
   * 模板内容
   *
   * @type {string}
   * @memberof ITplAddResult
   */
  tpl_content: string;
  /**
   * 审核状态：CHECKING/SUCCESS/FAIL
   *
   * @type {string}
   * @memberof ITplAddResult
   */
  check_status: string;
  /**
   * 审核未通过的原因
   *
   * @type {string}
   * @memberof ITplAddResult
   */
  reason: string;
}
