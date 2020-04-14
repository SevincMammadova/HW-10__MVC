const root = document.querySelector('div#root');

// add the div-container

const container = document.createElement('div');
container.setAttribute('class', 'container');

// add the container__block1

const container__block1 = document.createElement('div');
container__block1.setAttribute('class','container__block1');
container.append(container__block1);

// add the block1__title

const block1__title = document.createElement('div');
block1__title.setAttribute('class', 'block1__title');
block1__title.innerHTML = 'Join us!';
container__block1.append(block1__title);

// add the block1__inner

const block1__inner = document.createElement('div');
block1__inner.setAttribute('class', 'block1__inner');
container__block1.append(block1__inner);

// add the inner__form

const inner__form = document.createElement('div');
inner__form.setAttribute('class', 'inner__form');
block1__inner.append(inner__form);

// add the form__dataForm

const form__dataForm = document.createElement('form');
form__dataForm.setAttribute('class', 'form__dataForm');
inner__form.append(form__dataForm);

// add the dataForm__firstName

const dataForm__firstName = document.createElement('label');
dataForm__firstName.setAttribute('class', 'dataForm__firstName');
dataForm__firstName.setAttribute('for', 'firsName');
dataForm__firstName.innerHTML = 'FirstName *';
form__dataForm.append(dataForm__firstName);

// add the dataForm__fNameInput

const dataForm__fNameInput = document.createElement('input');
dataForm__fNameInput.setAttribute('class', 'dataForm__fNameInput');
dataForm__fNameInput.setAttribute('id', 'firstName');
dataForm__fNameInput.setAttribute('type', 'text');
form__dataForm.append(dataForm__fNameInput);

// add the dataForm__surName

const dataForm__surName = document.createElement('label');
dataForm__surName.setAttribute('class', 'dataForm__surName');
dataForm__surName.setAttribute('for', 'surName');
dataForm__surName.innerHTML = 'SurName *';
form__dataForm.append(dataForm__surName);

// add the dataForm__surNameInput

const dataForm__surNameInput = document.createElement('input');
dataForm__surNameInput.setAttribute('class', 'dataForm__surNameInput');
dataForm__surNameInput.setAttribute('id', 'surName');
dataForm__surNameInput.setAttribute('type', 'text');
form__dataForm.append(dataForm__surNameInput);

// add the dataForm__age

const dataForm__age = document.createElement('label');
dataForm__age.setAttribute('class', 'dataForm__age');
dataForm__age.setAttribute('for', 'age');
dataForm__age.innerHTML = 'Age *'
form__dataForm.append(dataForm__age);

// add the dataForm__ageInput

const dataForm__ageInput = document.createElement('input');
dataForm__ageInput.setAttribute('class', 'dataForm__ageInput');
dataForm__ageInput.setAttribute('id', 'age');
dataForm__ageInput.setAttribute('type', 'number');
form__dataForm.append(dataForm__ageInput);

// add the dataForm__btnSubmit

const dataForm__btnSubmit = document.createElement('input');
dataForm__btnSubmit.setAttribute('class', 'dataForm__btnSubmit');
dataForm__btnSubmit.setAttribute('type', 'submit');
dataForm__btnSubmit.setAttribute('onclick', 'addPerson()');
dataForm__btnSubmit.value = 'Add';
form__dataForm.append(dataForm__btnSubmit);

// add the inner__list

const inner__list = document.createElement('div');
inner__list.setAttribute('class', 'inner__list');
inner__list.setAttribute('id', 'list');
block1__inner.append(inner__list);

// add the container__block2

const container__block2 = document.createElement('div');
container__block2.setAttribute('class', 'container__block2');
container.append(container__block2);

// add the block2__title

const block2__title = document.createElement('div');
block2__title.setAttribute('class', 'block2__title');
block2__title.innerHTML = 'Find a Person';
container__block2.append(block2__title);

// add the block2__inner

const block2__inner = document.createElement('div');
block2__inner.setAttribute('class', 'block2__inner');
container__block2.append(block2__inner);

// add the inner__findForm

const inner__findForm = document.createElement('div');
inner__findForm.setAttribute('class', 'inner__findForm');
block2__inner.append(inner__findForm);

// add the findForm__dataForm

const findForm__dataForm = document.createElement('form');
findForm__dataForm.setAttribute('class', 'findForm__dataForm');
inner__findForm.append(findForm__dataForm);

// add the dataForm__findFistName

const dataForm__findFirstName = document.createElement('label');
dataForm__findFirstName.setAttribute('class', 'dataForm__findFirstName');
dataForm__findFirstName.setAttribute('for', 'findFirstName');
dataForm__findFirstName.innerHTML = 'FirstName *';
findForm__dataForm.append(dataForm__findFirstName);

// add the dataForm__findFirstNameInput

const dataForm__findFirstNameInput = document.createElement('input');
dataForm__findFirstNameInput.setAttribute('class', 'dataForm__findFirstNameInput');
dataForm__findFirstNameInput.setAttribute('id', 'findFirstName');
dataForm__findFirstNameInput.setAttribute('type', 'text');
findForm__dataForm.append(dataForm__findFirstNameInput);

// add the dataForm__findSurName

const dataForm__findSurName = document.createElement('label');
dataForm__findSurName.setAttribute('class', 'dataForm__findSurName');
dataForm__findSurName.setAttribute('for', 'findSurName');
dataForm__findSurName.innerHTML = 'SurName *';
findForm__dataForm.append(dataForm__findSurName);

// add the dataForm__findSurNameInput

const dataForm__findSurNameInput = document.createElement('input');
dataForm__findSurNameInput.setAttribute('class', 'dataForm__findSurNameInput');
dataForm__findSurNameInput.setAttribute('id', 'findSurName');
dataForm__findSurNameInput.setAttribute('type', 'text');
findForm__dataForm.append(dataForm__findSurNameInput);

// add the dataForm__findAge

const dataForm__findAge = document.createElement('label');
dataForm__findAge.setAttribute('class', 'dataForm__findAge');
dataForm__findAge.setAttribute('for', 'findAge');
dataForm__findAge.innerHTML = 'Age *';
findForm__dataForm.append(dataForm__findAge);

// add the dataForm__findAgeInput

const dataForm__findAgeInput = document.createElement('input');
dataForm__findAgeInput.setAttribute('class', 'dataForm__findAgeInput');
dataForm__findAgeInput.setAttribute('id', 'findAge');
dataForm__findAgeInput.setAttribute('type', 'number');
findForm__dataForm.append(dataForm__findAgeInput);

// add the dataForm__btnFind

const dataForm__btnFind = document.createElement('input');
dataForm__btnFind.setAttribute('class', 'dataForm__btnFind');
dataForm__btnFind.setAttribute('type', 'submit');
dataForm__btnFind.value = 'Find';
findForm__dataForm.append(dataForm__btnFind);

// add the inner__result

const inner__result = document.createElement('div');
inner__result.setAttribute('class', 'inner__result');
inner__result.setAttribute('id', 'result');
block2__inner.append(inner__result);

root.appendChild(container);


//functions

let myPerson = [];
let findPers = [];

function addPerson() {
    const firstName = document.getElementById('firstName').value;
    const surName = document.getElementById('surName').value;
    const age = document.getElementById('age').value;

    let data = firstName + ' ' + surName + ',' +  age;
    let oldValue = document.getElementById('list').innerHTML;
    let newValue = data + oldValue;
    
    myPerson.push(newValue);
    
    
    document.getElementById('list').innerHTML = myPerson;
}

function findPerson() {
    const fFirstName = document.getElementById('findFirstName');
    const fSurName = document.getElementById('findSurName');
    const fAge = document.getElementById('findAge');


    let findData = fFirstName + ' ' + fSurName + ',' +  fAge;
    let oldVal = document.getElementById('result').innerHTML;
    let curValue = findData + oldVal;
    
    myPerson.push(curValue);
    
    for(let i = 0; i < myPerson.length; i++) {
        for(let j = 0; j < findPers.length; j++) {
            if(findPers[j] == myPerson[i]){
                document.getElementById('result').innerHTML = myPerson;
            }
        }
    }
}


