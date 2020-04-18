let credits = 2358,
  pricePerDroid = 3000,
  answ = prompt("Count droidrs to buy", 0),
  totalPrice = +answ * pricePerDroid;
if (answ === null) {
  alert("Отменено пользователем!");
} else if (totalPrice > credits) {
  alert("Недостаточно средств на счету!");
} else {
  alert`(Вы купили ${answ} дроидов, на счету осталось ${credits -
    totalPrice} кредитов.)`;
}