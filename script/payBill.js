document.getElementById("payBill-btn").addEventListener("click", function () {

    const payBillSelect = getValueFromInput("payBill-select");
    if (payBillSelect === 'Select pay') {
        alert("Please select a pay");
        return;
    }

    const payBillNumber = getValueFromInput("payBill-number");
    if (payBillNumber.length !== 11 || isNaN(payBillNumber)) {
        alert("Pay account number must be 11 digit and must be number");
        return;
    }

    const payBillAmount = getValueFromInput("payBill-amount");
    const currentBalance = getBalance();
    const newBalance = currentBalance - Number(payBillAmount);
    if (payBillAmount > currentBalance) {
        alert("Insufficient Balance");
        return;
    }

    const pin = getValueFromInput("payBill-pin");
    if (pin === '1234') {
        alert(`Pay Bill paid successfully from ${payBillNumber} at ${new Date()}`);
        setBalance(newBalance);

        const history = document.getElementById("history-container");
        const newHistory = document.createElement("div");
        newHistory.innerHTML=`
        <div class="transictions-card bg-base-100 p-5">
Pay bill paid successfully from ${payBillSelect}, acc-no ${payBillNumber} at ${new Date()}
        </div>
        `;
        history.append(newHistory);
        
        // Clear form
        document.getElementById('payBill-select').value = 'Select pay';
        document.getElementById('payBill-number').value = '';
        document.getElementById('payBill-amount').value = '';
        document.getElementById('payBill-pin').value = '';
    }else{
        alert("Invalid pin number.");
        return;
    }


})