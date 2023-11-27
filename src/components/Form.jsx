import React from 'react'
import memesData from "../memesData"


function Form() {
    const id = Math.floor(Math.random(memesData.data.memes) * memesData.data.memes.length)
    const dataImage = memesData.data.memes[id].url
    return (
        <main>
            <div className='Form'>
                <input className='form-input' type='text' placeholder='Line 1'/>
                <input className='form-input' type='text' placeholder='Line 2'/>
                <button className='form-button' onClick={console.log(dataImage)}> Generate Meme </button>
            </div>
        </main>
    )
}

export default Form