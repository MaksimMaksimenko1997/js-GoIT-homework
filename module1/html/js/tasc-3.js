const ADMIN_PASSWORD = 'jqueryismyjam';
let pass = prompt('');
let messang = pass === null
  ? 'Отменено пользователем!'
  : pass === ADMIN_PASSWORD
  ? 'Добро пожаловать!' 
  : 'Доступ запрещен, неверный пароль!';
alert(messang);