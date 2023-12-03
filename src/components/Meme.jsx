import React from 'react'
import memesData from "../memesData"


function Meme() {
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
                randomImage: memesArray[randomMeme].url,
            }
        })
    }

    console.log(meme.topText, meme.bottomText)
    
    // Add a handler function to change the values of topText and bottomText
    function formHandle(event) {
        const {name, value} = event.target
        setMeme(prevState => ({
            ...prevState,
            [name]: value
        }))
    }
    return (
        <main>
            <div className='Form'>
                <input className='form-input' type='text' placeholder='Line 1' onChange={formHandle} value={meme.topText} name ='topText'/>
                <input className='form-input' type='text' placeholder='Line 2' onChange={formHandle} value={meme.bottomText} name='bottomText'/>
                <button className='form-button' onClick={getMemeImage}> Generate Meme </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme-image" />
                <h2 className="meme-text top">{meme.topText}</h2>
                <h2 className="meme-text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}

export default Meme