 const changeThemeBtn = document.querySelector('.header__change-color');
    const btnDark = document.querySelector('.header__change-colors--dark');
    const btnLight = document.querySelector('.header__change-colors--light');

    // Функция для сохранения темы
    function saveTheme(theme) {
        localStorage.setItem('theme', theme);
    }

    // Функция для загрузки темы из localStorage
    function loadTheme() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            enabledDark();
        } else {
            disableDark();
        }
    }

    function enabledDark() {
        document.body.classList.remove('light__style');
        document.body.classList.add('dark__style');        
        btnLight.style.display = 'none';
        btnDark.style.display = 'flex';
        let text = changeThemeBtn.querySelector('span');
        text.textContent = `Light`;
        let img = changeThemeBtn.querySelector('img');
        img.src = 'assets/icons/sun.svg';
        saveTheme('dark');
    }

    function disableDark() {
        document.body.classList.remove('dark__style');
        document.body.classList.add('light__style');      
        let text = changeThemeBtn.querySelector('span');
        text.textContent = `Dark`;
        btnLight.style.display = 'flex';
        let img = changeThemeBtn.querySelector('img');
        img.src = 'assets/icons/moon.svg';
        saveTheme('light');
    }

    // Загружаем тему при загрузке страницы
    window.addEventListener('DOMContentLoaded', loadTheme);

        changeThemeBtn.addEventListener('click', () => {
        if (document.body.classList.contains('light__style')) {
            enabledDark();
        } else {
            disableDark();
        }
    });