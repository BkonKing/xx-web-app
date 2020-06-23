export interface menuItem {
  id: number,
  parent_id: number,
  icon: string,
  level: number,
  model: string,
  controller: string,
  action: string,
  menu_text: string,
  list_order: number,
  display: number
}
