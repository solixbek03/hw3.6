var age = prompt("Yoshingiz nechida?").trim();


if (isNaN(age)) {
  document.querySelector(".text").textContent = "Iltimos, son kiriting.";
} else if (age >= 100) {
  document.querySelector(".text").textContent = "Iltimos, oyin qilmay yoshingizni ayting.";
} else if (age >= 60) {
  document.querySelector(".text").textContent = "Siz 1000 so'm pul to'laysiz.";
} else if (age >= 20) {
  document.querySelector(".text").textContent = "Siz 2000 so'm pul to'laysiz.";
} else if (age >= 7) {
  document.querySelector(".text").textContent = "Siz 1400 so'm pul to'laysiz";
} else if (age < 7) {
  document.querySelector(".text").textContent = "Sizga chipta bepul.";
};