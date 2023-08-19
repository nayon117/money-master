let sum1 = 0;
let sum2 = 0;
let sum3 = 0;
let incomeValue = 0;

// <======== utilities function =======> 
function getInputValue(inputId) {
    const itemField = document.getElementById(inputId);
    const inputValueText = itemField.value.trim();
    if (inputValueText === '') {
        return 0;
    }
    const inputValue = parseFloat(inputValueText);
    if (isNaN(inputValue)) {
        return 0;
    }
    itemField.value = "";
    return  inputValue;
}

// <==== set text content ====> 

function totalExpense(expenseId,newValue) {
    const expense = document.getElementById(expenseId);
    expense.innerText = newValue;
}

// <======= calculation operation =======> 
document.getElementById("calculate-btn").addEventListener("click", function () {
    
    const food = getInputValue("food-field");
    sum1 += food;
    const rent = getInputValue("rent-field");
    sum2 += rent;
    const clothes = getInputValue("clothes-field");
    sum3 += clothes;

    const totalExpenses = sum1 + sum2 + sum3;
    totalExpense("total-expense", totalExpenses)
    
    const incomeField = getInputValue("income-field");
    incomeValue = incomeField - totalExpenses;
    totalExpense("current-balance", incomeValue);

    const save = (incomeField * 20) / 100;
    totalExpense("saving-amount", save);

    const remainingBalance = incomeValue - save;
    totalExpense("remaining-balnace", remainingBalance);
})


 






 