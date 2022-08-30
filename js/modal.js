function modal() {

    let more = document.querySelectorAll('.description-btn, .more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

    more.forEach(function(btn) {
        btn.addEventListener('click', function() {
            overlay.style.display = 'block';
            this.classList.add('more-splash');
            document.body.style.overflow = 'hidden';   
        })
    });
    
    close.addEventListener('click', function() {
        overlay.style.display = 'none';
        document.body.style.overflow = '';
        more.forEach(function(btn) {
            btn.classList.remove('more-splash');
        })
    });
};

module.exports = modal;
