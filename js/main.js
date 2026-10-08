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

// Цели Top.Mail.Ru / MyTracker (счетчик 3800459)
function tmrGoal(goal) {
  var _tmr = window._tmr || (window._tmr = []);
  _tmr.push({ id: "3800459", type: "reachGoal", goal: goal });
}
// Цель 1: клик по любой кнопке «Записаться» (ссылки на форму записи)
document.querySelectorAll('a[href*="#signup"]').forEach(a => {
  a.addEventListener('click', () => tmrGoal('signup_click'));
});

// 3. Форма записи (страница kontakty.html).
// GitHub Pages не принимает данные форм, поэтому заявка не отправляется,
// а только показывается подтверждение. Подключить отправку можно через Formspree и т.п.
const form = document.querySelector('#signup');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    tmrGoal('trial_signup'); // Цель 2: отправка заявки на пробную тренировку
    const name = form.querySelector('#name').value.trim();
    const ok = document.querySelector('.form-ok');
    ok.textContent = `${name || 'Спасибо'}, заявка принята. Администратор перезвонит в течение рабочего дня.`;
    ok.style.display = 'block';
    form.reset();
  });
}

// 4. Год в подвале
document.querySelectorAll('.year').forEach(el => { el.textContent = new Date().getFullYear(); });
