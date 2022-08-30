window.addEventListener('DOMContentLoaded', function () {

'use strict';

let infoAll = document.querySelector('.info'),
    timerAll = document.querySelector('.timer'),
    contentAll = document.querySelector('.content'),
    photoSlider = document.querySelector('#photo'),
    priceCounter = document.querySelector('#price'),
    contacts = document.querySelector('#contacts'),
    photoBTN = document.querySelector('.photo-btn'),
    aboutBTN = document.querySelector('.about-btn'),
    priceBTN = document.querySelector('.price-btn'),
    morebtn = document.querySelector('.more'),
    contactsBTN = document.querySelector('.contacts-btn');


    let tabs = require ('/js/tabs.js');
    let timer = require ('/js/timer.js');
    let modal = require ('/js/modal.js');
    let postPhp = require ('/js/postPhp.js');
    let sliderPhoto = require ('/js/sliderPhoto.js');
    let calculator = require ('/js/calculator.js');


    function hideAllContent()
    {
        photoSlider.style.display = 'none';
        priceCounter.style.display = 'none';
        contacts.style.display = 'none';
        contentAll.style.minHeight = '1000px';
        window.scrollTo(0,110);
    };

    hideAllContent();


    photoBTN.addEventListener('click', function()
    {
        {
            photoSlider.style.display = 'block';
            photoSlider.style.marginTop = '0px';
            priceCounter.style.display = 'none';
            contacts.style.display = 'none';
            infoAll.style.display = 'none';
            timerAll.style.display = 'none';
            morebtn.style.display = 'none';
            contentAll.style.minHeight = '1000px';
            window.scrollTo(0,550);
        }
    });

    aboutBTN.addEventListener('click', function()
    {
        {
            photoSlider.style.display = 'none';
            priceCounter.style.display = 'none';
            contacts.style.display = 'none';
            infoAll.style.display = 'block';
            timerAll.style.display = 'none';
            morebtn.style.display = 'none';
            contentAll.style.minHeight = '1000px';
            window.scrollTo(0,110);

        }
    });

    priceBTN.addEventListener('click', function()
    {
        {
            photoSlider.style.display = 'none';
            priceCounter.style.display = 'block';
            contacts.style.display = 'none';
            infoAll.style.display = 'none';
            timerAll.style.display = 'block';
            morebtn.style.display = 'block';
            contentAll.style.minHeight = '1000px';
            timerAll.style.marginTop = '0px';
            window.scrollTo(0,550);

        }
    });

    contactsBTN.addEventListener('click', function()
    {
        {
            photoSlider.style.display = 'none';
            priceCounter.style.display = 'none';
            contacts.style.display = 'block';
            infoAll.style.display = 'none';
            timerAll.style.display = 'none';
            morebtn.style.display = 'none';
            contentAll.style.minHeight = '1000px';
            contacts.style.width = '100%';
            contacts.style.marginTop = '0px';
            window.scrollTo(0,700);

        }
    });


    tabs();
    timer();
    modal();
    postPhp();
    sliderPhoto();
    calculator();

});