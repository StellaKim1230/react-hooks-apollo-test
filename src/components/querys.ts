import gql from 'graphql-tag'

export const GET_LAUNCH_PROFILE = gql `
  query getLaunchProfile($id: String!) {
    launch(id: $id) {
      flight_number
      mission_name
      launch_year
      launch_success
      details
    }
  }
`

export const GET_LAUNCH_LIST = gql `
  query LaunchList {
    launches {
      flight_number
      mission_name
      launch_year
    }
  }
`