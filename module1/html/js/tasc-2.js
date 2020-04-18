let total = 100,
  ordered = 50,
  massage = (total, ordered) =>
  console.log(
    total >= ordered
      ? "Заказ оформлен, с вами свяжется менеджер"
      : "На складе недостаточно твоаров!"
  );
massage(total, ordered);
ordered = 20;
massage(total, ordered);
ordered = 80;
massage(total, ordered);
ordered = 130;
massage(total, ordered)