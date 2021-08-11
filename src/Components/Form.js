import React from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const Form = (props) => {
  return (
    <div className="FormMian-div">
      <div className="inputDiv">
        <div>
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            value={props.name}
            name="name"
            onChange={(e) => props.handleChange(e,"name")}
          />
        </div>
        <div>
          <TextField
            id="outlined-basic"
            label="Number"
            variant="outlined"
            value={props.number}
            name="number"
            onChange={(e) => props.handleChange(e,"number")}
          />
        </div>
        <div>
          <TextField
            id="outlined-basic"
            label="Amount"
            variant="outlined"
            value={props.amount}
            name="amount"
            onChange={(e) => props.handleChange(e,"amount")}
          />
        </div>
      </div>
      <div className="ButtonDiv">
        <Button variant="contained" color="primary" onClick={() => props.handleSubmit()}>
          Submit
        </Button>
      </div>
    </div>
  );
}

export default Form;