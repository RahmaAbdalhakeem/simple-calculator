// الشاشة
const screen = document.querySelector(".screen");

// كل الأزرار
const buttons = document.querySelectorAll("button");

// متغير لتجميع العملية
let currentValue = "";

// تشغيل الآلة الحاسبة
buttons.forEach(button => {
  button.addEventListener("click", () => {

    const value = button.textContent;

    // زر المسح
    if (value === "CLEAR") {
      currentValue = "";
      screen.textContent = "0";
    }

    // زر يساوي
    else if (value === "=") {
      try {
        screen.textContent = eval(currentValue);
        currentValue = screen.textContent;
      } catch {
        screen.textContent = "Error";
        currentValue = "";
      }
    }

    // باقي الأزرار (أرقام + عمليات)
    else {
      currentValue += value;
      screen.textContent = currentValue;
    }

  });
});
