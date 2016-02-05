/*
Your code goes here!
 */

/*
You might find you want to use RegEx. As this quiz is about setCustomValidity
and not RegEx, here are some RegEx patterns you might find useful:

match one of the required symbols: /[\!\@\#\$\%\^\&\*]/g
match a number: /[0-9]/g or /\d/g
match a lowercase letter: /[a-z]/g
match an uppercase letter: /[A-Z]/g
match a character that isn't allowed in this password: /[^A-z0-9\!\@\#\$\%\^\&\*]/g
 */

/*
Grabbing a few inputs to help you get started...
 */
var firstPasswordInput = document.querySelector('#first');
var secondPasswordInput = document.querySelector('#second');
var submit = document.querySelector('#submit');

/*
You'll probably find this function useful...
 */
submit.onclick = function() {
  var requiredSymbols = /[\!\@\#\$\%\^\&\*]/g;
  var lowercase = /[a-z]/g;
  var uppercase = /[A-Z]/g;
  var number = /[0-9]/g;
  var invalidCharacters = /[^A-z0-9\!\@\#\$\%\^\&\*]/g;
  var message = [];
  if (firstPasswordInput.value != secondPasswordInput.value) {
    message.push('Passwords must match.');
  } 
  if (firstPasswordInput.value.length < 16 || firstPasswordInput.value.length > 100) {
    message.push("16-100 characters (longer is better)")
  } if (!requiredSymbols.test(firstPasswordInput.value)) {
    message.push('Passwords must contain on of these symbols (@,#,$,%,^,&,*).');
  }  if (!number.test(firstPasswordInput.value)) {
    message.push('Passwords must contain At least one number.');
  } 
  if (!lowercase.test(firstPasswordInput.value)) {
    message.push('Passwords must contain At least one lowercase letter.');
  } 
  if (!uppercase.test(firstPasswordInput.value)) {
    message.push('Passwords must contain At least one uppercase letter.');
  }
   if (invalidCharacters.test(firstPasswordInput.value)) {
    message.push('Passwords contains illegal symbols.');
  } 
    firstPasswordInput.setCustomValidity(message.join(','));
    secondPasswordInput.setCustomValidity(message.join(','));
};
