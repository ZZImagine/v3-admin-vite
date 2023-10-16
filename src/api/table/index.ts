import { request } from "@/utils/service"
import type * as Table from "./types/table"

/** 删 */
export function deleteTableDataApi(id: number) {
  return request({
    url: `user/${id}`,
    method: "delete"
  })
}

/** 增/改 */
export function updateTableDataApi(data: Table.UpdateTableRequestData) {
  return request({
    url: "user",
    method: "post",
    data
  })
}

/** 查 */
export function getTableDataApi(params: Table.GetTableRequestData) {
  return request<Table.GetTableResponseData>({
    url: "user/page",
    method: "get",
    params
  })
}
