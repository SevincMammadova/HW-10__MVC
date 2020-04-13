
const root = document.querySelector('div#root');

const container = document.createElement('div');
container.setAttribute('class', 'container');

const container__block1 = document.createElement('div');
container__block1.setAttribute('class','container__block1');

const container__title = document.createElement('div');
container__title.setAttribute('class', 'container__title');
container__title.setAttribute('id','title');

const title__inner = document.createElement('h1');
title__inner.setAttribute('class', 'title__inner');
title__inner.innerHTML = 'Подключайся к нам!';

const container__form = document.createElement('form');
container__form.setAttribute('class', 'container__form');
container__form.setAttribute('id', 'form');

const form__fName = document.createElement('label');
form__fName.setAttribute('for','firstName');
form__fName.innerHTML = 'First Name:';

const form__fNameInput = document.createElement('input');
form__fNameInput.setAttribute('class','form__fNameInput');
form__fNameInput.setAttribute('type', 'text');
form__fNameInput.setAttribute('id','firstName');

const form__sName = document.createElement('label');
form__sName.setAttribute('for','surName');
form__sName.innerHTML = 'Surname:';

const form__sNameInput = document.createElement('input');
form__sNameInput.setAttribute('class','form__sNameInput');
form__sNameInput.setAttribute('type', 'text');
form__sNameInput.setAttribute('id','surName');

const form__age = document.createElement('label');
form__age.setAttribute('for','age');
form__age.innerHTML = 'Age:';

const form__ageInput = document.createElement('input');
form__ageInput.setAttribute('class','form__ageInput');
form__ageInput.setAttribute('type', 'number');
form__ageInput.setAttribute('id','age');

const form__submit = document.createElement('div');
form__submit.setAttribute('class','form__submit');
form__submit.setAttribute('onclick', 'submitData()')
form__submit.setAttribute('type', 'button');
form__submit.textContent = "submit";

const container__list = document.createElement('div');
container__list.setAttribute('class','container__list');

const list__inner = document.createElement('div');
list__inner.setAttribute('class', 'list__inner');
list__inner.setAttribute('id', 'list')
list__inner.setAttribute('onclick', 'submit()');

const container__block2 = document.createElement('div');
container__block2.setAttribute('class','container__block2');

const block2__find = document.createElement('div');
block2__find.setAttribute('class', 'block2__find');

const find__inner = document.createElement('h2');
find__inner.setAttribute('class', 'find__inner');
find__inner.innerHTML = 'Find!';

const container__formFind = document.createElement('form');
container__formFind.setAttribute('class', 'container__formFind');
container__formFind.setAttribute('id','myForm');

const formFind__fName = document.createElement('label');
formFind__fName.setAttribute('for','firstNameFind');
formFind__fName.innerHTML = 'First Name:';

const formFind__fNameInput = document.createElement('input');
formFind__fNameInput.setAttribute('class','formFind__fNameInput');
formFind__fNameInput.setAttribute('type', 'text');
formFind__fNameInput.setAttribute('id','firstNameFind');

const form__sNameFind = document.createElement('label');
form__sNameFind.setAttribute('for','surNameFind');
form__sNameFind.innerHTML = 'Surname:';

const form__sNameFindInput = document.createElement('input');
form__sNameFindInput.setAttribute('class','form__sNameFindInput');
form__sNameFindInput.setAttribute('type', 'text');
form__sNameFindInput.setAttribute('id','surNameFind');

const form__ageFind = document.createElement('label');
form__ageFind.setAttribute('for','ageFind');
form__ageFind.innerHTML = 'Age:';

const form__ageFindInput = document.createElement('input');
form__ageFindInput.setAttribute('class','form__ageFindInput');
form__ageFindInput.setAttribute('type', 'number');
form__ageFindInput.setAttribute('id','ageFind');

const form__findButton = document.createElement('input');
form__findButton.setAttribute('class', 'form__findButton');
form__findButton.setAttribute('type','button');
form__findButton.value = 'Find!'; 

const container__result = document.createElement('div');
container__result.setAttribute('class', 'container__result');

const result__view = document.createElement('textarea');
result__view.setAttribute('class','result__view');


container__title.appendChild(title__inner);
container__form.appendChild(form__fName);
container__form.appendChild(form__fNameInput);
container__form.appendChild(form__sName);
container__form.appendChild(form__sNameInput);
container__form.appendChild(form__age);
container__form.appendChild(form__ageInput);
container__form.appendChild(form__submit);
container.appendChild(container__title);
container__list.appendChild(list__inner);
container__block1.appendChild(container__form);
container__block1.appendChild(container__list);
container__block2.appendChild(block2__find);
block2__find.appendChild(find__inner);
container__formFind.appendChild(formFind__fName);
container__formFind.appendChild(formFind__fNameInput);
container__formFind.appendChild(form__sNameFind);
container__formFind.appendChild(form__sNameFindInput);
container__formFind.appendChild(form__ageFind);
container__formFind.appendChild(form__ageFindInput);
container__formFind.appendChild(form__findButton);
container__block2.appendChild(container__formFind);
container__result.appendChild(result__view);
container__block2.appendChild(container__result);
container.appendChild(container__block1);
container.appendChild(container__block2);
root.appendChild(container);


//functions

function submitData() {
    const firstName = document.getElementById('firstName').value;
    const surName = document.getElementById('surName').value;
    const age = document.getElementById('age').value;

    let data = firstName + ' ' + surName + ' ' + age + '<br>';
    let oldValue = document.getElementById('list').innerHTML;
    let newValue = data + oldValue;
    document.getElementById('list').innerHTML = newValue; 
}






