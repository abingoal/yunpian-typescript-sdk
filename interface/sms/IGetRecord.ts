/**
 * 查短信发送记录参数
 *
 * @export
 * @interface IGetRecordParams
 */
export interface IGetRecordParams {
  apikey: string;
  mobile: string;
  start_time: string;
  end_time: string;
  page_num: number;
  page_size: number;
  type: string;
}
/**
 * 查短信发送记录响应
 *
 * @export
 * @interface IGetRecordResult
 */
export interface IGetRecordResult {
  sid: number;
  mobile: string;
  send_time: string;
  text: string;
  send_status: string;
  report_status: string;
  fee: number;
  user_receive_time: string;
  error_msg: string;
  uid: string;
}
