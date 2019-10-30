input.oninput = function() {
    if (input.value) {
        roboto.innerHTML = input.value;
        gayathri.innerHTML = input.value;
        chilanka.innerHTML = input.value;
        openSans.innerHTML = input.value;
        lato.innerHTML = input.value;
        manjari.innerHTML = input.value;
        montserrat.innerHTML = input.value;
        robotoCondensed.innerHTML = input.value;
    } else {
        roboto.innerHTML = "Then came the night of the first falling star";
        gayathri.innerHTML = "Then came the night of the first falling star";
        chilanka.innerHTML = "Then came the night of the first falling star";
        openSans.innerHTML = "Then came the night of the first falling star";
        lato.innerHTML = "Then came the night of the first falling star";
        manjari.innerHTML = "Then came the night of the first falling star";
        montserrat.innerHTML = "Then came the night of the first falling star";
        robotoCondensed.innerHTML = "Then came the night of the first falling star";
    }
};


function fontSize(selectSize) {
    let changeSize = selectSize.options[selectSize.selectedIndex].text;
    roboto.style.fontSize = changeSize;
    gayathri.style.fontSize = changeSize;
    chilanka.style.fontSize = changeSize;
    openSans.style.fontSize = changeSize;
    lato.style.fontSize = changeSize;
    manjari.style.fontSize = changeSize;
    montserrat.style.fontSize = changeSize;
    robotoCondensed.style.fontSize = changeSize;
}

function resetBack(){
    // reset p size to 20px
    roboto.style.fontSize = "20px";
    gayathri.style.fontSize = "20px";
    chilanka.style.fontSize = "20px";
    openSans.style.fontSize = "20px";
    lato.style.fontSize = "20px";
    manjari.style.fontSize = "20px";
    montserrat.style.fontSize = "20px";
    robotoCondensed.style.fontSize = "20px";

    // reset size dropdown to 20px
    document.getElementById('size').value = "20px";
    document.getElementById('input').value = "";
    //reset p content
    roboto.innerHTML = "Then came the night of the first falling star";
    gayathri.innerHTML = "Then came the night of the first falling star";
    chilanka.innerHTML = "Then came the night of the first falling star";
    openSans.innerHTML = "Then came the night of the first falling star";
    lato.innerHTML = "Then came the night of the first falling star";
    manjari.innerHTML = "Then came the night of the first falling star";
    montserrat.innerHTML = "Then came the night of the first falling star";
    robotoCondensed.innerHTML = "Then came the night of the first falling star";    
}
