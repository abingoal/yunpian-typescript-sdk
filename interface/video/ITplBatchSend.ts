/**
 * 批量发送视频短信参数
 */
export interface ITplBatchSendParams {
  /**
   * 用户唯一标识，在管理控制台获取
   */
  apikey: string;
  /**
   * 模版id
   */
  tpl_id: string;
  /**
   * 手机号,多个号码用英文逗号,分隔,限制1000个
   */
  mobile: string;
  /**
   * 用户自定义的uid，默认不开放，请联系客服开通
   */
  uid?: string;
}
/**
 *  批量发送视频短信响应
 */
export interface ITplBatchSendResult {
  /**
   * 总发送条数
   */
  total_count: number;
  /**
   * 扣费金额，单位：元，类型：双精度浮点型/double
   */
  total_fee: string;
  /**
   * 计费单位；例如：“RMB”
   */
  unit: string;
  /**
   * data
   */
  data: IData[];
}

/**
 * data值
 */
interface IData {
  /**
   * 0代表请求成功
   */
  code: number;
  /**
   * 条数
   */
  count: number;
  /**
   * 计费
   */
  fee: string;
  /**
   * 手机号
   */
  mobile: string;
  /**
   * code描述
   */
  msg: string;
  /**
   * 唯一编码
   */
  sid: string;
}
