/**
 * 查询视频短信模板响应
 *
 * @export
 * @interface IGetTplResult
 */
export interface IGetTplResult {
  code: number;
  msg: string;
  data: IData;
}
/**
 * data值
 *
 * @interface IData
 */
interface IData {
  tpl_id: number;
  check_status: string;
  reason: string;
  yd_enabled: boolean;
  lt_enabled: boolean;
  dx_enabled: boolean;
}
