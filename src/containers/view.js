import './App.scss';
import React from "react";
import Form from "../Components/Form";
import TableComponent from "../Components/TableComponent";

class View extends React.Component {
  state = {
    name: "",
    number: "",
    amount: "",
    tableData: [],
    totalAmount: 60000,
  } 

  handleChange = (e, name) => {
    this.setState({[name]: e.target.value})
  }

  columns = [
    {
      Header: "Name",
      accessor: "name", 

    },
    {
      Header: "Number",
      accessor: "number", 
    },
    {
      Header: "Amount",
      accessor: "amount", 
    },
    {
      Header: "Date",
      accessor: "date", 
    }
  ]

  handleSubmit = async() => {
    const amount = parseInt(this.state.amount);
    let totalAmount = this.state.totalAmount;
    totalAmount = totalAmount - amount;
    const tableData = this.state.tableData.length ? this.state.tableData : [];
    tableData.push({
      name: this.state.name,
      number: this.state.number,
      amount: amount,
      date: new Date().toISOString(),
    })
    await this.setState({
      totalAmount: totalAmount, 
      tableData: tableData,
      name: '',
      number: '',
      amount: "",
    })
  }
  
  render () {
    return (
      <div className="App">
        <div className="heading">Form</div>
        <Form 
          name={this.state.name}
          number={this.state.number}
          amount={this.state.amount}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />

        <div className="heading">List Of Transactions</div>

        <div>
      <TableComponent
      data={this.state.tableData}
      columns={this.columns}
       />
        </div>
      </div>
    );
  }
}

export default View;
