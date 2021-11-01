let name_question = 'What is your name?';
let age_question = 'What is your age?'
let profession_question = 'What is your profession?'
let working_question= 'Are you worker?'
let second_group = 'lesson will start at 7PM';
let first_group = 'lesson will start tomorrow at 10AM';
let result;
let result2;
let result3;

// First student details

let name=prompt(name_question);
let age=prompt(name + " ! " + age_question);
let profession=prompt(name + " ! " + profession_question);
alert('The first student name is ' + name + '. She/He '
 + age + ' years old and she/he profession is ' +  profession);

// Second student details

let name2=prompt(name_question);
let age2=prompt(name2 + " ! " + age_question);
let profession2=prompt(name2 +  profession_question);
alert('The second student name is ' + name2 + '. She/He '
 + age2 + ' years old and she/he profession is ' +  profession2);

// Third student details

let name3=prompt(name_question);
let age3=prompt(name3 + " ! " + age_question);
let profession3=prompt(name3 + " ! " + profession_question);
alert('The third student name is ' + name3 + '. She/He '
 + age3 + ' years old and she/he profession is ' +  profession3);

// Lessons schedule details

let worker = confirm(name + " ! " + working_question);
worker == true? result=second_group : 
result = first_group;

let worker2 = confirm(name2 + " ! " + working_question);
worker2 == true? result2=second_group : 
result2 = first_group;

let worker3 = confirm(name3 + " ! " + working_question);
worker3 == true? result3 = second_group : 
result3 = first_group;

//Console section 

console.log('The first student name is ' + name + '. She/He '
 + age + ' years old,she/he profession is ' +  profession + ". "+ name +  "'s " + result);

console.log('The second student name is ' + name2 + '. She/He '
 + age2 + ' years old,she/he profession is ' +  profession2 + ". "+ name2 +  "'s " + result2);

console.log('The third student name is ' + name3 + '. She/He '
 + age3 + ' years old,she/he profession is ' +  profession3 + ". "+ name3 +  "'s " + result3);