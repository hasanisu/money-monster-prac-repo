
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
    
    const totalIncomeValue = incomeAmount - totalExpenses;
    const totalBalance = document.getElementById('total-balance');
    const totalBalanceValueString = totalBalance.innerText;
    const totalBalanceValue = parseFloat(totalBalanceValueString);
    totalBalance.innerText = totalIncomeValue; 

})

document.getElementById('btn-save').addEventListener('click', function(){
    const incomeAmount = getValueById('income-field');
    
    // percentage area
    const percentageArea = document.getElementById('pecentage-area');
    const percentageAreaValueString = percentageArea.value;
    const percentageAreaValue = parseFloat(percentageAreaValueString);
    
    const totalSaving = incomeAmount * percentageAreaValue;
    // saving area
    const savingArea = document.getElementById('total-saving');
    const savingAreaTotalString = savingArea.innerText;
    const savingAreaTotal = parseFloat(savingAreaTotalString);
    savingArea.innerText = totalSaving;

    // function fot balance start  

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
    
    const totalIncomeValue = incomeAmount - totalExpenses;

    const totalBalance = document.getElementById('total-balance');
    const totalBalanceValueString = totalBalance.innerText;
    const totalBalanceValue = parseFloat(totalBalanceValueString);
    totalBalance.innerText = totalIncomeValue; 

    // function fot balance end


    const remainingBalanceLumsum = totalBalanceValue - totalSaving;


    const remainingTotal = document.getElementById('remaining-total');
    const remainingValueString = remainingTotal.innerText;
    const remainingValue = parseFloat(remainingValueString);
    remainingTotal.innerText = remainingBalanceLumsum; 
    
})