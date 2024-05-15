import React from 'react'
import Card from '../Page/Card'
import firstImage from '../Page/Asset/austin-distel-7uoMmzPd2JA-unsplash.jpg'
import secondImage from '../Page/Asset/dragos-gontariu-GH-mSApoKO0-unsplash.jpg'
import thirdImage from '../Page/Asset/yogendra-singh-HrpYHchKb5Y-unsplash.jpg'

const CardData = () => {
    const cardData = [
        {
        image :<img src={firstImage} alt="first-img" />,
        name: "Steven Smith" ,
        city :"Australia" ,
        description : "Full-Stack Web Developer" ,
        skills :["UI & UX",
        "Front-End Developer","Web developer","ReactJS","JavaScript","HTML","CSS","NodeJS"],
        online :false,

        },
        {
        image :<img src={secondImage} alt="second-img" />,
        name: "Mohamed Yusuf" ,
        city :"London" ,
        description : "Senior Software Engineer" ,
        skills :["C++",
        "Python","Java","AGILE","SQL","MYSql","Javascript","NodeJS"],
        online :false,
        },
        {
        image :<img src={thirdImage} alt="tirst-img" />,    
        name: "Vijay" ,
        city :"India" ,
        description : "Full-Stack Web Developer" ,
        skills :["UI & UX",
        "Front-End Developer","Web developer","ReactJS","JavaScript","HTML","CSS","NodeJS"],
        online :false,
        }
    ]
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginLeft:'10px' }}>
        {cardData.map((user,index) => (
            <Card key={index} 
            image ={user.image}
            user ={user.name} 
            city = {user.city}
            description={user.description}
            skills = {user.skills}
            online = {user.online}
            />
        ))}
    </div>
  )
}

export default CardData