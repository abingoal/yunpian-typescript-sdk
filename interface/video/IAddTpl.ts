/**
 * 添加视频短信模板参数
 */
export interface IAddTplParams {
  /**
   * 用户唯一标识，在管理控制台获取
   *
   * @type {string}
   * @memberof IAddTplParams
   */
  apikey: string;
  /**
   * 短信签名
   *
   * @type {string}
   * @memberof IAddTplParams
   */
  sign: string;
  /**
   * 内容布局的json描述文件
   *
   * @type {JSON}
   * @memberof IAddTplParams
   */
  layout: JSON;
  /**
   * 素材的字节数组，即素材内容压成zip包后转成字节数组。
   *
   * 注意: 所有素材文件直接放在zip包根目录下，
   * zip包内没有文件夹，且所有资源小于1.8M。
   *
   * @type {*}
   * @memberof IAddTplParams
   */
  material: any;
}
/**
 * 添加视频短信模板响应
 */
export interface IAddTplResult {
  /**
   * 0代表请求成功
   *
   * @type {number}
   * @memberof IAddTplResult
   */
  code: number;
  /**
   * 接口状态
   *
   * @type {string}
   * @memberof IAddTplResult
   */
  msg: string;
  /**
   * 模板id
   *
   * @type {number}
   * @memberof IAddTplResult
   */
  tpl_id: number;
}
