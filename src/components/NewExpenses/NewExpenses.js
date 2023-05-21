import React, { useState } from "react";
import "./NewExpenses.css";
import ExpenseForm from "./ExpenseForm";

function NewExpenses(props) {
  const [isAdding, setIsAdding] = useState(false);
  const addNewClickHandler = () => {
    setIsAdding(true);
  };

  const cancelHandler = () => {
    setIsAdding(false);
  };

  let addContent = (
    <button onClick={addNewClickHandler}>Add New Expense</button>
  );

  const expenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
    setIsAdding(false);
  };

  if (isAdding) {
    addContent = (
      <ExpenseForm
        onSaveExpenseData={expenseDataHandler}
        onCancelClickHandler={cancelHandler}
      ></ExpenseForm>
    );
  }

  return <div className="new-expense">{addContent}</div>;
}

export default NewExpenses;
