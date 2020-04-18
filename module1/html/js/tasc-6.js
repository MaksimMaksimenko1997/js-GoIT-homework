function getMessage(total = 0) {
    let answ = prompt("Number", "");
    if (answ == null) {
      alert`Общая сумма чисел равна ${total}`;
    } else if (isNaN(+answ)) {
      alert("Нужно только цифры вводить");
      getMessage(total);
    } else {
      getMessage(total + +answ);
    }
  }
getMessage();