import React, { useState } from 'react'

function Dateselector() {
    const [selectDate,setSelectDate]=useState({
        input:'',
        items:[]
    })
    const handleDateChange=(event)=>{
        setSelectDate({
            ...selectDate,
            input:event.target.value
        })
    }
    const savedate=(event)=>{
       event.preventDefault()
       setSelectDate({
        input:'',
        items:[...selectDate.items,selectDate.input]
       })
    }
  return (
    <div>
        <form action="" onSubmit={savedate}>

      <input type="date" value={selectDate.input} onChange={handleDateChange}/>
      <button type='submit'>Save event</button>
      
        </form>
        <h2>Saved Dates:</h2>
            <ul>
                {selectDate.items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
    </div>
  )
}

export default Dateselector