import React from 'react';
import ReactDOM from 'react-dom';
class EmployeeComponent extends React.Component{
  constructor(props){
    super(props);
    this.state={
      employee:{
        Id:'',
        Name: '',
        Location:'',
        Postalcode: '',
        Expdate: '',
        Salary:''
      }
     
    };
  }
  changeHandler=e=>{
    const name=e.target.name;
    const value=e.target.value;

    this.setState({employee:{
      ...this.state.employee,
      [name]:value
    }});
  }

  onCreateEmployee=()=>{
    console.log(this.state.employee);
  }

  render(){
    return(
      <div>
        <h2> Credit Card Form</h2>
      
      <form>
        <p>
          <label>Credit Card Number: <input type="integer" name="Id" 
              value={this.state.employee.Id} onChange={this.changeHandler}></input> </label>
        </p>
        <p>
          <label>Card Holder Name: <input type="text" name="Name" 
              value={this.state.employee.Name} onChange={this.changeHandler}></input> </label>
        </p>
        <p>
          <label>Card type: <input type="text" name="Location" 
              value={this.state.employee.Location} onChange={this.changeHandler}></input> </label>
        </p>
        <p>
          <label>Expiration Date: <input type="text" name="Postalcode" 
              value={this.state.employee.Postalcode} onChange={this.changeHandler}></input> </label>
        </p>
        <p>
          <label>Security Code: <input type="text" name="Expdate" 
              value={this.state.employee.Expdate} onChange={this.changeHandler}></input> </label>
        </p>
        <p>
          <label>Postal Code: <input type="text" name="Salary" 
              value={this.state.employee.Salary} onChange={this.changeHandler}></input> </label>
        </p>
      </form>
      <button onClick={this.onCreateEmployee}>Submit</button>
    </div>
    )
  }
}
const element=<EmployeeComponent></EmployeeComponent>

ReactDOM.render(element,document.getElementById("root"));