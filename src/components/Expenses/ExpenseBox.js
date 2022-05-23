import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./ExpenseBox.css";
import "./ExpensesFilter";
import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from 'react';
const ExpenseBox = (props) => {
  const [selectedYear, setSelectedYear] = useState("2020");
  const onSelectHandler = (userSelectedYear) => {
    setSelectedYear(userSelectedYear);
  }

  console.log("the proped year is " + selectedYear)

  return (
    <div>
      <Card className="expenses">
      <ExpensesFilter selected={selectedYear} onSelect={onSelectHandler}/>
        <ExpenseItem
          title={props.expenseArray[0].title}
          date={props.expenseArray[0].date}
          amount={props.expenseArray[0].amount}
        />
        <ExpenseItem
          title={props.expenseArray[1].title}
          date={props.expenseArray[1].date}
          amount={props.expenseArray[1].amount}
        />
        <ExpenseItem
          title={props.expenseArray[2].title}
          date={props.expenseArray[2].date}
          amount={props.expenseArray[2].amount}
        />
        <ExpenseItem
          title={props.expenseArray[3].title}
          date={props.expenseArray[3].date}
          amount={props.expenseArray[3].amount}
        />
      </Card>
    </div>
  );
};

export default ExpenseBox;
