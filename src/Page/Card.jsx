import React from 'react'

import '../Page/Style.css'

const Card = (props) => {
    const linkedInUrl = 'https://www.linkedin.com/in/abdullah-saybas-8642b518b/'
    
    const handleClick = () => {
        window.open(linkedInUrl, '_blank')
    }
  return (
    <div className="card-container">
        <span className={props.online ? "pro online" : "pro offline"}>{props.online ? "ONLINE" : "OFFLINE"}</span>
        {props.image}
        <h3>{props.name}</h3>
        <h3>{props.city}</h3>
        <p>{props.description}</p>
        <div className='button-container'>
            <button onClick={handleClick}>Message</button>
            <button>Following</button>
        </div>
        <div className='skills-container'>
            <h6>Skills</h6>
            <ul>
                {props.skills.map((skill,index) => 
                    <li key={index} >{skill}</li>
                )}
            </ul>
        </div>
    </div>
  )
}

export default Card