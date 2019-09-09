export interface LaunchList {
  flight_number: number
  mission_name: string
  launch_year: number
}

export interface LaunchListData {
  launches: LaunchList[]
}

export interface LaunchIdVars {
  id: string
}