document.getElementById('add-money-btn').addEventListener('click', function () {
    const bankAccount = getValueFromInput("add-money-bank");
    if (bankAccount == "Select Bank") {
        alert("Please select a bank.");
        return;
    }

    const accountNumber = getValueFromInput("add-money-number");
    if (accountNumber.length !== 11 || isNaN(accountNumber)) {
        alert("Enter 11 digit valid account number.");
        return;
    }

    const amount = getValueFromInput("add-money-amount");
    const currentBalance = getBalance();
    const newBalance = currentBalance + Number(amount);
    if (amount < 500) {
        alert("Enter valid amount");
        return;
    }

    const pin = getValueFromInput("add-money-pin");
    if (pin === '1234') {
        alert(`Add money successful from ${bankAccount} at ${new Date()}`);
        setBalance(newBalance);
        // adding transictions history to history section 
        const history = document.getElementById("history-container");

        const newHistory = document.createElement("div");

        newHistory.innerHTML = `
         <div class="transictions-card bg-base-100 p-5">
   Add money successful from ${bankAccount}, acc-no ${accountNumber} at ${new Date()}
                </div>
         `;
        history.append(newHistory);

    } else {
        alert("Invalid pin.");
        return;
    }
})