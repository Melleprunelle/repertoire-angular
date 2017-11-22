// rotation numero de tel
var _$paletteElement = $('.palette_color');

function _colorizePaletteItems() {
    $.each(_$paletteElement, function (i) {
        $(this).css('background-color', $(this).data('color'));
    })
}

function _togglePalette() {
    $('.palette_color__main').on('click', function () {
        $('.palette').addClass('palette__opened');
    })
}
_colorizePaletteItems();
_togglePalette();


// entrée du numero de tel
var screenData = '';
var myScreen = document.querySelector('.input');

function calcul(num) {
    if (screenData[screenData.length - 1] === '=') {
        screenData = '';
    }
    screenData += num.dataset.num;
    myScreen.textContent = screenData;
    var type = typeof screenData;
    var res = screenData.slice(0, 10);
    myScreen.textContent = res;
    console.log("ScreenData");
    console.log(type);
    console.log(screenData);
    console.log("Result");
    console.log(res);
}

//supprimer numero de téléphone
function deleteNum() {
    screenData = '';
    datas = '';
    myScreen.textContent = datas;
}