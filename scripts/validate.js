var delivery = document.querySelector('#delivery');
var pickup = document.querySelector('#pickup');
var fName = document.querySelector('#fName');
var lName = document.querySelector('#lName');
var totalCost = document.querySelector('#totalCost');
var address = document.querySelector('#address');
var postal = document.querySelector('#postal');

/*
Returns the total value of items selected
 */
function getCheckedItemsValue() {
    let val = 0
        // get all object keys in an array
    const keys = Object.keys(window.itemsList)
        // loop through keys
    keys.forEach((key) => {
        const isChecked = document.querySelector(`#${key}`).checked
        if (isChecked) {
            val += window.itemsList[key].price
        }
    })
    return val
}

function validate(e) {
    e.preventDefault;
    getCheckedItemsValue()
        //creating boolean value for returning
        // If pickup or delivery arent checked/ pops an error
    var valid = true;
    if (pickup.checked == false || delivery.checked == false) {
        document.querySelector('#fieldsetError').textContent = "Select either of the options";
        valid = false;
    }
    // If pickup or delivery are checked/ removes the error
    if (pickup.checked !== false || delivery.checked !== false) {
        document.querySelector('#fieldsetError').textContent = "";
        valid = false;
    }

    // validates if pickup is checked and atleast first and last name is entered
    if ((pickup.checked !== false)) {
        valid = true;
    }

    // if the total cost of the items != 0 and  delivery or pickup NOT selected, then return false
    if (totalCost.textContent != 0.00 && delivery.value != "" || pickup.value != "") {
        // if either the first or last name are blank, dont submit
        if (fName.value == "" || lName.value == "") {
            if (fName.value == "") {
                //adding the errorspan messages
                document.querySelector('#fNameError').textContent = 'Please enter a first name';
            }
            if (lName.value == "") {
                document.querySelector('#lNameError').textContent = 'Please enter a last name';
            }
            valid = false;
        }

        //if the delivery option was selected
        if (delivery.checked == true) {
            //if no address, alert an error
            if (address.value == "") {
                document.querySelector('#addressError').textContent = 'Please enter an address';
            }
            //if no postal code, alert an error
            if (postal.value == "") {
                document.querySelector('#postalError').textContent = 'Please enter a postal code';
            }
            valid = false;
        }
        // if delivery is selected and all the required boxes are filled, form validates.
        if (delivery.checked == true) {
            if (fName.value != "" && lName.value !== "" && address.value !== "" && postal.value !== "") {
                valid = true;
            }
        }

        // if the pickup option was selected
        if (pickup.checked == true) {
            address.value = '';
            postal.value = '';
            document.querySelector('#addressError').textContent = '';
            document.querySelector('#postalError').textContent = '';
            document.querySelector('#addressError').textContent = '';
        }
    }
    if (valid) {
        alert("Success");
        return valid;
    } else {
        return false;
    }
}