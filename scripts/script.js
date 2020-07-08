'use strict';

const modalAdd = document.querySelector('.modal__add');
const addAd = document.querySelector('.add__ad');
const modalBtnSubmit = document.querySelector('.modal__btn-submit');
const modalSubmit = document.querySelector('.modal__submit');
const catalog = document.querySelector('.catalog');
const modalItem = document.querySelector('.modal__item');

/*Для закрытия модалок*/
const modalClose = (modal) => {
  modal.classList.add('hide');
};

/*Закрытие по Esc*/
document.addEventListener('keydown', (event) => {
  if (event.keyCode === 27) {
    modalClose(modalItem);
    modalClose(modalAdd);
  }
});

/*Добавить объявление*/
addAd.addEventListener('click', () => {
  modalAdd.classList.remove('hide');
  modalBtnSubmit.disabled = true;
});

modalAdd.addEventListener('click', (event) => {
  const target = event.target;
  if (target.classList.contains('modal__close') || target === modalAdd) {
    modalSubmit.reset();
    modalClose(modalAdd);
  }
});

/*Открыть карточку товара*/
catalog.addEventListener('click', (event) => {
  if (event.target != catalog) {
    modalItem.classList.remove('hide');
  }
});

modalItem.addEventListener('click', (event) => {
  const target = event.target;
  if (target.classList.contains('modal__close') || target === modalItem) {
    modalClose(modalItem);
  }
});
