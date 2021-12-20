import renderPlus from './renderPlus.js';

let page;
let func;
let type;

export function addNewPage() {
  if (
    window.pageYOffset + document.documentElement.clientHeight >=
    document.documentElement.scrollHeight - 1000
  ) {
    renderPlus(page, func || null, type || null);
    window.removeEventListener('scroll', addNewPage);
    setTimeout(() => {
      window.addEventListener('scroll', addNewPage);
    }, 1500);
    page = page + 1;
  }
}

export const scroll = (funcNew, typeNew) => {
  if (funcNew) {
    func = funcNew;
    type = typeNew;
  }
  page = 2;

  window.addEventListener('scroll', addNewPage);
};
