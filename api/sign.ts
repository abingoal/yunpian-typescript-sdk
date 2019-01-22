import {
  IAddSignParams,
  IAddSignResult,
  IAddSignResultError
} from "../interface/sign/IAddSign";
import { IGetSignParams, IGetSignResult } from "../interface/sign/IGetSign";
import {
  IUpdateSignParams,
  IUpdateSignResult
} from "../interface/sign/IUpdateSign";
import { yunpianHost } from "../package.json";
import Client from "../util/client";

/**
 * 签名
 *
 * @class Sign
 */
class Sign {
  /**
   * 添加签名
   *
   * @static
   * @param {IAddSignParams} params 请求参数
   * @returns
   * @memberof Sign
   */
  static async add(params: IAddSignParams) {
    return await Client.post<IAddSignResult & IAddSignResultError>(
      `${yunpianHost.sign}/add.json`,
      params
    );
  }
  /**
   * 获取签名
   *
   * @static
   * @param {IGetSignParams} params 请求参数
   * @returns
   * @memberof Sign
   */
  static async get(params: IGetSignParams) {
    return await Client.post<IGetSignResult>(
      `${yunpianHost.sign}/get.json`,
      params
    );
  }
  /**
   * 更新签名
   *
   * @static
   * @param {IUpdateSignParams} params 请求参数
   * @returns
   * @memberof Sign
   */
  static async update(params: IUpdateSignParams) {
    return await Client.post<IUpdateSignResult>(
      `${yunpianHost.sign}/update.json`,
      params
    );
  }
}
export default Sign;
