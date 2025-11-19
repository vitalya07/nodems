document.addEventListener('DOMContentLoaded', ()=> {
    //Модальное окно
    const modal = document.querySelector('.modal');
    const openModalButtons = document.querySelectorAll('.open__modal');

    function showModal() {
        modal.classList.remove('modal__hidden');
        modal.classList.add('modal__active');
        document.body.style.overflow = 'hidden';     
    };
    function hideModal() {
        modal.classList.remove('modal__active');
        modal.classList.add('modal__hidden');
        document.body.style.overflow = '';  
    }
      
    openModalButtons.forEach(item => {
        item.addEventListener('click', showModal);
    }); 

    modal.addEventListener('click', (e)=> {
        if(e.target.classList.contains('modal__close') || e.target == modal) {
            hideModal();
        }
    });
    window.addEventListener('keydown', (e)=> {
        if(e.code === 'Escape' && modal.classList.contains('modal__active')) {
            hideModal();
        }
    })
    //Модальное окно конец
    //Гамбуоргер
    const hamburger = document.querySelector('.hamburger');
    const header = document.querySelector('.header');

    hamburger.addEventListener('click', ()=> {
        header.classList.toggle('menu__active');
    });
    //Гамбуоргер конец
    //Лоадер начало
    let loader = document.querySelector('.loader');
    window.addEventListener('load', ()=> {
        setTimeout(()=> {
            loader.classList.add('load-ready')
        }, 1500)
       
    });
    //Лоадер конец 
    
    // смена цвета темы начало
    const desktopThemeBtn = document.querySelector('.header__right .header__change-color');
    const mobileThemeBtn = document.querySelector('.header__change-colors--mobile .header__change-color');


    function saveTheme(theme) {
        localStorage.setItem('theme', theme);
    }

    function loadTheme() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            enableDark();
        } else {
            disableDark();
        }
    }

    function enableDark() {
        document.body.classList.remove('light__style');
        document.body.classList.add('dark__style');

        updateBtn(desktopThemeBtn, 'Light', 'assets/icons/sun.svg');
        updateBtn(mobileThemeBtn, 'Light', 'assets/icons/sun.svg');

        saveTheme('dark');
    }

    function disableDark() {
        document.body.classList.remove('dark__style');
        document.body.classList.add('light__style');

        updateBtn(desktopThemeBtn, 'Dark', 'assets/icons/moon.svg');
        updateBtn(mobileThemeBtn, 'Dark', 'assets/icons/moon.svg');

        saveTheme('light');
    }
    function updateBtn(btn, textValue, iconSrc) {
        if (!btn) return;

        const text = btn.querySelector('span');
        const img = btn.querySelector('img');

        if (text) text.textContent = textValue;
        if (img) img.src = iconSrc;
    }

    window.addEventListener('DOMContentLoaded', loadTheme);

    if (desktopThemeBtn) {
        desktopThemeBtn.addEventListener('click', () => {
            if (document.body.classList.contains('light__style')) enableDark();
            else disableDark();
        });
    }

    if (mobileThemeBtn) {
        mobileThemeBtn.addEventListener('click', () => {
            if (document.body.classList.contains('light__style')) enableDark();
            else disableDark();
        });
    };
    //Смена цвета темы конец
})