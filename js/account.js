document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-field');
    const depositAmountValue = parseFloat(depositField.value);

    const depositAmountField = document.getElementById('deposit-amount-field');
    const depositAmount = parseFloat(depositAmountField.innerText);

    const newDepositAmount = depositAmountValue + depositAmount;

    depositAmountField.innerText = newDepositAmount;

    depositField.value = '';

    const balanceAmountField = document.getElementById('balance-amount-field');

    const balanceAmount = parseFloat(balanceAmountField.innerText);

    const totalNewBalance = depositAmountValue + balanceAmount;

    balanceAmountField.innerText = totalNewBalance;
});

document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field');

    const withdrawFieldValue = parseFloat(withdrawField.value);

    const balanceAmountField = document.getElementById('balance-amount-field');

    const balanceAmount = parseFloat(balanceAmountField.innerText);

    if ((withdrawFieldValue <= balanceAmount) && ( withdrawFieldValue > 0)) {
        const withdrawNewBalance = balanceAmount - withdrawFieldValue;

        balanceAmountField.innerText = withdrawNewBalance;
    }
    else {
        
        alert("You can not withdraw because amount is over current balance");
    }

    const showWithdraw = document.getElementById('show-withdraw');

    const showWithdrawAmount = parseFloat(showWithdraw.innerText);
    
    const newNewWithdrawAmount = showWithdrawAmount + withdrawFieldValue;

    showWithdraw.innerText = newNewWithdrawAmount;

    withdrawField.value = '';
});