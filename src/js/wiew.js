const root = document.querySelector('div#root');

const block1 = document.createElement('div');

const form1 = document.createElement('div');
form1.setAttribute('class','inputform')

const form = document.createElement('form');

const fName = document.createElement('label');
fName.setAttribute('for', 'Fname');
fName.innerHTML = 'First Name';

const fNameInput = document.createElement('input');
fNameInput.setAttribute('id','Fname');
fNameInput.setAttribute('type','text');

const br = document.createElement('br');

const sName = document.createElement('label');
sName.setAttribute('for', 'Sname');
sName.innerHTML = 'Surname';

const sNameInput = document.createElement('input');
sNameInput.setAttribute('id','Sname');
sNameInput.setAttribute('type', 'text');

const age = document.createElement('label');
age.setAttribute('for','age');
age.innerHTML = 'Age';

const ageInput = document.createElement('input');
ageInput.setAttribute('id','age');
ageInput.setAttribute('type','number');


form.appendChild(fName);
form.appendChild(fNameInput);
form.appendChild(br);
form.appendChild(sName);
form.appendChild(sNameInput);
form.appendChild(age);
form.appendChild(ageInput);
form1.appendChild(form);
block1.appendChild(form1); 
root.appendChild(block1);


