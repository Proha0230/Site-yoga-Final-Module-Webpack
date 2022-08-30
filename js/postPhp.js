function postPhp() {
    let message ={
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся!',
        failure: 'Что-то пошло не так...'
    };
    
    // Отправка данных на сервер В блоке Узнать Больше и Узнать Подробнее

    let form = document.querySelector('.main-form'),
        input = form.getElementsByTagName('input'),
        statusMessage = document.createElement('div');
    
        statusMessage.classList.add ('status');
        form.addEventListener('submit', function (event){
        event.preventDefault();
        form.appendChild(statusMessage);
        let formData = new FormData(form);
    
    function postData (data) {
    return new Promise (function(resolve,reject){
        let request = new XMLHttpRequest();
        request.open ('POST', 'server.php');
        request.setRequestHeader ('Content-type', 'application/json; charset=utf-8');
        request.onreadystatechange = function () {
            if (request.readyState < 4) {
                resolve()
            } else if (request.readyState === 4 && request.status == 200) {
                resolve()
            } else {
                reject()
            }
        }
        request.send (data);
    })
    }
    
    function clearInput(){
        for( let i=0; i<input.length; i++) {
            input [i].value = '';
        }
    }
    
    postData(formData)
    .then ( () => statusMessage.innerHTML = message.loading)
    .then ( () => statusMessage.innerHTML = message.success)
    .catch ( () => statusMessage.innerHTML = message.failure)
    .then (clearInput)
    
    });

    // Отправка данных на сервер В блоке контактов

    let formContact = document.querySelector("#form"),
    inputContact = formContact.getElementsByTagName('input'),
    messageContact = document.createElement('div');
    messageContact.classList.add('status');
    messageContact.style.color = "white";
    messageContact.style.marginTop = "15px";

    formContact.addEventListener('submit', function(event){
    event.preventDefault();
    formContact.appendChild(messageContact);
    let formData = new FormData(formContact);

    function postData (data) {
        return new Promise (function(resolve,reject){
            let request = new XMLHttpRequest();
            request.open ('POST', 'server.php');
            request.setRequestHeader ('Content-type', 'application/json; charset=utf-8');
            request.onreadystatechange = function () {
                if (request.readyState < 4) {
                    resolve()
                } else if (request.readyState === 4 && request.status == 200) {
                    resolve()
                } else {
                    reject()
                }
            }
            request.send (data);
        })
        }

        function clearInput(){
            for( let i=0; i<inputContact.length; i++) {
                inputContact [i].value = '';
            }
        }

        postData(formData)
        .then ( () => messageContact.innerHTML = message.loading)
        .then ( () => messageContact.innerHTML = message.success)
        .catch ( () => messageContact.innerHTML = message.failure)
        .then (clearInput)

});

};

module.exports = postPhp;
