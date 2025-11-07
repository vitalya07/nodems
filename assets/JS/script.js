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
})