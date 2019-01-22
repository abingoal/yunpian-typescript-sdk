/**
 * 单条发送参数
 *
 * @interface ISingleSend
 */
export interface ISingleSendParams {
  /**
   * 用户唯一标识，在管理控制台获取
   *
   * 是否必传： `是`
   *
   * 是否默认开放: `是`
   */
  apikey: string;
  /**
   * 接收的手机号，仅支持单号码发送；
   *
   * 是否必传： `是`
   *
   * 是否默认开放: `是`
   */
  mobile: string;
  /**
   * 已审核短信模板 （注意：国际短信的签名和模板须绑定使用）
   *
   * 是否必传： `是`
   *
   * 是否默认开放: `是`
   */
  text: string;
  /**
   * 下发号码扩展号，纯数字(如需使用"extend"参数，可免费向客服申请。)
   *
   * 是否必传： `否`
   *
   * 是否默认开放: `否`
   */
  extend: string;
  /**
   * 该条短信在您业务系统内的ID，如订单号或者短信发送记录流水号。默认不开放，如有需要请联系客服申请。
   *
   * 是否必传： `否`
   *
   * 是否默认开放: `否`
   */
  uid?: string;
  /**
   * 短信发送后将向这个地址推送(运营商返回的)发送报告。 如推送地址固定，建议在"数据推送与获取”做批量设置。 如后台已设置地址，且请求内也包含此参数，将以请求内地址为准、
   *
   * 是否必传： `否`
   *
   * 是否默认开放: `是`
   */
  callback_url?: string;
  /**
   * 是否为注册验证码短信，如果传入true，则该条短信作为注册验证码短信统计注册成功率，需联系客服开通。
   *
   * 是否必传： `否`
   *
   * 是否默认开放: `否`
   */
  register?: string;
  /**
   * 若短信中包含云片短链接，此参数传入true将会把短链接替换为目标手机号的专属链接，用于统计哪些号码的机主点击了短信中的链接，可在云片后台查看。
   * 详情参考[短信点击统计](https://www.yunpian.com/doc/zh_CN/domestic/sms_stat.html)。
   *
   * 是否必传： `否`
   *
   * 是否默认开放: `是`
   */
  mobile_stat?: string;
}
/**
 * 单条发送响应
 *
 * @interface ISingleSendResult
 */
export interface ISingleSendResult {
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
