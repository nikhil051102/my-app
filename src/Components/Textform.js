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

    const [myStyle, setMyStyle] = useState(
        {
            color:"black",
            backgroundColor:"white"
        }
    )

    const toggleMode =()=>{
        if(myStyle.color == "black")
        {
            setMyStyle(
                {
                    color:"white",
                    backgroundColor:"black"
                }
            )
        }
        else
        {
            setMyStyle(
                {
                    color:"black",
                    backgroundColor:"white"
                }
            )
        }
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
        <div className="accordion" id="accordionExample" style={myStyle}>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header" id="headingOne">
                <button style={myStyle} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Accordion Item #1
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header" id="headingTwo">
                <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Accordion Item #2
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header" id="headingThree">
                <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Accordion Item #3
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            <div className="form-check form-switch mx-5">
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={toggleMode}/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >Mode</label>
            </div>
        </div>
    </>
    );
}