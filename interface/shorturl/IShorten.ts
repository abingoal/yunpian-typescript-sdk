/**
 * 生成短链接参数
 *
 * @export
 * @interface IShortenParams
 */
export interface IShortenParams {
  /**
   * 用户唯一标识
   *
   * @type {string}
   * @memberof IShortenParams
   */
  apikey: string;
  /**
   * 待转换的长网址，必须http://或https://开头
   *
   * @type {string}
   * @memberof IShortenParams
   */
  long_url: string;
  /**
   * 点击量统计持续时间（天），过期后不再统计，区间[0,30]，默认是30表示统计。
   *
   * @type {number}
   * @memberof IShortenParams
   */
  stat_duration?: number;
  /**
   * 生成的链接的域名，传入1是yp2.cn，2是t.cn，默认1
   *
   * @type {number}
   * @memberof IShortenParams
   */
  provider?: number;
  /**
   * 取名方便区分，默认为“02-27 11:11生产的短链接”
   *
   * @type {string}
   * @memberof IShortenParams
   */
  name?: string;
}
/**
 * 生成短连接响应
 *
 * @export
 * @interface IShortenResult
 */
export interface IShortenResult {
  /**
   * 正确为0表示成功，其他值表示错误，错误时不会有下面的数据
   *
   * @type {number}
   * @memberof IShortenResult
   */
  code: number;
  /**
   * 请求状态消息
   *
   * @type {string}
   * @memberof IShortenResult
   */
  msg: string;
  /**
   * json数组，需进一步解析
   *
   * @type {IShortUrl}
   * @memberof IShortenResult
   */
  short_url: IShortUrl;
}
/**
 * 短链
 *
 * @interface IShortUrl
 */
interface IShortUrl {
  /**
   * 短链接唯一标识，用于获取统计数据
   *
   * @type {string}
   * @memberof IShortUrl
   */
  sid: string;
  /**
   * 原链接
   *
   * @type {string}
   * @memberof IShortUrl
   */
  long_url: string;
  /**
   * 云片短链接
   *
   * @type {string}
   * @memberof IShortUrl
   */
  short_url: string;
  /**
   * 入口短链接，此为新浪短连接，若provider=1则enter_url=short_url
   *
   * @type {string}
   * @memberof IShortUrl
   */
  enter_url: string;
  /**
   * 名字
   *
   * @type {string}
   * @memberof IShortUrl
   */
  name: string;
  /**
   * 预计停止统计时间，为空时则没有开启统计
   *
   * @type {string}
   * @memberof IShortUrl
   */
  stat_expire: string;
}
