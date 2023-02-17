function getTextElementValueById(elementId) {
    //calculate Total 
    const phoneTotalElement = document.getElementById(elementId);
    const crruntPhoneTotalString = phoneTotalElement.innerText;
    const crruntPhoneTotal = parseInt(crruntPhoneTotalString);
    return crruntPhoneTotal;
}

function setTextElementValueById(elementId, value) {
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}

function calculateSubTotal() {
    //calculate Total 
    const crruntPhoneTotal = getTextElementValueById('phone-total');
    const crruntCaseTotoal = getTextElementValueById('case-total');

    const crruntSubTotal = crruntPhoneTotal + crruntCaseTotoal;

    setTextElementValueById('case-sub-total', crruntSubTotal);
    //calculate Tax
    const taxAmount = (crruntSubTotal * 0.1).toFixed(2);
    const taxAmountFolot = parseFloat(taxAmount);
    setTextElementValueById('tax-total', taxAmount);

    const fainalAmaount = crruntSubTotal + taxAmount;
    setTextElementValueById('final-total', fainalAmaount);
}