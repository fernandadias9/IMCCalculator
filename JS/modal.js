export const Modal = {

  wrapper: document.querySelector('.modal-wrapper'),
  message: document.querySelector('.modal h2'),
  closeX: document.querySelector('.close'),

  open() {
    Modal.wrapper.classList.add('open');
  }, 
  close() {
    Modal.wrapper.classList.remove('open');
  }
}

Modal.closeX.onclick = () => Modal.close();

window.addEventListener('keydown', closeWithEsc)
function closeWithEsc(event) {
  if (event.key === 'Escape') {
    Modal.close();
  }
}