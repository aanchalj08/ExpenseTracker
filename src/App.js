import React,{useState} from 'react';
import Expenses from "./components/Expenses/Expenses";
import NewExpenses from "./components/NewExpenses/NewExpenses";


const DUMMY_EXPENSES = [
  { id: "e1", 
  title: "Foil Paper", 
  amount: 70, 
  date: new Date(2023, 5, 16) },

  { id: "e2",
   title: "New TV", 
   amount: 80000, 
   date: new Date(2023, 5, 18) },

  {
    id: "e3",
    title: "Car Insurance",
    amount: 2000,
    date: new Date(2023, 5, 18),
  },
  
  {
    id: "e4",
    title: "Laptop",
    amount: 50000,
    date: new Date(2022, 4, 15),
  },
];

function App() {
  

  const[expenses,setExpenses]=useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses(prevState=>{
      return [expense,...prevState];
    });
  };
  return (
    <div>
      <NewExpenses onAddExpense={addExpenseHandler}></NewExpenses>
      <Expenses items={expenses} />
      
    </div>
  );
}

export default App;
