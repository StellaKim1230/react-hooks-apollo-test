import React, { FC } from 'react'
import { useQuery } from '@apollo/react-hooks'

import { LaunchListData } from '../types/model'
import { GET_LAUNCH_LIST } from './querys'

const LaunchList: FC = () => {
  // const { loading, data } = useQuery<RocketInventory, LaunchIdVars> (
  //   GET_LAUNCH_PROFILE,
  //   { variables: { id: "42" }}
  // )

  const { data, loading, error} = useQuery<LaunchListData>(GET_LAUNCH_LIST)

  if (loading) return <div>Loading...</div>

  if (error || !data) return <div>ERROR</div>

  return data && (
    <>
      <h1>Launch List</h1>
        <table>
          <thead>
            <tr>
              <th>flight_number</th>
              <th>mission_name</th>
              <th>launch_year</th>
            </tr>
          </thead>
          <tbody>
            {data && data.launches.map((d, index)=> (
              <tr key={index}>
                <td>{d.flight_number}</td>
                <td>{d.mission_name}</td>
                <td>{d.launch_year}</td>
              </tr>
            ))}
          </tbody>
        </table>
    </>
  )
}

export default LaunchList
