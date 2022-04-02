jQuery(document).ready(function ($) {
    const add_form = $('#contact-us-form');

    // Сброс значений полей
    $('#contact-us-form input, #contact-us-form textarea').on('blur', function () {
        $('#contact-us-form input, #contact-us-form textarea').removeClass('error');
        $('.error-name,.error-email,.error-comments,.message-success').remove();
        $('#submit-feedback').val('Отправить сообщение');
    });

    // Отправка значений полей
    const options = {
        url: feedback_object.url,
        data: {
            action: 'feedback_action',
            nonce: feedback_object.nonce
        },
        type: 'POST',
        dataType: 'json',
        beforeSubmit: function (xhr) {
            // При отправке формы меняем надпись на кнопке
            $('#submit-feedback').val('Отправляем...');
        },
        success: function (request, xhr, status, error) {

            if (request.success === true) {
                // Если все поля заполнены, отправляем данные и меняем надпись на кнопке
                add_form.after('<div class="message-success">' + request.data + '</div>').slideDown();
                $('#submit-feedback').val('Отправить сообщение');
            } else {
                // Если поля не заполнены, выводим сообщения и меняем надпись на кнопке
                $.each(request.data, function (key, val) {
                    $('.art_' + key).addClass('error');
                    $('.art_' + key).before('<span class="error-' + key + '">' + val + '</span>');
                });
                $('#submit-feedback').val('Что-то пошло не так...');

            }
            // При успешной отправке сбрасываем значения полей
            $('#contact-us-form')[0].reset();
        },
        error: function (request, status, error) {
            $('#submit-feedback').val('Что-то пошло не так...');
        }
    };
    // Отправка формы
    add_form.ajaxForm(options);
});