/**
 * 获取短链接统计参数
 *
 * @export
 * @interface IStatParams
 */
export interface IStatParams {
  apikey: string;
  sid: string;
  start_time?: string;
  end_time?: string;
}
/**
 * 获取短链接统计响应
 *
 * @export
 * @interface IStatResult
 */
export interface IStatResult {
  code: number;
  msg: string;
  stat: JSON;
}
