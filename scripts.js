// import fontList from './fontList.js';

let fontList = [
    ['roboto', 'Christian Robertson'],
    ['gayathri', 'SMC'],
    ['chilanka', 'SMC'],
    ['openSans', 'Steve Matteson'],
    ['lato', 'Lukasz Dziedzic'],
    ['manjari', 'Santhosh Thottingal'],
    ['montserrat', 'Julieta Ulanovsky'],
    ['robotoCondensed', 'Christian Robertson']
];

for (let i = 0; i < fontList.length; i++) {
    let fontCard = "";
    for (let j = 0; j < fontList.length; j++){
        fontCard +=
            '<div class="fontCard"><div class="fontHeader">' +
            '<p>' + fontList[j][0] + '</p>' +
            '<small>' + fontList[j][1] + '</small>' +
            '</div>' +
            '<div class="plusDIv"><span class="plusDiv">+</span></div>' +
            '<div class="fontText"><p id="' + fontList[j][0] + '">' +
            'Then came the night of the first falling star</p></div></div>';
    }
    document.getElementById('cardsContainer').innerHTML = fontCard;
}


// Input 'Type Something
input.oninput = function() {
    let fontID;
    for (let i = 0; i < fontList.length; i++){
        for (let j = 0; j < fontList[i].length; j++){
            if (input.value) {
                fontID = document.getElementById(fontList[i][0]);
                fontID.innerHTML = input.value;
            } else {
                fontID = document.getElementById(fontList[i][0]);
                fontID.innerHTML = "Then came the night of the first falling star";
            }
        }
    }
};

// Font size dropdown
function fontSize(selectSize) {
    let changeSize = selectSize.options[selectSize.selectedIndex].text;
    for (let i = 0; i < fontList.length; i++) {
        document.getElementById(fontList[i][0]).style.fontSize = changeSize;
    }
}

// reset back to normal

function resetBack(){
    // reset p size to 20px
    for (let i = 0; i < fontList.length; i++) {
        document.getElementById(fontList[i][0]).style.fontSize = "20px";
        // reset to default sentence 
        document.getElementById(fontList[i][0]).innerHTML = "Then came the night of the first falling star";
    }

    // reset size dropdown to 20px
    document.getElementById('size').value = "20px";
    document.getElementById('input').value = "";

}
