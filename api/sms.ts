import {
  IBatchSendParams,
  IBatchSendResult
} from "../interface/sms/IBatchSend";
import {
  IGetRecordParams,
  IGetRecordResult
} from "../interface/sms/IGetRecord";
import { IGetTotalFee } from "../interface/sms/IGetTotalFee";
import { IPullReplyResult } from "../interface/sms/IPullReply";
import { IPullStatusResult } from "../interface/sms/IPullStatus";
import { IRegCompleteResult } from "../interface/sms/IRegComplete";
import {
  ISingleSendParams,
  ISingleSendResult
} from "../interface/sms/ISingleSend";
import {
  ITplSingleSendParams,
  ITplSingleSendResult
} from "../interface/sms/ITplSingleSend";

import Client from "../util/client";

import { yunpianHost } from "../package.json";

/**
 * 短信
 */
class SMS {
  /**
   * 单条发送
   *
   * @param {ISingleSend} params 请求参数
   * @returns
   * @memberof SMS
   */
  static async single_send(params: ISingleSendParams) {
    return await Client.post<ISingleSendResult>(
      `${yunpianHost.sms}/single_send.json`,
      params
    );
  }
  /**
   * 批量发送
   *
   * @static
   * @param {IBatchSendParams} params 请求参数
   * @returns
   * @memberof SMS
   */
  static async batch_send(params: IBatchSendParams) {
    return await Client.post<IBatchSendResult>(
      `${yunpianHost.sms}/batch_send.json`,
      params
    );
  }
  /**
   * 指定模板单发（不推荐使用）
   *
   * @static
   * @param {ITplSingleSendParams} params 请求参数
   * @returns
   * @memberof SMS
   */
  static async tpl_single_send(params: ITplSingleSendParams) {
    return await Client.post<ITplSingleSendResult>(
      `${yunpianHost.sms}/tpl_single_send.json`,
      params
    );
  }
  /**
   * 指定模板群发
   *
   * @static
   * @param {*} params
   * @returns
   * @memberof SMS
   */
  static async tpl_batch_send(params: ITplSingleSendParams) {
    return await Client.post<IBatchSendResult>(
      `${yunpianHost.sms}/tpl_batch_send.json`,
      params
    );
  }
  /**
   * 获取状态报告
   *
   *  **功能说明：**  开通此接口功能后，我们将为您独立再保存一份新生产的状态报告数据，保存时间为72小时。 您可以通过此接口获取新产生的状态报告。注意，已成功获取的数据将会删除，请妥善处理接口返回的数据。
   *
   *  **备注：**
   *   1. 该接口为高级接口，默认不开放，可以在云片用户后台开启。
   *   2. 建议使用单线程获取。获取数据后，建议根据sid做去重。
   * @static
   * @param {string} apikey 用户唯一标识
   * @param {number} [pageSize] 每页个数，最大100个，默认20个
   * @returns
   * @memberof SMS
   */
  static async pull_status(apikey: string, pageSize?: number) {
    return await Client.post<IPullStatusResult[]>(
      `${yunpianHost.sms}/pull_status.json`,
      {
        apikey,
        page_size: pageSize
      }
    );
  }
  /**
   * 获取回复短信
   *
   * **功能说明：** 开通此接口功能后，我们将为您独立再保存一份新生产的上回复短信数据，保存时间为72小时。 您可以通过此接口获取新产生的回复短信。注意，已成功获取的数据将会删除，请妥善处理接口返回的数据。
   *
   * **备注：** 该接口为高级接口，默认不开放，可以在云片用户后台开启。
   *
   * @static
   * @param {string} apikey 用户唯一标识
   * @param {number} [pageSize] 每页个数，最大100个，默认20个
   * @returns
   * @memberof SMS
   */
  static async pull_reply(apikey: string, pageSize?: number) {
    return await Client.post<IPullReplyResult[]>(
      `${yunpianHost.sms}/pull_reply.json`,
      {
        apikey,
        page_size: pageSize
      }
    );
  }
  /**
   * 查短信发送记录
   *
   * @static
   * @param {*} params 请求参数
   * @returns
   * @memberof SMS
   */
  static async get_record(params: IGetRecordParams) {
    return await Client.post<IGetRecordResult[]>(
      `${yunpianHost.sms}/get_record.json`,
      params
    );
  }
  /**
   * 注册成功回调
   *
   * 附注：先使用 /v2/sms/single_send.json 发送验证码短信，注册成功后再调用此接口告诉我们该号码注册成功。
   *
   * 如果需要更准确的注册成功数据（排除找回密码等类型验证码产生的数据）。
   * 在注册页调用single_send.json接口时带上参数“register”（布尔类型），值为“true”，则该条短信会被认定为注册验证码短信。此功能需联系客服开通。
   *
   * @static
   * @param {string} apikey
   * @param {string} mobile
   * @param {string} [time]
   * @returns
   * @memberof SMS
   */
  static async reg_complete(apikey: string, mobile: string, time?: string) {
    return await Client.post<IRegCompleteResult>(
      `${yunpianHost.sms}/reg_complete.json`,
      {
        apikey,
        mobile,
        time
      }
    );
  }
  /**
   * 日账单导出
   *
   * **备注：** 今日数据通过此接口查询不到，请参考云片后台日账单
   * @static
   * @param {string} apikey 账号对应的apikey
   * @param {string} date 日期，格式yyyy-MM-dd
   * @returns
   * @memberof SMS
   */
  static async get_total_fee(apikey: string, date: string) {
    return await Client.post<IGetTotalFee>(
      `${yunpianHost.sms}/get_total_fee.json`,
      {
        apikey,
        date
      }
    );
  }
}
export default SMS;
