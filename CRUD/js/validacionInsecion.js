const select = document.getElementById('gender');
const selectHelp = document.getElementById('genderHelp')
const title = document.getElementById('title')
const titleHelp = document.getElementById('titleHelp')
const year = document.getElementById('year')
const yearHelp = document.getElementById('yearHelp')
const autor = document.getElementById('autor')
const autorHelp = document.getElementById('autorHelp')
const code = document.getElementById('code')
const codeHelp = document.getElementById('codeHelp')
const check = document.getElementById('terminos')
const checkHelp = document.getElementById('terminosHelp')
const tipoHelp = document.getElementById('tipoHelp')
const radios = document.getElementsByName("tipo-lector");
const body = document.body


function validar(e){
  e.preventDefault();

  let testing = 0;
  let option = true;

  //VALIDAR INSERCION
  if (title.value === "" || !(/^[a-zA-ZñÑ\s']+$/.test(title.value))) {
    titleHelp.style.display="block"
    body.style.overflowY="auto"
    option = false;
    testing--
  } else {
    testing++
  }

  console.log(testing)
  if (select.value == "" || select.value == null)  {
    selectHelp.style.display="block"
    option = false;
    testing--
  } else {
    testing++
  }
  console.log(testing)

  if (year.value == "" || !(/^\d{4}$/.test(year.value)) ) {
    yearHelp.style.display="block"
    option = false;
    testing--
  } else {
    testing++
  }
  console.log(testing)

  if (autor.value == "" || !(/^[a-zA-Z\s']+$/.test(autor.value)) ) {
    autorHelp.style.display="block"
    option = false;
    testing--
  } else {
    testing++
  }
  console.log(testing)

  if (code.value == "" || !(/^\d{1,13}$/.test(code.value))) {
    codeHelp.style.display="block"
    option=false;
    testing--
  } else {
    testing++
  }
  console.log(testing)

  if (!check.checked) {
    checkHelp.style.display="block"
    option=false;
    testing--
  } else {
    testing++
  }
  console.log(testing)


  if (!radios[0].checked && !radios[1].checked && !radios[2].checked) {
    tipoHelp.style.display="block"
    console.log(tipoHelp.style.display)
    console.log(radios[0].checked)
    option = false
  }

  resetBody(testing)
  
  return option
}

function resetBody(testing){
  if(testing < 6) {body.style.overflowY="auto"}
  else {body.style.overflowY="auto"}
}

function white(id){
  document.getElementById(id + 'Help').style.display="none"
  

}