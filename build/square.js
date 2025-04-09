let submitBtn=document.querySelector("#submit-btn");
const result=document.querySelector(".result");

function area(s, sUnit) {
  if(sUnit==="cm"){
    return s*s;
  }else{
    return s*s*10000;
  }
};

submitBtn.addEventListener("click",(e)=>{
  e.preventDefault();

  let sideValue = document.querySelector("#side").value;
  let sideUnit = document.querySelector("#side-unit").value;

  let area1 = area(sideValue, sideUnit);
  // console.log(area1)

  result.classList.remove("hidden");
  result.innerHTML = `Area of square is ${area1}cm<sup>2</sup>`
})