import { IAddTplParams, IAddTplResult } from "../interface/video/IAddTpl";
import { IGetTplResult } from "../interface/video/IGetTpl";
import {
  ITplBatchSendParams,
  ITplBatchSendResult
} from "../interface/video/ITplBatchSend";
import { yunpianHost } from "../package.json";
import Client from "../util/client";

/**
 * 视频短信模板
 *
 * @class Video
 */
class Video {
  /**
   * 添加视频短信模板
   *
   * @static
   * @param {IAddTplParams} params 请求参数
   * @returns
   * @memberof Video
   */
  static async add_tpl(params: IAddTplParams) {
    return await Client.post<IAddTplResult>(
      `${yunpianHost.video}/add_tpl.json`,
      params
    );
  }
  /**
   * 查询视频短信模板
   *
   * **特别说明 该功能需联系在线客服开通。**
   *
   * @static
   * @param {string} apikey 用户唯一标识，在管理控制台获取
   * @param {number} tplId 模版id
   * @returns
   * @memberof Video
   */
  static async get_tpl(apikey: string, tplId: number) {
    return await Client.post<IGetTplResult>(
      `${yunpianHost.video}/get_tpl.json`,
      { apikey, tpl_id: tplId }
    );
  }
  /**
   * 批量发送视频短信
   *
   * @static
   * @param {ITplBatchSendParams} params 请求参数
   * @returns
   * @memberof Video
   */
  static async tpl_batch_send(params: ITplBatchSendParams) {
    return await Client.post<ITplBatchSendResult>(
      `${yunpianHost.video}/tpl_batch_send.json`,
      params
    );
  }
}
export default Video;
