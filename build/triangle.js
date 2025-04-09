let submitBtn = document.querySelector("#submit-btn");
const result = document.querySelector(".result");

function area(h , b, Hunit, Bunit) {
  if(Hunit==="cm" && Bunit ==="cm"){
    return 0.5*h*b;
  }else if(Hunit==="m" && Bunit ==="cm"){
    return 0.5*h*b*100;
  }else if(Hunit==="cm" && Bunit ==="m"){
    return 0.5*h*b*100;
  }else{
    return 0.5*h*b*10000;
  }
}


submitBtn.addEventListener("click", (e)=> {
  e.preventDefault();

  let heightValue = document.querySelector("#height").value;
  let baseValue = document.querySelector("#base").value;
  let heightUnit = document.querySelector("#height-unit").value;
  let baseUnit = document.querySelector("#base-unit").value;

  let area1 = area(heightValue,baseValue,heightUnit,baseUnit);
  // console.log(area1);

  result.classList.remove("hidden");
  result.innerHTML = `<p>Area of triangle is ${area1} cm<sup>2</sup></p>`;

})