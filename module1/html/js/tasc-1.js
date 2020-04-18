let name = 'Генератор защитного поля',
 price = 1000;
let message = (name, price) => `Выбран ${name}, цена за штуку ${price} кредитов`;

console.log(message(name, price));

price = 2000;

console.log(message(name, price));