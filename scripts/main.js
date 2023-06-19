window.onload = function () {
    $('#accordion').accordion();

    $('.btn').addClass(' hvr-grow');

    $('.product-image').magnificPopup({
        type: 'image'
    });

    let valIndex = $('#validationIndex');

    valIndex.on('keydown', (e) => {
        if ((isNaN(parseInt(e.key)) || valIndex.val().length > 5) && e.key?.toLowerCase() !== 'backspace') {
            return false;
        }
    })

    function checkEmptyInput() {
        let res = true;
        $('.order input').each(function () {
            let currentElem = $(this);
            if (currentElem.val().trim() === '') {
                alert('Необходимо заполнить поле ' + currentElem.prev().text());
                currentElem.focus();
                res = false;
                return res;
            }
        });

        return res;
    }

    $('#btnSend').on('click', (e) => {
        let popUpSuccess = $('#popUpSuccess');
        let orderForm = $('.order-form form');

        if (!checkEmptyInput()) {
            return false;
        }

        if (valIndex.val().length !== 6) {
            alert('Поле индеск должно содержать 6 символов');
            valIndex.focus();
            return false;
        }

        popUpSuccess.css('height', orderForm.css('height'));
        orderForm.addClass('d-none');
        popUpSuccess.removeClass('d-none');
    })
}