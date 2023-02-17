function updatePhoneNumber(isIncress) {
    const phoneNumberField = document.getElementById('phone-number-field');
    const phoneNumbrString = phoneNumberField.value;
    const previceusPhoneNumber = parseInt(phoneNumbrString);

    let newPhoneNumber;
    if (isIncress) {
        newPhoneNumber = previceusPhoneNumber + 1;
    } else {
        newPhoneNumber = previceusPhoneNumber - 1;
    }


    phoneNumberField.value = newPhoneNumber;
    return newPhoneNumber;
}



function updatePhoneTotalPrice(newPhoneNumber) {
    const phoneTotalPrice = newPhoneNumber * 1219;
    const PhoneTotalElement = document.getElementById('phone-total');
    PhoneTotalElement.innerText = phoneTotalPrice;
}





document.getElementById('btn-phone-plus').addEventListener('click', function() {
    const newPhoneNumber = updatePhoneNumber(true);
    updatePhoneTotalPrice(newPhoneNumber);
    //calculate Total 
    calculateSubTotal();

})
document.getElementById('btn-phone-minus').addEventListener('click', function() {
    const newPhoneNumber = updatePhoneNumber(false);
    updatePhoneTotalPrice(newPhoneNumber);
    calculateSubTotal()
})