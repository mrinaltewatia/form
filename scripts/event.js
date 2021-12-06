document.querySelector('#fName').addEventListener("blur", function() {
    if (orderInfo.fName.value !== "") {
        fNameError.textContent = "";
    }
});
document.querySelector('#lName').addEventListener("blur", function() {
    if (orderInfo.lName.value !== "") {
        lNameError.textContent = "";
    }
});
document.querySelector('#address').addEventListener("blur", function() {
    if (orderInfo.address.value !== "") {
        addressError.textContent = "";
    }
});
document.querySelector('#postal').addEventListener("blur", function() {
    if (orderInfo.postal.value !== "") {
        postalError.textContent = "";
    }
});