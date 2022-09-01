
function getValueById(elementId){
    const inputField = document.getElementById(elementId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    return inputFieldValue;
    
}

document.getElementById('btn-calculate').addEventListener('click', function(){
    // total income
    const incomeAmount = getValueById('income-field');
     // total expenses
    const foodExpense = getValueById('food-expense');
    const rentExpense = getValueById('rent-expense');
    const clothesExpense = getValueById('clothes-expense');
    const totalExpenses = foodExpense + rentExpense + clothesExpense;

    const totalExpensesValue = document.getElementById('total-expenses');
    const getValueByString = totalExpensesValue.innerText;
    const getValueByExpense = parseFloat(getValueByString);
    totalExpensesValue.innerText = totalExpenses;
    // calculation
    // const balanceRemainingAmount = incomeAmount - totalExpenses;
    


})