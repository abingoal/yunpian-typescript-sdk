import { IPullStatusResult } from "../interface/voice/IPullStatus";
import { ISendParams, ISendResult } from "../interface/voice/ISend";
import { yunpianHost } from "../package.json";
import Client from "../util/client";

/**
 * 语音验证码
 *
 * 功能说明：通过电话直呼到用户手机并语音播放验证码，默认最多播放3次。如：您的验证码是1234。 系统已提供的默认模板。
 *
 * 特别说明：验证码短信，请在手机验证环节，加入图片验证码，以免被恶意攻击。
 *
 * @class Voice
 */
class Voice {
  /**
   * 发送语音验证码
   *
   * **附注：** 该接口加密时，需对手机号和验证码同时加密。
   *
   * **防骚扰过滤：** 默认开启。过滤规则：同1个手机发相同内容，30秒内最多发送1次，5分钟内最多发送3次。
   *
   * @static
   * @param {ISendParams} params 请求参数
   * @returns
   * @memberof Voice
   */
  static async send(params: ISendParams) {
    return await Client.post<ISendResult>(
      `${yunpianHost.voice}/send.json`,
      params
    );
  }
  /**
   * 状态报告获取接口
   *
   * **功能说明：** 开通此接口功能后，我们将为您独立再保存一份新生产的状态报告数据，保存时间为72小时。
   * 您可以通过此接口获取新产生的状态报告。注意，已成功获取的数据将会删除，请妥善处理接口返回的数据。
   *
   * **备注：** 该接口为高级接口，默认不开放，如有需要请在后台数据推送与获取页面设置开启。
   *
   * @static
   * @param {string} apikey 用户唯一标识
   * @param {number} [pageSize] 每页个数，最大100个，默认20个
   * @returns
   * @memberof Voice
   */
  static async pull_status(apikey: string, pageSize?: number) {
    return await Client.post<IPullStatusResult[]>(
      `${yunpianHost.voice}/pull_status.json`,
      { apikey, page_size: pageSize }
    );
  }
}
export default Voice;
