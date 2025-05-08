import { useState } from "react"

export default  function Main(){

const [meme, setMeme] = useState({
    topText: "One does not simply",
    bottomText: "Walk into Mordor",
    imgURL: "http://i.imgflip.com/1bij.jpg"
})


function handleChange(event){
    //this is a const that is getting the value a nd name from the input, which is the current target.
    const {value, name} = event.currentTarget

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
            <button>Get a new meme image 🖼</button>
        </div>
        <div className="meme">
            <img src={meme.imgURL}/>
            <span className="top">{meme.topText}</span>
            <span className="bottom">{meme.bottomText}</span>
        </div>
    </main>
    )
}