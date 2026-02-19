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
        alert("Invalid amount");
        return;
    }

    const pin = getValueFromInput("payBill-pin");
    if (pin === '1234') {
        alert(`Pay Bill paied successfull from ${payBillNumber} at ${new Date()}`);
        setBalance(newBalance);

        const history =document.getElementById("history");
        const newHistory =document.createElement("div");
        newHistory.innerHTML=`
        Pay bill paied successfull from ${payBillSelect}, acc-no ${payBillNumber} at ${new Date()}
        `;
        history.append(newHistory);
    }else{
        alert("Invalid pin number.");
        return;
    }


})