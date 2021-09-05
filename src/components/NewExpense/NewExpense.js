import React, {useState} from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

function NewExpense(props){

    const [isEditing, setIsEditing] = useState(false);

    function saveFormData(enteredExpenseData){
        const expenseData = {
            ...enteredExpenseData,
            id : Math.random.toString()
        }
        props.onAddExpense(expenseData);
        stopEditingHandler(true); 
    }

    function startEditingHandler(){
        setIsEditing(true);
    }

    function stopEditingHandler(){
        setIsEditing(false);
    }

    return(
        <div className = 'new-expense'>
            {!isEditing && <button onClick = {startEditingHandler}>Add New Expense</button>}
            {isEditing && <ExpenseForm onFormData = {saveFormData} onCancel = {stopEditingHandler}></ExpenseForm>}
        </div>
    );

}
export default NewExpense;
