import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick=() =>{
    //console.log("Uppercase was clicked :" +text)
let newText=text.toUpperCase();
    setText(newText)
  }
  const handleLoClick=() =>{
    let newText=text.toLowerCase();
    setText(newText)
  }
  const handleOnChange=(event) =>{
    //console.log("On Change");
    setText(event.target.value);
    }
    const handleCopy=() =>{
      var text=document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);

    }
    const handleExtraSpace=() =>{
      let newText=text.split(/[ 6]+/);
      setText(newText.join(" "));
    }
  const [text, setText] = useState("");

  return (
    <>
<div className="container" style={{color:props.mode ==='dark'?'white':'#08323B'}}>
    <h1>{props.heading} </h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'gray':'white', color:props.mode ==='dark'?'white':'#08323B'}}id="myBox" rows="8"></textarea>

</div>
<button className="btn btn-primary mx-3" onClick={handleUpClick}>Convert to Uppercase</button>
    
<button className="btn btn-primary" onClick={handleLoClick}>Convert to Lowercase</button>
<button className='btn btn-primary mx-3' onClick={handleCopy}>text copy</button>
<button className='btn btn-primary mx-3' onClick={handleExtraSpace}>Remove ExtraSpace</button>
</div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#08323B'}}>
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length}minutes read</p>
      <h2>preview</h2>
      <p>{text.length>0?text:"Enter something in the textabove to preview here"}</p>
    </div>
  </>
  )
}
