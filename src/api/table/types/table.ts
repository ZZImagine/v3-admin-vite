export interface UpdateTableRequestData {
  id?: number
  username: string
  password?: string
  email: string
  phone: string
  roles: string
  status: boolean
  address: string
}

export interface GetTableRequestData {
  /** 当前页码 */
  pageNum: number
  /** 查询条数 */
  pageSize: number
  /** 查询参数：用户名 */
  username?: string
  /** 查询参数：手机号 */
  phone?: string
}

export interface GetTableData {
  createTime: string
  email: string
  phone: string
  roles: string
  status: boolean
  username: string
  id: number
  address: string
  password: string
}

export type GetTableResponseData = ApiResponseData<{
  list: GetTableData[]
  total: number
}>
