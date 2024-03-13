import React from 'react'

function userprofile({params}:any) {
  return (
    <div>
        <h1>userprofile</h1>
        <hr />
        <p>p page{params.id}</p>
    </div>
  )
}

export default userprofile