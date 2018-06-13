var NameElement = document.querySelector('.Name');
var addBtnElement = document.querySelector('.greetBtn');
var greetingElement = document.querySelector('.greeting');
var regNumcounter = document.querySelector('.greetCounter');


var Names = {};
var Name = "";

if (localStorage.getItem("myNames")) {
  Names = JSON.parse(localStorage.getItem("myNames"))
}

 function element(Name) {
   var list = document.createElement("span");
   list.textContent = Name;
    greetingElement.appendChild(list);

 }

function clickTheGreetButton() {

  var checkedRadioBtn = document.querySelector("input[name='Language']:checked");
  if (checkedRadioBtn) {
    var language = checkedRadioBtn.value;
  }
  var Name = NameElement.value;
  var name = Name.toUpperCase()

  element(name);

  if (name != "") {


    if (Names[name] === undefined) {

      Names[name] = 0;
      localStorage.setItem("myNames", JSON.stringify(Names));

    }
// greetingElement.innerHTML = name;
// regNumcounter.innerHTML = Object.entries(Names).length;
  }
  regNumcounter.innerHTML = Object.entries(Names).length;


}

addBtnElement.addEventListener('click', clickTheGreetButton);
