import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseList from "./ExpenseList";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2023");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredYearValue = (year) => {
    return year.date.getFullYear().toString() === filteredYear;
  };

  const filteredExpenses = props.items.filter(filteredYearValue);

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        ></ExpenseFilter>

        <ExpensesChart expenses={filteredExpenses}></ExpensesChart>

        <ExpenseList items={filteredExpenses}></ExpenseList>

        
      </Card>
    </div>
  );
}

export default Expenses;
