import React from 'react'
import {useParams} from 'react-router-dom'

function ParamItem({data}) {
  const {code} = useParams();

  let detail = data.filter(obj => obj.id === code);

  // data.filter(function(obj,key){
  //   return obj.id === code
  // })

  console.log(detail);


  return (
    <>
      <div>{detail[0].name}</div>
    </>
  )
}

export default ParamItem