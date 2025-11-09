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
    //гамбургер конец
    //Смена темы начало
    // const changeThemeBtn = document.querySelector('.header__change-color');
    // const btnDark = document.querySelector('.header__change-colors--dark');
    // const btnLight = document.querySelector('.header__change-colors--light');

    // function enabledDark() {
    //     document.body.classList.remove('light__style');
    //     document.body.classList.add('dark__style');        
    //     btnLight.style.display = 'none';
    //     btnDark.style.display = 'flex';
    //     let text = changeThemeBtn.querySelector('span');
    //     text.textContent = `Light`;
    //     let img = changeThemeBtn.querySelector('img');
    //     img.src = '../assets/icons/sun.svg'; // правильное присваивание
    // }

    // function disableDark() {
    //     document.body.classList.remove('dark__style');
    //     document.body.classList.add('light__style');      
    //     btnDark.style.display = 'none';
    //     btnLight.style.display = 'flex';
    //     let img = changeThemeBtn.querySelector('img');
    //     img.src = '../assets/icons/moon.svg'; // если нужно вернуть изображение
    // }

    // changeThemeBtn.addEventListener('click', () => {
    //     if (document.body.classList.contains('light__style')) {
    //         enabledDark();
    //     } else {
    //         disableDark();
    //     }
    // });

    const changeThemeBtn = document.querySelector('.header__change-color');
    const btnDark = document.querySelector('.header__change-colors--dark');
    const btnLight = document.querySelector('.header__change-colors--light');

    function enabledDark() {
        document.body.classList.remove('light__style');
        document.body.classList.add('dark__style');        
        btnLight.style.display = 'none';
        btnDark.style.display = 'flex';
        let text = changeThemeBtn.querySelector('span');
        text.textContent = `Light`;
        let img = changeThemeBtn.querySelector('img');
        img.src = '../assets/icons/sun.svg';
    }

    function disableDark() {
        document.body.classList.remove('dark__style');
        document.body.classList.add('light__style');      
        let text = changeThemeBtn.querySelector('span');
        text.textContent = `Dark`;
        btnLight.style.display = 'flex';
        let img = changeThemeBtn.querySelector('img');
        img.src = '../assets/icons/moon.svg';
    }

    changeThemeBtn.addEventListener('click', () => {
        if (document.body.classList.contains('light__style')) {
            enabledDark();
        } else {
            disableDark();
        }
    });
})