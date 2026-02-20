document.getElementById("transfer-btn").addEventListener("click", function () {
    const transferNumber = getValueFromInput("transfer-number");
    if (transferNumber.length !== 11 || isNaN(transferNumber)) {
        alert("Invalid account number");
        return;
    }

    const transferAmount = getValueFromInput("transfer-amount");
    const currentBalance = getBalance();
    const newBalance = currentBalance - Number(transferAmount)
    if (transferAmount < 500) {
        alert("Transfer 500 or more money");
        return;
    }
    
    if (newBalance < 0) {
        alert("Insufficient Balance");
        return;
    }

    const pin = getValueFromInput("transfer-pin");
    if(pin ==='1234'){
        alert(`Transfer money to ${transferNumber} at ${new Date()} `);
        setBalance(newBalance);

        // history 
        const history = document.getElementById("history-container");
        const newHistory = document.createElement("div");
        newHistory.innerHTML=`
        <div class="transictions-card bg-base-100 p-5">
Transfer money successful ${transferAmount} taka to ${transferNumber} at ${new Date()}
                </div>
        `;
        history.append(newHistory);
        
        // Clear form
        document.getElementById('transfer-number').value = '';
        document.getElementById('transfer-amount').value = '';
        document.getElementById('transfer-pin').value = '';
    }else{
        alert("Invalid pin");
        return;
    }

});