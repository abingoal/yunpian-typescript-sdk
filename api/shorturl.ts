import { IClickedParams } from "../interface/shorturl/IClicked";
import { IShortenParams, IShortenResult } from "../interface/shorturl/IShorten";
import { IStatParams, IStatResult } from "../interface/shorturl/IStat";
import { yunpianHost } from "../package.json";
import Client from "../util/client";
/**
 * 短链接
 *
 * @class ShortUrl
 */
class ShortUrl {
  /**
   * 生成短连接
   *
   * 附注：使用此接口生成短链接，然后调用特定接口（目前仅支持/v2/sms/single_send和/v2/sms/batch_send）发送带有该短链接的短信(可以不用http:// 开头)，
   * 最后登录云片后台查看统计效果（10min更新一次），也可使用接口获取统计数据。
   *
   * 限制：1秒钟内最多1次，超出限制将返回错误信息。
   *
   * @static
   * @param {IShortenParams} params 请求参数
   * @returns
   * @memberof ShortUrl
   */
  static async shorten(params: IShortenParams) {
    return await Client.post<IShortenResult>(
      `${yunpianHost.short_url}/shorten.json`,
      params
    );
  }
  /**
   * 获取短链接统计
   *
   * 附注：统计的时间粒度为10分钟，更新频率为10分钟。
   *
   * @static
   * @param {IStatParams} params
   * @returns
   * @memberof ShortUrl
   */
  static async stat(params: IStatParams) {
    return await Client.post<IStatResult>(
      `${yunpianHost.short_url}/stat.json`,
      params
    );
  }
  /**
   * 下载短链接点击号码
   *
   * @static
   * @param {IClickedParams} params 请求参数
   * @returns
   * @memberof ShortUrl
   */
  static async clicked(params: IClickedParams) {
    return await Client.get(`${yunpianHost.short_url}/stat.json`, params);
  }
}
export default ShortUrl;
