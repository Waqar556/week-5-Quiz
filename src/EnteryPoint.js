import React from 'react'

const EnteryPoint = () => {
    const d= new Date();
    const dt=d.toDateString()
  return (
    <>
    <div><h4>Entry</h4></div>
    <div>
        <form>
            <select name='enterypoints' id='entrypoints'>
                <option value='Interchange'>Interchange</option>
                <option value='Zero Point'>Zero Point</option>
                <option value='NS Interchange'>NS Interchange</option>
                <option value='Ph4 Interchange'>Ph4 Interchange</option>
                <option value='Ferozepur Interchange'>Ferozepur Interchange</option>
                <option value='Lake City Interchange'>Lake City Interchange</option>
                <option value='Raiwand Interchange'>Raiwand Interchange</option>
                <option value='Bharia Interchange'>Bharia Interchange</option>
            </select><br/>
            <input type='text' placeholder='Number-Plate'/><br/>
            <input type='Date' id='date' name='date' placeholder={dt}/><br/><br/>
            <button type='submit'>Submit</button>
        </form>
    </div>
    </>
  )
}

export default EnteryPoint