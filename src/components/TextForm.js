import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UPPERCASE!", "success");
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "success");
    }

    const handleCapitalize = () => {
        let newText = text.split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(" ");
        setText(newText);
        props.showAlert("Converted to Capialize!", "success");
   }

    const handleCpyTxtClick = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard!", "success");
    }

    const handleRxsClick = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed from the provided text!", "success");
    }

    const handleClrClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Text box cleared!", "success");
    }

    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }


    const [text, setText] = useState('Enter text here');
    return (
        <>
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea class="form-control" value={text} onChange={handleOnChange} style={{color: props.mode==='light'?'#343a40':'white', backgroundColor: props.mode==='dark'?'#042743':'white'}} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLoClick}>Lowercase</button>
                <button className="btn btn-primary mx-1" onClick={handleCapitalize}>Capitalize</button>
                <button className="btn btn-primary mx-1" onClick={handleCpyTxtClick}>Copy Text</button>
                <button className="btn btn-primary mx-1" onClick={handleRxsClick}>Remove Extra Spaces</button>
                <button className="btn btn-primary mx-1" onClick={handleClrClick}>Clear Text</button>
                <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
            </div>
            <div className="container my-3">
                <p>Character count: {text.length} | Word count: {text.split(" ").length} | Sentence count: {text.split(".").length} | Line count: {text.split("\n").length}</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
            </div>
        </>
    )
}