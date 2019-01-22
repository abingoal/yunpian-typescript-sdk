/**
 * 批量发送参数
 *
 * @interface IBatchSendParams
 */
export interface IBatchSendParams {
  /**
   * 用户唯一标识，在管理控制台获取
   *
   * 是否必传： `是`
   *
   * 是否默认开放: `是`
   */
  apikey: string;
  /**
   * 接收的手机号；发送多个手机号请以逗号分隔，一次不要超过1000个；
   *
   * 是否必传： `是`
   *
   * 是否默认开放: `是`
   */
  mobile: string;
  /**
   * 已审核短信模板
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
  extend?: string;
  /**
   * 该条短信在您业务系统内的ID，如订单号或者短信发送记录流水号。默认不开放，如有需要请联系客服申请。批量接口同一批短信只能有一个uid。
   *
   * 是否必传： `否`
   *
   * 是否默认开放: `否`
   */
  uid?: string;
  /**
   * 短信发送后将向这个地址推送(运营商返回的)发送报告。 如推送地址固定，建议在"数据推送与获取”做批量设置。 如后台已设置地址，且请求内也包含此参数，将以请求内地址为准
   *
   * 是否必传： `否`
   *
   * 是否默认开放: `是`
   */
  scallback_url?: string;
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
 * 批量发送响应
 *
 * @interface IBatchSendResult
 */
export interface IBatchSendResult {
  /**
   * 扣费条数，70个字一条，超出70个字时按每67字一条计
   */
  total_count: number;
  /**
   * 扣费金额，单位：元
   */
  total_fee: string;
  /**
   * 计费单位；例如：“RMB”
   */
  unit: string;
  /**
   * 参考单个短信发送返回的数据
   */
  data: JSON;
}
