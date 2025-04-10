import React from 'react'

function Profiles({userName,Description,Skill}) {
  
  return (
    <div>
        <h1>{userName}</h1>
        <img src={"userImage"} alt="" />
        <p>{Description}</p>
        <p>{Skill}</p>
    </div>
  )
}

export default Profiles
