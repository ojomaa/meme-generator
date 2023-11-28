import React from 'react'
import memesData from "../memesData"


function Form() {
    const id = Math.floor(Math.random(memesData.data.memes) * memesData.data.memes.length)
    const dataImage = memesData.data.memes[id].url

    // Create state for the meme image
    const [meme, setMeme] = React.useState({
        topText: '',
        bottomText: '',
        randomImage: ''
    });

    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    // Create function that would return a random image from the memesData.js
    function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        const randomMeme = Math.floor(Math.random() * memesArray.length)
        setMeme(prevState => {
            return {
                ...prevState,
                randomImage: memesArray[randomMeme].url
            }
        })
    }
    return (
        <main>
            <div className='Form'>
                <input className='form-input' type='text' placeholder='Line 1'/>
                <input className='form-input' type='text' placeholder='Line 2'/>
                <button className='form-button' onClick={getMemeImage}> Generate Meme </button>
            </div>
            <img className='meme-image' src={meme.randomImage} />
        </main>
    )
}

export default Form