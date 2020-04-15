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
// dataForm__btnSubmit.value = 'Add';
form__dataForm.append(dataForm__btnSubmit);

// add the inner__list

const inner__list = document.createElement('div');
inner__list.setAttribute('class', 'inner__list');
inner__list.setAttribute('id', 'list1');
block1__inner.append(inner__list);

// add the list__ul
const list__ul = document.createElement('ul');
list__ul.setAttribute('id', 'list');
inner__list.appendChild(list__ul);

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
dataForm__btnFind.setAttribute('onclick', 'searchName()');
findForm__dataForm.append(dataForm__btnFind);

// add the inner__result

const inner__result = document.createElement('div');
inner__result.setAttribute('class', 'inner__result');
inner__result.setAttribute('id', 'result');
block2__inner.append(inner__result);

root.appendChild(container);


//functions

var people = [];

function addPerson() {
    var sName = document.getElementById('firstName').value;
    var sSurname = document.getElementById('surName').value;
    var sAge = document.getElementById('age').value;
    if (!((sName === "") && (sSurname === "") && (sAge === ""))) {
        var p = {
            name: sName,
            surname: sSurname,
            age: sAge, 
        };
    people.push(p);
    
    for (i = 0; i < people.length; i++) {
        let oldlist = document.getElementById('list');
        console.log(oldlist);
        
    for (i = 0; i < people.length; i++) {
        var newlist = oldlist.innerHTML;
        var newlist = newlist + "<li>" + people[i].name + " " + people[i].surname  + " " +  people[i].age + "</li>";
    };
    oldlist.innerHTML = newlist;
    };
  };
};


function searchName() {
    var sNames = document.getElementById('findFirstName').value;
    var sSurnames = document.getElementById('findSurName').value;
    var sAges = document.getElementById('findAge').value;
    

    var resmassiv = [];

    for (var i = 0; i < people.length; i++) {
        if ((people[i].name === sNames && sNames !== "") || (people[i].surname === sSurnames && sSurnames !== "") || (people[i].age === sAges && sAges !== "")) {
            var newarray = {
                name: people[i].name,
                surname: people[i].surname,
                age: people[i].age,
            } 
        resmassiv.push(newarray);
        };
    };

        document.getElementById('result').innerHTML = "";
        var resultObject = resmassiv;
        searchList = resultObject.length;
        for (y = 0; y < searchList; y++) {
    
            oldlistsearch = document.getElementById('result');
            for (y = 0; y < searchList; y++) {
                var newlistsearch = document.getElementById('result').innerHTML;
                var newlistsearch = newlistsearch + "<li>" + resultObject[y].name + " " + resultObject[y].surname + " " + resultObject[y].age + "</li>";
            oldlistsearch.innerHTML = newlistsearch;
        };
     };
    };

    
    



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJ3aWV3LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHJvb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYjcm9vdCcpO1xyXG5cclxuLy8gYWRkIHRoZSBkaXYtY29udGFpbmVyXHJcblxyXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY29udGFpbmVyJyk7XHJcblxyXG4vLyBhZGQgdGhlIGNvbnRhaW5lcl9fYmxvY2sxXHJcblxyXG5jb25zdCBjb250YWluZXJfX2Jsb2NrMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5jb250YWluZXJfX2Jsb2NrMS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnY29udGFpbmVyX19ibG9jazEnKTtcclxuY29udGFpbmVyLmFwcGVuZChjb250YWluZXJfX2Jsb2NrMSk7XHJcblxyXG4vLyBhZGQgdGhlIGJsb2NrMV9fdGl0bGVcclxuXHJcbmNvbnN0IGJsb2NrMV9fdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuYmxvY2sxX190aXRsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2Jsb2NrMV9fdGl0bGUnKTtcclxuYmxvY2sxX190aXRsZS5pbm5lckhUTUwgPSAnSm9pbiB1cyEnO1xyXG5jb250YWluZXJfX2Jsb2NrMS5hcHBlbmQoYmxvY2sxX190aXRsZSk7XHJcblxyXG4vLyBhZGQgdGhlIGJsb2NrMV9faW5uZXJcclxuXHJcbmNvbnN0IGJsb2NrMV9faW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuYmxvY2sxX19pbm5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2Jsb2NrMV9faW5uZXInKTtcclxuY29udGFpbmVyX19ibG9jazEuYXBwZW5kKGJsb2NrMV9faW5uZXIpO1xyXG5cclxuLy8gYWRkIHRoZSBpbm5lcl9fZm9ybVxyXG5cclxuY29uc3QgaW5uZXJfX2Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuaW5uZXJfX2Zvcm0uc2V0QXR0cmlidXRlKCdjbGFzcycsICdpbm5lcl9fZm9ybScpO1xyXG5ibG9jazFfX2lubmVyLmFwcGVuZChpbm5lcl9fZm9ybSk7XHJcblxyXG4vLyBhZGQgdGhlIGZvcm1fX2RhdGFGb3JtXHJcblxyXG5jb25zdCBmb3JtX19kYXRhRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcclxuZm9ybV9fZGF0YUZvcm0uc2V0QXR0cmlidXRlKCdjbGFzcycsICdmb3JtX19kYXRhRm9ybScpO1xyXG5pbm5lcl9fZm9ybS5hcHBlbmQoZm9ybV9fZGF0YUZvcm0pO1xyXG5cclxuLy8gYWRkIHRoZSBkYXRhRm9ybV9fZmlyc3ROYW1lXHJcblxyXG5jb25zdCBkYXRhRm9ybV9fZmlyc3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuZGF0YUZvcm1fX2ZpcnN0TmFtZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2RhdGFGb3JtX19maXJzdE5hbWUnKTtcclxuZGF0YUZvcm1fX2ZpcnN0TmFtZS5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdmaXJzTmFtZScpO1xyXG5kYXRhRm9ybV9fZmlyc3ROYW1lLmlubmVySFRNTCA9ICdGaXJzdE5hbWUgKic7XHJcbmZvcm1fX2RhdGFGb3JtLmFwcGVuZChkYXRhRm9ybV9fZmlyc3ROYW1lKTtcclxuXHJcbi8vIGFkZCB0aGUgZGF0YUZvcm1fX2ZOYW1lSW5wdXRcclxuXHJcbmNvbnN0IGRhdGFGb3JtX19mTmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuZGF0YUZvcm1fX2ZOYW1lSW5wdXQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdkYXRhRm9ybV9fZk5hbWVJbnB1dCcpO1xyXG5kYXRhRm9ybV9fZk5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2ZpcnN0TmFtZScpO1xyXG5kYXRhRm9ybV9fZk5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xyXG5mb3JtX19kYXRhRm9ybS5hcHBlbmQoZGF0YUZvcm1fX2ZOYW1lSW5wdXQpO1xyXG5cclxuLy8gYWRkIHRoZSBkYXRhRm9ybV9fc3VyTmFtZVxyXG5cclxuY29uc3QgZGF0YUZvcm1fX3N1ck5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG5kYXRhRm9ybV9fc3VyTmFtZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2RhdGFGb3JtX19zdXJOYW1lJyk7XHJcbmRhdGFGb3JtX19zdXJOYW1lLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3N1ck5hbWUnKTtcclxuZGF0YUZvcm1fX3N1ck5hbWUuaW5uZXJIVE1MID0gJ1N1ck5hbWUgKic7XHJcbmZvcm1fX2RhdGFGb3JtLmFwcGVuZChkYXRhRm9ybV9fc3VyTmFtZSk7XHJcblxyXG4vLyBhZGQgdGhlIGRhdGFGb3JtX19zdXJOYW1lSW5wdXRcclxuXHJcbmNvbnN0IGRhdGFGb3JtX19zdXJOYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG5kYXRhRm9ybV9fc3VyTmFtZUlucHV0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZGF0YUZvcm1fX3N1ck5hbWVJbnB1dCcpO1xyXG5kYXRhRm9ybV9fc3VyTmFtZUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnc3VyTmFtZScpO1xyXG5kYXRhRm9ybV9fc3VyTmFtZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XHJcbmZvcm1fX2RhdGFGb3JtLmFwcGVuZChkYXRhRm9ybV9fc3VyTmFtZUlucHV0KTtcclxuXHJcbi8vIGFkZCB0aGUgZGF0YUZvcm1fX2FnZVxyXG5cclxuY29uc3QgZGF0YUZvcm1fX2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbmRhdGFGb3JtX19hZ2Uuc2V0QXR0cmlidXRlKCdjbGFzcycsICdkYXRhRm9ybV9fYWdlJyk7XHJcbmRhdGFGb3JtX19hZ2Uuc2V0QXR0cmlidXRlKCdmb3InLCAnYWdlJyk7XHJcbmRhdGFGb3JtX19hZ2UuaW5uZXJIVE1MID0gJ0FnZSAqJ1xyXG5mb3JtX19kYXRhRm9ybS5hcHBlbmQoZGF0YUZvcm1fX2FnZSk7XHJcblxyXG4vLyBhZGQgdGhlIGRhdGFGb3JtX19hZ2VJbnB1dFxyXG5cclxuY29uc3QgZGF0YUZvcm1fX2FnZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuZGF0YUZvcm1fX2FnZUlucHV0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZGF0YUZvcm1fX2FnZUlucHV0Jyk7XHJcbmRhdGFGb3JtX19hZ2VJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FnZScpO1xyXG5kYXRhRm9ybV9fYWdlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ251bWJlcicpO1xyXG5mb3JtX19kYXRhRm9ybS5hcHBlbmQoZGF0YUZvcm1fX2FnZUlucHV0KTtcclxuXHJcbi8vIGFkZCB0aGUgZGF0YUZvcm1fX2J0blN1Ym1pdFxyXG5cclxuY29uc3QgZGF0YUZvcm1fX2J0blN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbmRhdGFGb3JtX19idG5TdWJtaXQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdkYXRhRm9ybV9fYnRuU3VibWl0Jyk7XHJcbmRhdGFGb3JtX19idG5TdWJtaXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xyXG5kYXRhRm9ybV9fYnRuU3VibWl0LnNldEF0dHJpYnV0ZSgnb25jbGljaycsICdhZGRQZXJzb24oKScpO1xyXG4vLyBkYXRhRm9ybV9fYnRuU3VibWl0LnZhbHVlID0gJ0FkZCc7XHJcbmZvcm1fX2RhdGFGb3JtLmFwcGVuZChkYXRhRm9ybV9fYnRuU3VibWl0KTtcclxuXHJcbi8vIGFkZCB0aGUgaW5uZXJfX2xpc3RcclxuXHJcbmNvbnN0IGlubmVyX19saXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbmlubmVyX19saXN0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaW5uZXJfX2xpc3QnKTtcclxuaW5uZXJfX2xpc3Quc2V0QXR0cmlidXRlKCdpZCcsICdsaXN0MScpO1xyXG5ibG9jazFfX2lubmVyLmFwcGVuZChpbm5lcl9fbGlzdCk7XHJcblxyXG4vLyBhZGQgdGhlIGxpc3RfX3VsXHJcbmNvbnN0IGxpc3RfX3VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxubGlzdF9fdWwuc2V0QXR0cmlidXRlKCdpZCcsICdsaXN0Jyk7XHJcbmlubmVyX19saXN0LmFwcGVuZENoaWxkKGxpc3RfX3VsKTtcclxuXHJcbi8vIGFkZCB0aGUgY29udGFpbmVyX19ibG9jazJcclxuXHJcbmNvbnN0IGNvbnRhaW5lcl9fYmxvY2syID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbmNvbnRhaW5lcl9fYmxvY2syLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY29udGFpbmVyX19ibG9jazInKTtcclxuY29udGFpbmVyLmFwcGVuZChjb250YWluZXJfX2Jsb2NrMik7XHJcblxyXG4vLyBhZGQgdGhlIGJsb2NrMl9fdGl0bGVcclxuXHJcbmNvbnN0IGJsb2NrMl9fdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuYmxvY2syX190aXRsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2Jsb2NrMl9fdGl0bGUnKTtcclxuYmxvY2syX190aXRsZS5pbm5lckhUTUwgPSAnRmluZCBhIFBlcnNvbic7XHJcbmNvbnRhaW5lcl9fYmxvY2syLmFwcGVuZChibG9jazJfX3RpdGxlKTtcclxuXHJcbi8vIGFkZCB0aGUgYmxvY2syX19pbm5lclxyXG5cclxuY29uc3QgYmxvY2syX19pbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5ibG9jazJfX2lubmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYmxvY2syX19pbm5lcicpO1xyXG5jb250YWluZXJfX2Jsb2NrMi5hcHBlbmQoYmxvY2syX19pbm5lcik7XHJcblxyXG4vLyBhZGQgdGhlIGlubmVyX19maW5kRm9ybVxyXG5cclxuY29uc3QgaW5uZXJfX2ZpbmRGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbmlubmVyX19maW5kRm9ybS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2lubmVyX19maW5kRm9ybScpO1xyXG5ibG9jazJfX2lubmVyLmFwcGVuZChpbm5lcl9fZmluZEZvcm0pO1xyXG5cclxuLy8gYWRkIHRoZSBmaW5kRm9ybV9fZGF0YUZvcm1cclxuXHJcbmNvbnN0IGZpbmRGb3JtX19kYXRhRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcclxuZmluZEZvcm1fX2RhdGFGb3JtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZmluZEZvcm1fX2RhdGFGb3JtJyk7XHJcbmlubmVyX19maW5kRm9ybS5hcHBlbmQoZmluZEZvcm1fX2RhdGFGb3JtKTtcclxuXHJcbi8vIGFkZCB0aGUgZGF0YUZvcm1fX2ZpbmRGaXN0TmFtZVxyXG5cclxuY29uc3QgZGF0YUZvcm1fX2ZpbmRGaXJzdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG5kYXRhRm9ybV9fZmluZEZpcnN0TmFtZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2RhdGFGb3JtX19maW5kRmlyc3ROYW1lJyk7XHJcbmRhdGFGb3JtX19maW5kRmlyc3ROYW1lLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2ZpbmRGaXJzdE5hbWUnKTtcclxuZGF0YUZvcm1fX2ZpbmRGaXJzdE5hbWUuaW5uZXJIVE1MID0gJ0ZpcnN0TmFtZSAqJztcclxuZmluZEZvcm1fX2RhdGFGb3JtLmFwcGVuZChkYXRhRm9ybV9fZmluZEZpcnN0TmFtZSk7XHJcblxyXG4vLyBhZGQgdGhlIGRhdGFGb3JtX19maW5kRmlyc3ROYW1lSW5wdXRcclxuXHJcbmNvbnN0IGRhdGFGb3JtX19maW5kRmlyc3ROYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG5kYXRhRm9ybV9fZmluZEZpcnN0TmFtZUlucHV0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZGF0YUZvcm1fX2ZpbmRGaXJzdE5hbWVJbnB1dCcpO1xyXG5kYXRhRm9ybV9fZmluZEZpcnN0TmFtZUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnZmluZEZpcnN0TmFtZScpO1xyXG5kYXRhRm9ybV9fZmluZEZpcnN0TmFtZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XHJcbmZpbmRGb3JtX19kYXRhRm9ybS5hcHBlbmQoZGF0YUZvcm1fX2ZpbmRGaXJzdE5hbWVJbnB1dCk7XHJcblxyXG4vLyBhZGQgdGhlIGRhdGFGb3JtX19maW5kU3VyTmFtZVxyXG5cclxuY29uc3QgZGF0YUZvcm1fX2ZpbmRTdXJOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuZGF0YUZvcm1fX2ZpbmRTdXJOYW1lLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZGF0YUZvcm1fX2ZpbmRTdXJOYW1lJyk7XHJcbmRhdGFGb3JtX19maW5kU3VyTmFtZS5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdmaW5kU3VyTmFtZScpO1xyXG5kYXRhRm9ybV9fZmluZFN1ck5hbWUuaW5uZXJIVE1MID0gJ1N1ck5hbWUgKic7XHJcbmZpbmRGb3JtX19kYXRhRm9ybS5hcHBlbmQoZGF0YUZvcm1fX2ZpbmRTdXJOYW1lKTtcclxuXHJcbi8vIGFkZCB0aGUgZGF0YUZvcm1fX2ZpbmRTdXJOYW1lSW5wdXRcclxuXHJcbmNvbnN0IGRhdGFGb3JtX19maW5kU3VyTmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuZGF0YUZvcm1fX2ZpbmRTdXJOYW1lSW5wdXQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdkYXRhRm9ybV9fZmluZFN1ck5hbWVJbnB1dCcpO1xyXG5kYXRhRm9ybV9fZmluZFN1ck5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2ZpbmRTdXJOYW1lJyk7XHJcbmRhdGFGb3JtX19maW5kU3VyTmFtZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XHJcbmZpbmRGb3JtX19kYXRhRm9ybS5hcHBlbmQoZGF0YUZvcm1fX2ZpbmRTdXJOYW1lSW5wdXQpO1xyXG5cclxuLy8gYWRkIHRoZSBkYXRhRm9ybV9fZmluZEFnZVxyXG5cclxuY29uc3QgZGF0YUZvcm1fX2ZpbmRBZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG5kYXRhRm9ybV9fZmluZEFnZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2RhdGFGb3JtX19maW5kQWdlJyk7XHJcbmRhdGFGb3JtX19maW5kQWdlLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2ZpbmRBZ2UnKTtcclxuZGF0YUZvcm1fX2ZpbmRBZ2UuaW5uZXJIVE1MID0gJ0FnZSAqJztcclxuZmluZEZvcm1fX2RhdGFGb3JtLmFwcGVuZChkYXRhRm9ybV9fZmluZEFnZSk7XHJcblxyXG4vLyBhZGQgdGhlIGRhdGFGb3JtX19maW5kQWdlSW5wdXRcclxuXHJcbmNvbnN0IGRhdGFGb3JtX19maW5kQWdlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG5kYXRhRm9ybV9fZmluZEFnZUlucHV0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZGF0YUZvcm1fX2ZpbmRBZ2VJbnB1dCcpO1xyXG5kYXRhRm9ybV9fZmluZEFnZUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnZmluZEFnZScpO1xyXG5kYXRhRm9ybV9fZmluZEFnZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdudW1iZXInKTtcclxuZmluZEZvcm1fX2RhdGFGb3JtLmFwcGVuZChkYXRhRm9ybV9fZmluZEFnZUlucHV0KTtcclxuXHJcbi8vIGFkZCB0aGUgZGF0YUZvcm1fX2J0bkZpbmRcclxuXHJcbmNvbnN0IGRhdGFGb3JtX19idG5GaW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuZGF0YUZvcm1fX2J0bkZpbmQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdkYXRhRm9ybV9fYnRuRmluZCcpO1xyXG5kYXRhRm9ybV9fYnRuRmluZC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XHJcbmRhdGFGb3JtX19idG5GaW5kLnZhbHVlID0gJ0ZpbmQnO1xyXG5kYXRhRm9ybV9fYnRuRmluZC5zZXRBdHRyaWJ1dGUoJ29uY2xpY2snLCAnc2VhcmNoTmFtZSgpJyk7XHJcbmZpbmRGb3JtX19kYXRhRm9ybS5hcHBlbmQoZGF0YUZvcm1fX2J0bkZpbmQpO1xyXG5cclxuLy8gYWRkIHRoZSBpbm5lcl9fcmVzdWx0XHJcblxyXG5jb25zdCBpbm5lcl9fcmVzdWx0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbmlubmVyX19yZXN1bHQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdpbm5lcl9fcmVzdWx0Jyk7XHJcbmlubmVyX19yZXN1bHQuc2V0QXR0cmlidXRlKCdpZCcsICdyZXN1bHQnKTtcclxuYmxvY2syX19pbm5lci5hcHBlbmQoaW5uZXJfX3Jlc3VsdCk7XHJcblxyXG5yb290LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XHJcblxyXG5cclxuLy9mdW5jdGlvbnNcclxuXHJcbnZhciBwZW9wbGUgPSBbXTtcclxuXHJcbmZ1bmN0aW9uIGFkZFBlcnNvbigpIHtcclxuICAgIHZhciBzTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaXJzdE5hbWUnKS52YWx1ZTtcclxuICAgIHZhciBzU3VybmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdXJOYW1lJykudmFsdWU7XHJcbiAgICB2YXIgc0FnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZ2UnKS52YWx1ZTtcclxuICAgIGlmICghKChzTmFtZSA9PT0gXCJcIikgJiYgKHNTdXJuYW1lID09PSBcIlwiKSAmJiAoc0FnZSA9PT0gXCJcIikpKSB7XHJcbiAgICAgICAgdmFyIHAgPSB7XHJcbiAgICAgICAgICAgIG5hbWU6IHNOYW1lLFxyXG4gICAgICAgICAgICBzdXJuYW1lOiBzU3VybmFtZSxcclxuICAgICAgICAgICAgYWdlOiBzQWdlLCBcclxuICAgICAgICB9O1xyXG4gICAgcGVvcGxlLnB1c2gocCk7XHJcbiAgICBcclxuICAgIGZvciAoaSA9IDA7IGkgPCBwZW9wbGUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsZXQgb2xkbGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXN0Jyk7XHJcbiAgICAgICAgY29uc29sZS5sb2cob2xkbGlzdCk7XHJcbiAgICAgICAgXHJcbiAgICBmb3IgKGkgPSAwOyBpIDwgcGVvcGxlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdmFyIG5ld2xpc3QgPSBvbGRsaXN0LmlubmVySFRNTDtcclxuICAgICAgICB2YXIgbmV3bGlzdCA9IG5ld2xpc3QgKyBcIjxsaT5cIiArIHBlb3BsZVtpXS5uYW1lICsgXCIgXCIgKyBwZW9wbGVbaV0uc3VybmFtZSAgKyBcIiBcIiArICBwZW9wbGVbaV0uYWdlICsgXCI8L2xpPlwiO1xyXG4gICAgfTtcclxuICAgIG9sZGxpc3QuaW5uZXJIVE1MID0gbmV3bGlzdDtcclxuICAgIH07XHJcbiAgfTtcclxufTtcclxuXHJcblxyXG5mdW5jdGlvbiBzZWFyY2hOYW1lKCkge1xyXG4gICAgdmFyIHNOYW1lcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaW5kRmlyc3ROYW1lJykudmFsdWU7XHJcbiAgICB2YXIgc1N1cm5hbWVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbmRTdXJOYW1lJykudmFsdWU7XHJcbiAgICB2YXIgc0FnZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmluZEFnZScpLnZhbHVlO1xyXG4gICAgXHJcblxyXG4gICAgdmFyIHJlc21hc3NpdiA9IFtdO1xyXG5cclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGVvcGxlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKChwZW9wbGVbaV0ubmFtZSA9PT0gc05hbWVzICYmIHNOYW1lcyAhPT0gXCJcIikgfHwgKHBlb3BsZVtpXS5zdXJuYW1lID09PSBzU3VybmFtZXMgJiYgc1N1cm5hbWVzICE9PSBcIlwiKSB8fCAocGVvcGxlW2ldLmFnZSA9PT0gc0FnZXMgJiYgc0FnZXMgIT09IFwiXCIpKSB7XHJcbiAgICAgICAgICAgIHZhciBuZXdhcnJheSA9IHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IHBlb3BsZVtpXS5uYW1lLFxyXG4gICAgICAgICAgICAgICAgc3VybmFtZTogcGVvcGxlW2ldLnN1cm5hbWUsXHJcbiAgICAgICAgICAgICAgICBhZ2U6IHBlb3BsZVtpXS5hZ2UsXHJcbiAgICAgICAgICAgIH0gXHJcbiAgICAgICAgcmVzbWFzc2l2LnB1c2gobmV3YXJyYXkpO1xyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG5cclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0JykuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICB2YXIgcmVzdWx0T2JqZWN0ID0gcmVzbWFzc2l2O1xyXG4gICAgICAgIHNlYXJjaExpc3QgPSByZXN1bHRPYmplY3QubGVuZ3RoO1xyXG4gICAgICAgIGZvciAoeSA9IDA7IHkgPCBzZWFyY2hMaXN0OyB5KyspIHtcclxuICAgIFxyXG4gICAgICAgICAgICBvbGRsaXN0c2VhcmNoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3VsdCcpO1xyXG4gICAgICAgICAgICBmb3IgKHkgPSAwOyB5IDwgc2VhcmNoTGlzdDsgeSsrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbmV3bGlzdHNlYXJjaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN1bHQnKS5pbm5lckhUTUw7XHJcbiAgICAgICAgICAgICAgICB2YXIgbmV3bGlzdHNlYXJjaCA9IG5ld2xpc3RzZWFyY2ggKyBcIjxsaT5cIiArIHJlc3VsdE9iamVjdFt5XS5uYW1lICsgXCIgXCIgKyByZXN1bHRPYmplY3RbeV0uc3VybmFtZSArIFwiIFwiICsgcmVzdWx0T2JqZWN0W3ldLmFnZSArIFwiPC9saT5cIjtcclxuICAgICAgICAgICAgb2xkbGlzdHNlYXJjaC5pbm5lckhUTUwgPSBuZXdsaXN0c2VhcmNoO1xyXG4gICAgICAgIH07XHJcbiAgICAgfTtcclxuICAgIH07XHJcblxyXG4gICAgXHJcbiAgICBcclxuXHJcblxyXG5cclxuIl0sImZpbGUiOiJ3aWV3LmpzIn0=
