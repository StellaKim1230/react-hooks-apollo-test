import React, { FC } from 'react'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

interface RocketInventory {
  launch: {
    flight_number: number
    mission_name: string
    launch_year: number
    launch_success: any
    details: any
  }
}

interface RocketInventoryData {
  rocketInventory: RocketInventory[]
}

interface RocketInventoryVars {
  id: string
}

const GET_ROCKET_INVENTORY = gql `
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

const RocketInventoryList: FC = () => {
  const { loading, data } = useQuery<RocketInventory, RocketInventoryVars> (
    GET_ROCKET_INVENTORY,
    { variables: { id: "42" }}
  )
console.log(data)
  return (
    <div>
      <h3>Available Inventory</h3>
      { loading ? (
        <p>Loading...</p>
      ) : (
        <div>{data!.launch!.flight_number}</div>
        // <table>
        //   <thead>
        //     <tr>
        //       <th>Model</th>
        //       <th>Stock</th>
        //     </tr>
        //   </thead>
        //   <tbody>
        //     {data && data.launch.map(inventory => (
        //       <tr>
        //         <td>{inventory.model}</td>
        //         <td>{inventory.stock}</td>
        //       </tr>
        //     ))}
        //   </tbody>
        // </table>
      )}
    </div>
  )
}

export default RocketInventoryList
