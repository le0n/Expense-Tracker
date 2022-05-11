import ExpenseItem from "./ExpenseItem";
import "./ExpenseBox.css"
const ExpenseBox = (props) => {
  return (
    <div className="expenses">
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
    </div>
  );
};

export default ExpenseBox;
