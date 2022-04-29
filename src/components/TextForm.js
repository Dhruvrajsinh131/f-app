import React , {useState } from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props) {

  const handleUpClick = ()=>{
    // console.log('uppercase was clicked')
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted into Uppercase!","success");
  }
  const handleLoClick = ()=>{
    // console.log('lowercase was clicked')
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted into Lowercase!","success");
  }
  
  const handleClearClick = ()=>{
    // console.log('lowercase was clicked')
    setText("");
    props.showAlert("TextArea is Cleared !","success");
  }

  const handleCopy = ()=>{
      var text =document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Text Copied !","success");
  }
  const handleExtraSpaces = ()=>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Extra Spaces Are Removed !","success");
  }
  
  const handleTitleCaseClick = ()=>{

    function titleCase(text) {
      text = text.toLowerCase().split(' ');
      for (var i = 0; i < text.length; i++) {
        text[i] = text[i].charAt(0).toUpperCase() + text[i].slice(1); 
      }
      return text.join(' ');
      
    }
    let newText = text
    setText(titleCase(newText));
    props.showAlert("Text Converted into the TitleCase !","success");
  }

  const handleOnChange = (event)=>{
    // console.log("On change");
    setText(event.target.value)
  }
  

  const [text, setText] = useState('');
  return (

    <>
    <div className='container'>
      <h1>{props.heading}</h1>
      <div className="mb-3">
      <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'white':'grey',color:props.mode==='light'?'black':'white'}} id="myBox" rows="8" placeholder='Enter Your Text Here '></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To Uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert To Lowercase</button>
      <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
      <button className="btn btn-primary mx-2" onClick={handleTitleCaseClick}>Convert To TitleCase</button>
      <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-2">
      <h1>Your Text Summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.08 * text.split(" ").length} Minutes to Read</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Enter Text to Preview Here...."}</p>
    </div>
  </>
  )
}

TextForm.propTypes = {
    heading: PropTypes.string
}

TextForm.defaultProps = {
    heading: "Enter your heading here"
}
