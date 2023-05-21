import React from "react";
import ExpenseItem from "./ExpenseItem";
import './ExpenseList.css'

function ExpenseList(props){
let expenseContent=<p className="no-expense">No expenses found.</p>;

  if(props.items.length>0){
    expenseContent=props.items.map((x) => (
      <ExpenseItem
        key={x.id}
        title={x.title}
        amount={x.amount}
        date={x.date}
      ></ExpenseItem>
    ));
  }
    return(
        <div>
        {expenseContent}

        </div>

    );

}

export default ExpenseList;