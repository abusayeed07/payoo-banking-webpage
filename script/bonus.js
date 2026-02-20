document.getElementById("coupon-btn").addEventListener("click", function () {

    const couponCode = getValueFromInput("coupon-code");
    if (couponCode === "") {
        alert("Please enter a coupon code");
        return;
    }

    const validCode = {
        'BONUS50': 50,
        'WELCOME100': 100,
        'PAYOO25': 25,
        'SPECIAL200': 200
    };

    if (validCode.hasOwnProperty(couponCode)) {
        const currentBalance = getBalance();

        const bonusAmount = validCode[couponCode];
        const newBalance = currentBalance + bonusAmount;
        setBalance(newBalance);

        const history = document.getElementById("history-container");

        const newHistory = document.createElement("div");

        newHistory.innerHTML = `
         <div class="transictions-card bg-base-100 p-5">
        Success! You've received $${bonusAmount} bonus!
        </div>
         `;
        history.append(newHistory);
        alert(`Success! You've received $${bonusAmount} bonus!`);
        document.getElementById("coupon-code").value = "";
    } else {
        alert('Invalid coupon code. Try: BONUS50, WELCOME100, PAYOO25, or SPECIAL200');
    }
});

