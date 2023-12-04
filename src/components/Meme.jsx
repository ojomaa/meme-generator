import React from 'react'
import memesData from "../memesData"


function Meme() {

    // Create state for the meme
    const [meme, setMeme] = React.useState({
        topText: '',
        bottomText: '',
        randomImage: ''
    });

    // State for the API images
    const [allMemes, setAllMemes] = React.useState([])

    // Fetch the images from API
    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemes(data))
    }, [])

    // Create function that would return a random image from the API
    function getMemeImage() {
        const memesArray = allMemes.data.memes
        const randomMeme = Math.floor(Math.random() * memesArray.length)
        setMeme(prevState => {
            return {
                ...prevState,
                randomImage: memesArray[randomMeme].url,
            }
        })
    }

    
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