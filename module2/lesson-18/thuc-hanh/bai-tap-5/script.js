//PHONE LIST
let arrOfPhones = ["Sony Xperia", "Samsung Galaxy", "Nokia 6", "Xiaomi Redmi Note 4", "Apple Iphone 6S","Xiaomi Mi 5s Plus", "Apple Iphone 8 Plus", "Fujitsu F-04E", "Oppo A71"];
let id = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let amount = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let price = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//FUNCTIONS
/**
 * Creates a product item HTML string.
 * @param {string} name - The name of the product.
 * @returns {string} The HTML string for the product item.
 */
function createProductItem(name, id, number, amount, price) {
    return `<div class="product__item">
                <span class="product__id">${id}</span>
                <span class="product__name">${name}</span>
                <span class="product__number">${number}</span>
                <span class="product__amount">${amount}</span>
                <span class="product__price">${price}</span>
                <div class="product__buttons">
                    <button class="product__button product__button--edit">Edit</button>
                    <button class="product__button product__button--delete">Delete</button>
                </div>
            </div>`
}

/**
 * Deletes a product item from the list.
 * @param e - The event object.
 */
function deleteProductItem(e) {
    const productItem = e.target.closest(".product__item");
    const productName = productItem.querySelector(".product__name").textContent;
    // Find the index of the product name in the array
    const index = arrOfPhones.indexOf(productName);
    // If the product name is found, remove it from the array
    if (index !== -1) {
        arrOfPhones.splice(index, 1);
    }
    e.target.closest(".product__item").remove();
    console.log("Delete product item");
}

/**
 * Edits a product item in the list.
 * @param e - The event object.
 */
function editProductItem(e) {
    // Get the product item element
    const productItem = e.target.closest(".product__item");
    // Get the name span element
    const nameSpan = productItem.querySelector(".product__name");
    // Get the current name
    const currentName = nameSpan.textContent;
    // Prompt the user for a new name
    const newName = prompt("Enter new name:", currentName);
    // If the user entered a new name, update the product item
    if (newName) {
        // Convert the new name to lowercase and compare it with the existing products
        const lowerCaseNewName = newName.trim().toLowerCase();
        const lowerCaseArrOfPhones = arrOfPhones.map(phone => phone.toLowerCase());
        // Check if the new name already exists in the array (case-insensitive)
        if (lowerCaseArrOfPhones.includes(lowerCaseNewName)) {
            alert("Product already exists!");
            return;
        }
        // Find the index of the current name in the array and update it
        const index = arrOfPhones.indexOf(currentName);
        if (index !== -1) {
            arrOfPhones[index] = newName;
        }
        nameSpan.textContent = newName;
        console.log("Edit product item");
    }
}

function addProductItem() {
    // Get the new product name from the input field
    const newProductName = document.querySelector(".product__input").value;
    const newProductId = document.querySelector(".product__input-id").value;
    const newProductNumber = document.querySelector(".product__input-number").value;
    const newProductAmount = document.querySelector(".product__input-amount").value;
    const newProductPrice = document.querySelector(".product__input-price").value;
    // Check if the input is not empty
    if (newProductName) {
        // Convert the new product name to lowercase and compare it with the existing products
        const lowerCaseProductName = newProductName.trim().toLowerCase();
        const lowerCaseArrOfPhones = arrOfPhones.map(phone => phone.toLowerCase());
        if (lowerCaseArrOfPhones.includes(lowerCaseProductName)) {
            alert("Product already exists!");
            return;
        }
        // Add the new product to the array
        arrOfPhones.push(newProductName);
        id.push(newProductId);
        number.push(newProductNumber);
        amount.push(newProductAmount);
        price.push(newProductPrice);
        // Create and append new product element
        const productList = document.querySelector(".product__list");
        productList.innerHTML += createProductItem(newProductName, newProductId, newProductNumber, newProductAmount, newProductPrice);
        // Clear the input field
        document.querySelector(".product__input").value = "";
    }
}

//EVENTS
document.addEventListener("DOMContentLoaded", function () {
    // Render the product list
    const productList = document.querySelector(".product__list");
    arrOfPhones.forEach(function (phone) {
        productList.innerHTML += createProductItem(phone, id[arrOfPhones.indexOf(phone)], number[arrOfPhones.indexOf(phone)], amount[arrOfPhones.indexOf(phone)], price[arrOfPhones.indexOf(phone)]);
    });
    // Add event listener for the delete button
    /**
    Instead of selecting all buttons manually, we add a single event listener to .product__list and check if the clicked button has product__button--delete.
    This ensures that newly added products also have the delete functionality.
     */
    /**
     * Instead of adding event listeners to each button, we add one listener to the .product__list (the parent container).
     *
     * When any button inside .product__list is clicked, we check if it’s a "delete" button and remove the corresponding product.
     * Only one event listener is attached (on .product__list) → Better performance.
     * Works for both existing and newly added items → No need to reattach listeners.
     * Less code, more efficiency → Cleaner and easier to maintain.
     */
    productList.addEventListener("click", function (e) {
        // Check if the clicked element is a delete button
        // If it is, call the deleteProductItem function
        // to remove the product item
        if (e.target.classList.contains("product__button--delete")) {
            deleteProductItem(e);
        } else if (e.target.classList.contains("product__button--edit")) {
            editProductItem(e);
        }
    })
    // Add event listener for the add button
    const addButton = document.querySelector(".product__button--add");
    addButton.addEventListener("click", function () {
        addProductItem();
    });
});
