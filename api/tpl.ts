import { ITplAddParams, ITplAddResult } from "../interface/tpl/IAddTpl";
import { IdelTplResult } from "../interface/tpl/IDelTpl";
import { IGetDefaultTplResult } from "../interface/tpl/IGetDefaultTpl";
import { IGetTplResult } from "../interface/tpl/IGetTpl";
import {
  IUpdateTplParams,
  IUpdateTplResult
} from "../interface/tpl/IUpdateTpl";
import { yunpianHost } from "../package.json";
import Client from "../util/client";
/**
 * 模板短信
 *
 * @class Tpl
 */
class Tpl {
  /**
   * 添加模板
   *
   * @static
   * @param {ITplAddParams} params 请求参数
   * @returns
   * @memberof Tpl
   */
  static async add(params: ITplAddParams) {
    return await Client.post<ITplAddResult>(
      `${yunpianHost.tpl}/get_total_fee.json`,
      params
    );
  }
  /**
   * 获取模板
   *
   * @static
   * @param {string} apikey 用户唯一标识
   * @param {number} [tplId] 模板id，64位长整形。指定id时返回id对应的 模板。未指定时返回所有模板
   * @returns
   * @memberof Tpl
   */
  static async get(apikey: string, tplId?: number) {
    return await Client.post<IGetTplResult>(`${yunpianHost.tpl}/get.json`, {
      apikey,
      tpl_id: tplId
    });
  }
  /**
   * 修改模版
   *
   * 注意：模板成功修改之后需要重新审核才能使用！同时提醒您如果修改了变量，请重新务必测试，以免替换出错！
   *
   * 特别说明： 验证码类模板必填参数website和tplType
   *
   * @static
   * @param {IUpdateTplParams} params
   * @returns
   * @memberof Tpl
   */
  static async update(params: IUpdateTplParams) {
    return await Client.post<IUpdateTplResult>(
      `${yunpianHost.tpl}/update.json`,
      params
    );
  }
  /**
   * 删除模板
   *
   * @static
   * @param {string} apikey 用户唯一标识
   * @param {number} tplId 模板id，64位长整形。指定id时返回id对应的模板。未指定时返回所有模板
   * @returns
   * @memberof Tpl
   */
  static async del(apikey: string, tplId: number) {
    return await Client.post<IdelTplResult>(`${yunpianHost.tpl}/del.json`, {
      apikey,
      tpl_id: tplId
    });
  }
  /**
   * 取默认模板（不推荐）
   *
   * 当前系统提供的默认短信模板有：
   *
   * [请参考](https://www.yunpian.com/doc/zh_CN/domestic/tpl_get_default.html)
   * @static
   * @param {string} apikey 用户唯一标识
   * @param {number} [tplId] 模板id，64位长整形。指定id时返回id对应的默认 模板。未指定时返回所有默认模板
   * @returns
   * @memberof Tpl
   */
  static async get_default(apikey: string, tplId?: number) {
    return await Client.post<IGetDefaultTplResult[]>(
      `${yunpianHost.tpl}/del.json`,
      {
        apikey,
        tpl_id: tplId
      }
    );
  }
}
export default Tpl;
