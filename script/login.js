document.getElementById('login-btn').addEventListener('click', function () {
    const inputNumber = getValueFromInput("input-number");
    if (inputNumber.length !== 11 || isNaN(inputNumber)) {
        alert("Invalid account number");
        return;
    }

    const inputPin = getValueFromInput("input-pin");
    if (inputNumber === '01234567890' && inputPin === '1234') {
        alert('Login successful');
        document.getElementById('input-number').value = '';
        document.getElementById('input-pin').value = '';
        // to link home page 
        window.location.assign('./home.html');
    } else {
        alert('Login failed');
        return;
    }
});