import { useState, useEffect } from "react"


export default  function Main(){

const [meme, setMeme] = useState({
    topText: "One does not simply",
    bottomText: "Walk into Mordor",
    imgURL: "http://i.imgflip.com/1bij.jpg"
})

    const [imgArray, setImgArray] = useState({})
    
 //using useEffect to get data from the api and then storing it in setImgArray. and using an 
 //empty array as dependence
    useEffect(()=>{
        fetch(" https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setImgArray(data.data.memes))
        console.log(setImgArray)
    }, [])

    //function that gets random url from data
    function getMemeImg(){
        const randomNumber = Math.floor(Math.random() * setImgArray,length)
        const newMemeUrl = setImgArray[randomNumber].url
        setMeme(prevMeme=>({
            ...prevMeme, imgURL: newMemeUrl
        }))
    }

function handleChange(event){
    //this is a const that is getting the value and name from the input properties, which is the current target.
    const {value, name} = event.currentTarget
//name has to be the exact same in the input property as the state() we want to change. So we want to change to topText and bottomText, so name has to match those in the input
    setMeme(prevMeme =>{
        return {
            ...prevMeme,
            [name]: value 
        }
    })
}

    return(
        <main>
        <div className="form">
            <label>Top Text
                <input
                    type="text"
                    placeholder="One does not simply"
                    name="topText"
                    onChange = {handleChange}
                    //set as state, so it can dynamically update and render
                    value={meme.topText}
                />
            </label>

            <label>Bottom Text
                <input
                    type="text"
                    placeholder="Walk into Mordor"
                    name="bottomText"
                    onChange= {handleChange}
                    value={meme.bottomText}
                />
            </label>
            <button onClick={getMemeImg}>Get a new meme image 🖼</button>
        </div>
        <div className="meme">
            <img src={meme.imgURL}/>
            <span className="top">{meme.topText}</span>
            <span className="bottom">{meme.bottomText}</span>
        </div>
    </main>
    )
}