import React, {useState} from 'react';


export default function Textform(props)
{
    const[text, setText] = useState('')

    const HeadingStyle = {
        fontWeight:"bold"
    }
    
    const Uppercase =()=>
    {
        let UppercaseText = text.toUpperCase();
        setText(UppercaseText);
    }

    const Lowercase =()=>
    {
        let LowercaseText = text.toLowerCase();
        setText(LowercaseText);
    }

    const ClearText =()=>
    {
        setText('')
    }

    const handleOnChange= (event)=>
    {
        setText(event.target.value);
    }

    
    return(
    <>
        <div className="mb-3">
            <h3 htmlFor="myBox" style={HeadingStyle} className="form-label">{props.heading}</h3>
            <textarea className="form-control" id="myBox" rows="9" value={text} onChange={handleOnChange}/>
            <br />
            <button type="button" className="btn btn-primary btn-lg " onClick={Uppercase}>Convert to Uppercase</button>
            <button type="button" className="btn btn-primary btn-lg mx-4 " onClick={Lowercase}>Convert to Lowercase</button>
            <button type="button" className="btn btn-primary btn-lg mx-8 " onClick={ClearText}>Clear Text</button>
            <br />
            <br />
            <h2>Text Summary</h2>
            <p>{text.split(" ").length} words, {text.length} characters</p>
        </div>
    </>
    );
}