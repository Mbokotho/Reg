var NameElement = document.querySelector('.Name');
var addBtnElement = document.querySelector('.addBtn');
var greetingElement = document.querySelector('.greeting');
var resetBtnElement = document.querySelector('.resetBtn');
var showBtnElement = document.querySelector('.showBtn');

var Names = {};
var Name = "";

if (localStorage.getItem("myNames")) {
  Names = JSON.parse(localStorage.getItem("myNames"))
}

 function element(Name) {
   var list = document.createElement("ul");
   list.classList.add("stylelist");
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
  }
  var keys = Object.keys(Names);
  console.log(keys);
}

addBtnElement.addEventListener('click', clickTheGreetButton);

resetBtnElement.addEventListener('click', function () {
  localStorage.clear();


});
