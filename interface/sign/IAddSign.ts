/**
 * 添加签名请求参数
 *
 * @export
 * @interface IAddSignParams
 */
export interface IAddSignParams {
  /**
   * 用户唯一标识
   *
   * @type {string}
   * @memberof IAddSignParams
   */
  apikey: string;
  /**
   * 签名内容
   *
   * * 不能包含【】
   * * 不能是“云片网”
   * * 3-8个字(开通“不限签名格式”和“仅发国际短信”的用户不受此限)
   * * 不能是纯英文和数字(开通“不限签名格式”和“仅发国际短信”的用户不受此限)
   * @type {string}
   * @memberof IAddSignParams
   */
  sign: string;
  /**
   * 是否短信通知结果，默认true
   *
   * @type {boolean}
   * @memberof IAddSignParams
   */
  notify?: boolean;
  /**
   * 是否申请专用通道，默认false
   *
   * * 仅发国际短信(is_only_global)的签名不能申请专用通道，此项(apply_vip)会被置为 false
   * @type {boolean}
   * @memberof IAddSignParams
   */
  apply_vip?: boolean;
  /**
   * 是否仅发国际短信，默认false
   *
   * @type {boolean}
   * @memberof IAddSignParams
   */
  is_only_global?: boolean;
  /**
   * 所属行业，默认“其它”
   * * 可选项(必须完全一致，匹配失败自动转为“其它”):
   * * 1.游戏 2. 移动应用 3. 视频 4. IT/通信/电子服务 5. 电子商务
   *   6.金融 7. 网站 8. 商业服务 9. 房地产/建筑 10. 零售/租赁/贸易 11. 生产/加工/制造 12. 交通/物流
   *  13.文化传媒 14. 能源/电气 15. 政府企业 16. 农业 17. 物联网 18. 其它
   * @type {string}
   * @memberof IAddSignParams
   */
  industry_type?: string;
  /**
   * 签名对应的营业执照或其他企业资质的图片文件URL，URL由请求方提供
   *
   * @type {string}
   * @memberof IAddSignParams
   */
  license_url?: string;
}
/**
 * 添加签名请求正常响应
 *
 * @export
 * @interface IAddSignResult
 */
export interface IAddSignResult {
  /**
   * 错误号码，正确为0
   *
   * @type {number}
   * @memberof IAddSignResult
   */
  code: number;
  /**
   * 示例“ok”
   *
   * @type {string}
   * @memberof IAddSignResult
   */
  msg: string;
  /**
   * 返回的签名json数组
   *
   * @type {ISign}
   * @memberof IAddSignResult
   */
  sign: ISign;
}
/**
 * sign参数
 *
 * @interface ISign
 */
interface ISign {
  /**
   * 当前审核状态
   *
   * @type {string}
   * @memberof ISign
   */
  apply_state: string;
  /**
   * 签名
   *
   * @type {string}
   * @memberof ISign
   */
  sign: string;
  /**
   * 是否为专用通道
   *
   * @type {boolean}
   * @memberof ISign
   */
  is_apply_vip: boolean;
  /**
   * 是否申请仅国际短信
   *
   * @type {boolean}
   * @memberof ISign
   */
  is_only_global: boolean;
  /**
   * 类型
   *
   * @type {string}
   * @memberof ISign
   */
  industry_type: string;
}

/**
 * 添加签名请求结果失败响应
 *
 * @export
 * @interface IAddSignResultError
 */
export interface IAddSignResultError {
  http_status_code: number;
  code: number;
  msg: string;
  detail: string;
}
