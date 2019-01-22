import { ISetParams, ISetResult } from "../interface/user/ISet";
import { yunpianHost } from "../package.json";
import Client from "../util/client";

/**
 * 账号信息
 *
 * @class User
 */
class User {
  /**
   * 查账户信息
   *
   * @static
   * @param {string} apikey 用户唯一标识
   * @returns
   * @memberof User
   */
  static async get(apikey: string) {
    return await Client.post<ISetResult>(`${yunpianHost.user}/get.json`, {
      apikey
    });
  }
  /**
   * 修改账号信息
   *
   * 附注：修改时，可一次修改emergency_contact、emergency_mobile和alarm_balance中的一个或多个(必须传入一个)
   *
   * @static
   * @param {ISetParams} params
   * @returns
   * @memberof User
   */
  static async set(params: ISetParams) {
    return await Client.post<ISetResult>(
      `${yunpianHost.user}/set.json`,
      params
    );
  }
}
export default User;
