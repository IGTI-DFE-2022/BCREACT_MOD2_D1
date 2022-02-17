import React from 'react'

export default function Candidate({candidate, vote}) {
  return (
    <div className='w-48 h-48 border flex flex-col items-center p-5'>
      <div className="flex flex-row items-center justify-between space-x-3 w-full">
        <img src={`/img/${candidate.name}.png`} className="w-12 h-12 rounded-full"></img>
        <div>{vote.votes.toLocaleString()}</div>
      </div>
      <div>
        <div>{candidate.name}</div>

      </div>
    </div>
  )
}
