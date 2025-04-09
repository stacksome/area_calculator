const toggleSwitch = document.querySelector("input"); // The checkbox
const body = document.body;
const Triangle = document.querySelector(".triangle");
const Rectangle = document.querySelector(".rectangle");
const Square = document.querySelector(".square");
const Circle = document.querySelector(".circle");

toggleSwitch.addEventListener("change", () => {
  const isDark = toggleSwitch.checked;

  if (isDark) {
    // Remove light background classes
    Triangle.classList.remove("bg-amber-50", "text-black");
    Rectangle.classList.remove("bg-slate-50", "text-black");
    Square.classList.remove("bg-violet-50", "text-black");
    Circle.classList.remove("bg-emerald-50", "text-black");
    body.classList.remove("bg-blue-50");

    // Add dark mode classes
    Triangle.classList.add("bg-gray-800", "text-white");
    Rectangle.classList.add("bg-gray-800", "text-white");
    Square.classList.add("bg-gray-800", "text-white");
    Circle.classList.add("bg-gray-800", "text-white");
    body.classList.add("bg-gray-900", "text-white");
  } else {
    // Remove dark mode classes
    Triangle.classList.remove("bg-gray-800", "text-white");
    Rectangle.classList.remove("bg-gray-800", "text-white");
    Square.classList.remove("bg-gray-800", "text-white");
    Circle.classList.remove("bg-gray-800", "text-white");
    body.classList.remove("bg-gray-900", "text-white");

    // Add original light mode classes back
    Triangle.classList.add("bg-amber-50", "text-black");
    Rectangle.classList.add("bg-slate-50", "text-black");
    Square.classList.add("bg-violet-50", "text-black");
    Circle.classList.add("bg-emerald-50", "text-black");
    body.classList.add("bg-blue-50");
  }

  console.log("Body classes after toggle:", body.className); // Debug
});