var input12=null
var input22=null
var input32=null
var input42=null
var input13=null
var input23=null
var input33=null
var input43=null
var input12Val=null
var input22Val=null
var input32Val=null
var input42Val=null
var input13Val=null
var input23Val=null
var input33Val=null
var input43Val=null

document.querySelectorAll("input").forEach(inpt => {
  inpt.addEventListener('input',e=>calculate_revenue(e))
})

function setValidity(e,isValid){
  if (isValid){
        e.classList.remove("is-invalid")
        e.classList.add("is-valid")
      }else if (isValid == false){
        e.classList.remove("is-valid")
        e.classList.add("is-invalid")
      }

      else if (isValid == null){
        e.classList.remove("is-valid")
        e.classList.remove("is-invalid")
      }

}

function checkValid12(){
  let val = parseInt(document.getElementById('input12').value)
  let input11 = parseInt(document.getElementById("input11").value)
  input12Val = (input11 - val ) > 0 ? ((input11 - val) / (input11/100)) : -1
  input12= input12Val > 0 ? (input12Val >= 50 ? true  : false) : null
}

function checkValid22(){
  let val = parseInt(document.getElementById('input22').value)
  let input11 = parseInt(document.getElementById("input21").value)
  input22Val=  (input11 - val ) > 0 ? ((input11 - val) / (input11/100)) : -1
  input22 = (input12 || input22Val >= 50) ? true : input22Val >= 0 ? false : null
}

function checkValid32(){
  let val = parseInt(document.getElementById('input32').value)
  let input11 = parseInt(document.getElementById("input31").value)
  input32Val = (input11 - val ) > 0 ? ((input11 - val) / (input11/100)) : -1
  input32 = ((input22Val >= 50 || input32Val >= 50) || (input12Val >= 50 && input22Val >= 20)) ? true : input32Val >= 0 ? false : null
  

}

function checkValid42(){
  let val = parseInt(document.getElementById('input42').value)
  let input11 = parseInt(document.getElementById("input41").value)
    input42Val = (input11 - val ) > 0 ? ((input11 - val) / (input11/100)) : -1
    input42 = ((input32Val >= 50 || input42Val >= 50) || (input22Val >= 50 && input32Val >= 20) || (input12Val >= 50 && input22Val >= 20 && input32Val >= 20)) ? true : input42Val >= 0 ? false : null
  
}

function checkValid13(){
  let val = parseInt(parseInt(document.getElementById('input13').value))
  let input11 = parseInt(parseInt(document.getElementById("input11").value))
    input13Val = (input11 - val ) > 0 ? ((input11 - val) / (input11/100)) : -1
    input13 = (input13Val >= 20 || input42Val >= 20 ) ? true : input13Val >= 0 ? false : null
  
}

function checkValid23(){
  let val = parseInt(document.getElementById('input23').value)
  let input11 = parseInt(document.getElementById("input21").value)
    input23Val = (input11 - val ) > 0 ? ((input11 - val) / (input11/100)) : -1
    input23 = (input23Val >= 20 || input13Val >= 20 ) ? true : input23Val >= 0 ? false : null
  
}

function checkValid33(){
  let val = parseInt(document.getElementById('input33').value)
  let input11 = parseInt(document.getElementById("input31").value)
    input33Val = (input11 - val ) > 0 ? ((input11 - val) / (input11/100)) : -1
    input33 = (input33Val >= 20 || input23Val >= 20 ) ? true : input33Val >= 0 ? false : null
  
}

function checkValid43(){
  let val = parseInt(document.getElementById('input43').value)
  let input11 = parseInt(document.getElementById("input41").value)
    input43Val = (input11 - val ) > 0 ? ((input11 - val) / (input11/100)) : -1
    input43 = (input43Val >= 20 || input33Val >= 20 ) ? true : input43Val >= 0 ? false : null
  
}


function calculate_revenue(e){
  const val = e.target.value 
  if(isNaN(val)){
    e.target.value = ""
  }
  else{
      
    if(e.target.id == "input12" || e.target.id == "input11"){
        checkValid12()
        checkValid22()
        checkValid32()
        checkValid42()
        setValidity(document.getElementById("input12"),input12)
        setValidity(document.getElementById("input22"),input22) 
        setValidity(document.getElementById("input32"),input32)
        setValidity(document.getElementById("input42"),input42)           
      }
    
    else if (e.target.id == "input22" || e.target.id == "input21"){
      checkValid22()
      checkValid32()
      checkValid42()
      setValidity(document.getElementById("input22"),input22)
      setValidity(document.getElementById("input32"),input32)
      setValidity(document.getElementById("input42"),input42) 
  }
  else if (e.target.id == "input32" || e.target.id == "input31"){
    checkValid32()
    checkValid42()
    setValidity(document.getElementById("input32"),input32)
    setValidity(document.getElementById("input42"),input42) 
  }
  else if (e.target.id == "input42" || e.target.id == "input41"){
    checkValid42()
    checkValid13()
    setValidity(document.getElementById("input42"),input42)
    setValidity(document.getElementById("input13"),input13)
  }
  else if (e.target.id == "input13" || e.target.id == "input11"){
    checkValid13()
    checkValid23()
    setValidity(document.getElementById("input13"),input13)
    setValidity(document.getElementById("input23"),input23)

  }
  else if (e.target.id == "input23" || e.target.id == "input21"){
    checkValid23()
    checkValid33()
    setValidity(document.getElementById("input23"),input23)
    setValidity(document.getElementById("input33"),input33)

  }
  else if (e.target.id == "input33" || e.target.id == "input31"){
    checkValid33()
    checkValid43()
    setValidity(document.getElementById("input33"),input33)
    setValidity(document.getElementById("input43"),input43)
  }
  else if (e.target.id == "input43" || e.target.id == "input41"){
    checkValid43()
    setValidity(document.getElementById("input43"),input43)
  }


}
}
