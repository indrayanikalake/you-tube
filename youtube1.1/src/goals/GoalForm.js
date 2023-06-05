import  {useState} from "react";
import './abc.css'
const GoalForm = (props) => {
  const [userInput, setUserInput]=useState({
    text:''
  });
  const [isValid, setIsValid]=useState(true);

  const textChangeHandler=(event)=>{
    if(event.target.value.length>0)setIsValid(true);
    setUserInput((prevState)=>{
        return {...prevState,text:event.target.value};

    })
  }
 

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredValue = {
      text: userInput.text,
    };
    console.log(enteredValue.text);
    if(enteredValue.text===''){
      setIsValid(false);
      return;
    }
    else{ props.onSave(enteredValue);
    
    }
   
    //setEnterdValue(enteredValue);
    setUserInput({
      text: '',
    });
  };

  return(
    <div >
 <form onSubmit={submitHandler} className="abc" >
        <div className={`text-form ${!isValid?'invalid':''}`}>
            <label>Goal text </label><br></br>
            <input
            type="text"
            id="text"
            value={userInput.text}
            onChange={textChangeHandler}/>

        </div>
        <button className={`btn ${!isValid?'invalid':''}`} type="submit" >Add Goal</button>
    
     

    </form>
      {/* Display the entered details */}
    {/*{enteredValue && (
     <div>
        <p>Entered Title: {enteredValue.text}</p>
      </div>
    )}*/}
    </div>
   
  )
}

export default GoalForm;
