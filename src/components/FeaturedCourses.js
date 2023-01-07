import React from 'react'
import Card from './Card'
const courses=[1,2,3]
function FeaturedCourses() {
  return (
    <div>{
        courses.map((course,index)=>{
          return <Card key={index} />
          }) 
   
       }</div>
  )
}

export default FeaturedCourses