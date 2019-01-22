/**
 * 获取签名请求参数
 *
 * @export
 * @interface IGetSignParams
 */
export interface IGetSignParams {
  /**
   * 用户唯一标识
   *
   * @type {string}
   * @memberof IGetSignParams
   */
  apikey: string;
  /**
   * 签名id，暂未开放（API文档里先不写），如果传入此参数将会指定获取某个签名
   *
   * @type {number}
   * @memberof IGetSignParams
   */
  id?: number;
  /**
   * 返回所有包含该内容的签名（模糊匹配），若要获取指定签名可加上符号，如【云片网】
   *
   * @type {string}
   * @memberof IGetSignParams
   */
  sign?: string;
  /**
   * 页码，1开始，不带或者格式错误返回全部
   *
   * @type {number}
   * @memberof IGetSignParams
   */
  page_num?: number;
  /**
   * 返回条数，必须大于0，不带或者格式错误返回全部
   *
   * @type {number}
   * @memberof IGetSignParams
   */
  page_size?: number;
}

/**
 * 获取签名请求响应
 *
 * @export
 * @interface IGetSignResult
 */
export interface IGetSignResult {
  /**
   * 正确为0表示成功，其他值表示错误，错误时不会有下面的数据
   *
   * @type {number}
   * @memberof IGetSignResult
   */
  code: number;
  /**
   * 该查询条件下共有多少记录
   *
   * @type {number}
   * @memberof IGetSignResult
   */
  total: number;
  /**
   * 签名集合，为空表示没有符合条件的签名
   *
   * @type {ISign[]}
   * @memberof IGetSignResult
   */
  sign: ISign[];
}

/**
 * sign具体值
 *
 * @interface ISign
 */
interface ISign {
  /**
   * 通道类型，'NONE'暂未分配，'GLOBAL'国际短信通道，'MARKET'营销通道，'VIP'专用通道，'NORMAL'普通通道
   *
   * @type {string}
   * @memberof ISign
   */
  chan: string;
  /**
   * 当前状态,'CHECKING'审核中，'FAIL'审核失败，'SUCCESS'审核成功，'APLLYING_VIP'普通通道审核成功申请升级专用通道中
   *
   * @type {string}
   * @memberof ISign
   */
  check_status: string;
  /**
   * 当前签名是否启用
   *
   * @type {boolean}
   * @memberof ISign
   */
  enabled: boolean;
  /**
   * 扩展号，为空表示暂未分配
   *
   * @type {string}
   * @memberof ISign
   */
  extend: string;
  /**
   * 行业
   *
   * @type {string}
   * @memberof ISign
   */
  industry_type: string;
  /**
   * 是否用于国际短信
   *
   * @type {boolean}
   * @memberof ISign
   */
  only_global: boolean;
  /**
   * 客服给的审核结果解释，一般见于审核失败
   *
   * @type {string}
   * @memberof ISign
   */
  remark: string;
  /**
   * 签名
   *
   * @type {string}
   * @memberof ISign
   */
  sign: string;
  /**
   * 是否专用通道
   *
   * @type {boolean}
   * @memberof ISign
   */
  vip: boolean;
}
