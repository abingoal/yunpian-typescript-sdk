import axios from "axios";

/**
 * 封装Http请求
 *
 * @class Client
 */
class Client {
  /**
   * POST 请求
   *
   * @static
   * @template T 泛型参数
   * @param {string} url 请求Url
   * @param {object} data 请求数据
   * @returns
   * @memberof Client
   */
  static async post<T>(url: string, data: object) {
    return await axios
      .post<T>(url, data, {
        headers: {
          Accept: "application/json;charset=utf-8",
          "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
        }
      })
      .then(res => (res.status === 200 ? (res.data as T) : ({} as T)))
      .catch(err => {
        throw err;
      });
  }
  /**
   * GET请求
   *
   * @static
   * @template T
   * @param {string} url
   * @param {object} data
   * @returns
   * @memberof Client
   */
  static async get<T>(url: string, data: object) {
    return await axios
      .get(url, {
        headers: {
          Accept: "application/json;charset=utf-8",
          "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
        },
        params: data
      })
      .then(res => (res.status === 200 ? (res.data as T) : ({} as T)))
      .catch(err => {
        throw err;
      });
  }
}
export default Client;
