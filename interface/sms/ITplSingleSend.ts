/**
 * 指定模板单发参数
 *
 * @export
 * @interface ITplSingleSendParams
 */
export interface ITplSingleSendParams {
  /**
   * 用户唯一标识
   *
   * 是否必传： `是`
   *
   * @type {string}
   * @memberof ITplSingleSendParams
   */
  apikey: string;
  /**
   * 接收的手机号
   *
   * 是否必传： `是`
   *
   * @type {string}
   * @memberof ITplSingleSendParams
   */
  mobile: string;
  /**
   * 模板id
   *
   * 是否必传： `是`
   *
   * @type {number}
   * @memberof ITplSingleSendParams
   */
  tpl_id: number;
  /**
   * 变量名和变量值对。请先对您的变量名和变量值分别进行urlencode再传递。
   *
   * 是否必传： `是`
   *
   * 使用参考：[代码示例](https://www.yunpian.com/doc/zh_CN/introduction/demos/encode_sample.html)。
   * 注：模板中有变量时，变量名和变量值都不能为空，模板中没有变量时，赋值tpl_value=""
   *
   * 附注：若使用该接口加密方式，需对手机号和内容加密。
   * @type {string}
   * @memberof ITplSingleSendParams
   */
  tpl_value: string;
  /**
   * 扩展号。默认不开放，如有需要请联系客服申请
   *
   * 是否必传： `否`
   *
   * @type {string}
   * @memberof ITplSingleSendParams
   */
  extend?: string;
  /**
   * 用户自定义唯一id。最大长度不超过256的字符串。 默认不开放，如有需要请联系客服申请
   *
   * 是否必传： `否`
   *
   * @type {string}
   * @memberof ITplSingleSendParams
   */
  uid?: string;
}
/**
 * 指定模板单发响应
 *
 * @export
 * @interface ITplSingleSendResult
 */
export interface ITplSingleSendResult {
  /**
   * 0代表发送成功，其他code代表出错，详细见"[返回值说明](https://www.yunpian.com/doc/zh_CN/returnValue/common.html)"页面
   *
   * @type {number}
   * @memberof ISingleSendResult
   */
  code: number;
  /**
   * 例如""发送成功""，或者相应错误信息
   *
   * @type {string}
   * @memberof ISingleSendResult
   */
  msg: string;
  /**
   * 发送成功短信的计费条数(计费条数：70个字一条，超出70个字时按每67字一条计费)
   *
   * @type {number}
   * @memberof ISingleSendResult
   */
  count: number;
  /**
   * 扣费金额，单位：元，类型：双精度浮点型/double
   *
   * @type {number}
   * @memberof ISingleSendResult
   */
  fee: number;
  /**
   * 计费单位；例如：“RMB”
   *
   * @type {number}
   * @memberof ISingleSendResult
   */
  unit: number;
  /**
   * 发送手机号
   *
   * @type {string}
   * @memberof ISingleSendResult
   */
  mobile: string;
  /**
   * 短信id，64位整型， 对应Java和C#的long，不可用int解析
   *
   * @type {number}
   * @memberof ISingleSendResult
   */
  sid: number;
}
