import React, {useState} from 'react'
export default function TextInput(props) {

const handleUp = ()=>{
console.log("Caps Clicked");
let newText = text.toUpperCase();
setText(newText);
}

const handleDown =()=>{
  console.log("Small Clicked");
  let newText2 = text.toLowerCase();
  setText(newText2);
}



const handleChange=(event)=>{
console.log("Typing");
setText(event.target.value);
}


const  [text , setText] = useState('');

return (
<div>
<div className="mb-3">
<label for="myheading" className="form-head"><h4>{props.heading}</h4></label>

</div>
<div className="mb-3">
<label for="content" className="form-body">Write something</label>
<textarea className="form-control" value={text} placeholder='type here' onChange={handleChange} id="content" rows="6" ></textarea>
</div>

<button className="btn btn-danger mx-5" onClick={handleUp} >Turn to Caps</button>
<button className="btn btn-primary  mx-5" onClick={handleDown} >Turn to Small</button>


<div className="containerA">
<p> {text.split(" ").length} Words {text.length} Letters</p></div>
</div>
)
}
