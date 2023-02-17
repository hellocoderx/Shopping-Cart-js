//function 
function updateCaseNamber(isIncrese) {
    const caseNamberField = document.getElementById('case-number-field');
    const caseNamberString = caseNamberField.value;
    const previceusCaseNamber = parseInt(caseNamberString);

    // const newCaseNamber = previceusCaseNamber + 1;
    // caseNamberField.value = newCaseNamber;

    let newCaseNamber;
    if (isIncrese === true) {
        newCaseNamber = previceusCaseNamber + 1;
    } else {
        newCaseNamber = previceusCaseNamber - 1;
    }
    caseNamberField.value = newCaseNamber;

    return newCaseNamber;

}

function updateCaseTotal(newCaseNamber) {
    const caseTotalPrice = newCaseNamber * 59;
    const caseTotalElement = document.getElementById('case-total');
    caseTotalElement.innerText = caseTotalPrice;

}

document.getElementById('btn-case-plus').addEventListener('click', function() {
    const newCaseNamber = updateCaseNamber(true);

    updateCaseTotal(newCaseNamber);
    calculateSubTotal();

})

document.getElementById('btn-case-minus').addEventListener('click', function() {
    const newCaseNamber = updateCaseNamber(false);
    updateCaseTotal(newCaseNamber);
    calculateSubTotal();
})



//step 2
// 2 tar kaj same



// document.getElementById('btn-case-plus').addEventListener('click', function() {
//     const caseNamberField = document.getElementById('case-number-field');
//     const caseNamberString = caseNamberField.value;
//     const previceusCaseNamber = parseInt(caseNamberString);

//     const newCaseNamber = previceusCaseNamber + 1;
//     caseNamberField.value = newCaseNamber;

// })

// document.getElementById('btn-case-minus').addEventListener('click', function() {
//     const caseMinusField = document.getElementById('case-number-field');
//     const caseMinusString = caseMinusField.value;
//     const previceusMinusField = parseInt(caseMinusString);

//     const newCaseMinus = previceusMinusField - 1;
//     caseMinusField.value = newCaseMinus;
// })