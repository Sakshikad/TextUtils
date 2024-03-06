import React, { useState } from 'react'


export default function TextForm(props) {
    const [text, setText] = useState("");


    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to uppercase','success');
    }
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Converted to lowercase','success');
    }
    const handleUpFirst = () => {
        let newText = text.charAt(0).toUpperCase()+ text.slice(1);
        setText(newText);
        props.showAlert('First letter is conveted to Uppercase','success');
    }
    const UpEachFirst = () => {
        let words=text.split(" ");
        let capitalizedWords = words.map((word) => { 
                return word.charAt(0).toUpperCase() + word.slice(1); 
            });
        
        let newText = capitalizedWords.join(" ");
        setText(newText);
        props.showAlert('First letter of each word is conveted to Uppercase','success');
    }
    const  handlereverse = () => {
        let newText = text.split("").reverse().join("");
        setText(newText);
        props.showAlert('Text is reverse','success')
    }
    const handleCopy= () => {
        var text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert('Text is copy','success');
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert('Extra spaces are removed','success');
    }
    const handleClear = () => {
        let newText = text.replace(text,"");
        setText(newText);
        props.showAlert('Text is clear','success');
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    

    return (
        <>
            <div className='container my-3' style={{color:props.mode==='dark'?'white':'black'}}>
                <h1>{props.heading}</h1>
                <div className="form-group">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'rgb(77 126 195)':'white',color:props.mode==='dark'?'white':'black'}} placeholder='Enter your Text' id="mybox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Uppercase</button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>Lowercase</button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleUpFirst}>First Char Uppercase</button>
                <button className="btn btn-primary mx-2 my-2" onClick={UpEachFirst}>First Char Each Word Uppercase</button>
                <button className="btn btn-primary mx-2 my-2" onClick={handlereverse}>Reverse Text</button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy</button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleClear}>Clear</button>

            </div>
            <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
                <h2>Text Summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:'Enter something in textbox to preview here'}</p>

            </div>
        </>
    )
}
