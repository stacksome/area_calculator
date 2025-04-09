let submitBtn = document.querySelector("#submit-btn");
const result=document.querySelector(".result");

function area(h, l, hUnit, lUnit){
  if(hUnit==="cm" && lUnit==="cm"){
    return h*l;
  }else if(hUnit==="cm" && lUnit==="m"){
    return h*l*100;
  }else if(hUnit==="m" && lUnit==="cm"){
    return h*l*100;
  }else{
    return h*l*10000
  }
}

submitBtn.addEventListener("click", (e)=>{
  e.preventDefault();

  let heightValue = document.querySelector("#height").value;
  let lengthValue = document.querySelector("#length").value;
  let heightUnit = document.querySelector("#height-unit").value;
  let lengthUnit = document.querySelector("#length-unit").value;

  let area1=area(heightValue, lengthValue, heightUnit, lengthUnit);
  // console.log(area1)

  result.classList.remove("hidden");
  result.innerHTML = `<b>Area of Rectangle is ${area1} cm<sup>2</sup></b>`
})
