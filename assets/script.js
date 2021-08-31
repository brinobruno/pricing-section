const togglePrice = () => {
    var toggleP = document.getElementById("flexSwitchCheckChecked")
    var priceOne = document.querySelector('#price-1')
    var priceTwo = document.querySelector('#price-2')
    var priceThree = document.querySelector('#price-3')

    if (toggleP.checked === true) {
        priceOne.innerHTML = '$19.99'
        priceTwo.innerHTML = '$24.99'
        priceThree.innerHTML = '$39.99'
    } else {
        priceOne.innerHTML = '$11.99'
        priceTwo.innerHTML = '$14.99'
        priceThree.innerHTML = '$24.99'
    }
}