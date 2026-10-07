// LION MMA - скрипты сайта

// 1. Мобильное меню
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
if (menuBtn && nav) {
  menuBtn.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', open);
    menuBtn.textContent = open ? 'Закрыть' : 'Меню';
  });
}

// 2. Фильтр расписания по направлению (страница raspisanie.html)
const filterButtons = document.querySelectorAll('.filters button');
filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    filterButtons.forEach(b => b.setAttribute('aria-pressed', 'false'));
    btn.setAttribute('aria-pressed', 'true');
    const type = btn.dataset.filter;
    document.querySelectorAll('#schedule tbody tr').forEach(row => {
      row.hidden = type !== 'all' && row.dataset.type !== type;
    });
  });
});

// 3. Форма записи (страница kontakty.html).
// GitHub Pages не принимает данные форм, поэтому заявка не отправляется,
// а только показывается подтверждение. Подключить отправку можно через Formspree и т.п.
const form = document.querySelector('#signup');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const name = form.querySelector('#name').value.trim();
    const ok = document.querySelector('.form-ok');
    ok.textContent = `${name || 'Спасибо'}, заявка принята. Администратор перезвонит в течение рабочего дня.`;
    ok.style.display = 'block';
    form.reset();
  });
}

// 4. Год в подвале
document.querySelectorAll('.year').forEach(el => { el.textContent = new Date().getFullYear(); });
