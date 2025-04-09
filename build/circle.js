let submitBtn = document.querySelector("#submit-btn");
const result = document.querySelector(".result");


function area(r , pi, rUnit){
  if(rUnit==="cm"){
    return pi*r*r;
  }else{
    pi*r*r*10000;
  }
}

submitBtn.addEventListener("click", (e)=> {
  e.preventDefault();

  let radiusValue = document.querySelector("#radius").value;
  let radiusUnit = document.querySelector("#radius-unit").value;
  const pi = 3.14;
  
  let area1 = area(radiusValue,pi,radiusUnit);
  // console.log(area1);

  result.classList.remove("hidden");
  result.innerHTML = `Area of Circle is ${area1}cm<sup>2</sup>`
})