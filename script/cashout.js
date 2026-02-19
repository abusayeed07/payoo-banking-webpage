document.getElementById('cashout-btn').addEventListener('click', function () {
    //1- get the agent number & validate
    const cashoutNumber = getValueFromInput('cashout-number');
    if (cashoutNumber.length != 11 || isNaN(cashoutNumber)) {
        alert('Invalid agent number. Must be 11 digits.');
        return;
    }
    //2- get the amount , validate , convert to number
    const cashoutAmount = getValueFromInput('cashout-amount');
    //4- calculate the new balance
    const currentBalance = getBalance();
    const newBalance = currentBalance - Number(cashoutAmount);
    if (newBalance < 0) {
        alert('Invalid Amount');
        return;
    }
    //5- get the pin and verify
    const pin = getValueFromInput('cashout-pin');
    if (pin === '1234') {
        alert(`Cash Out successful from ${currentBalance} at ${new Date()}`);
        setBalance(newBalance);

        // adding transictions history to history section 
        const history = document.getElementById("history-container");

        const newHistory = document.createElement("div");

        newHistory.innerHTML = `
         <div class="transictions-card bg-base-100 p-5">
   Cash Out ${cashoutAmount} Taka successful to ${cashoutNumber} at ${new Date()}}
                </div>
         `;
        history.append(newHistory);


    } else {
        alert('Invalid Pin');
        return;
    }
});








