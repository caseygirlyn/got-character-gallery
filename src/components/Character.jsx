import React from 'react'

function Character({spouse, birth, realm, race, death, imgUrl}) {
  return (
    <div>
      <h2>Samwise Gamgee</h2>
      <img src={imgUrl}/>
      <ul>
        <li>Spouse: {spouse}</li>
        <li>Date of Birth: {birth}</li>
        <li>Race: {race}</li>
        <li>Realm: {realm}</li>
        <li>Date of Death: {death}</li>
      </ul>
    </div>
  )
}

export default Character
