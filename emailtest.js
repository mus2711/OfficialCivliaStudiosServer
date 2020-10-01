
// Due to the nature of my webapp, the only testing measaure I was looking to implement
// was the ensurance that valid emails were passed into the database and non-valid emails were filtered out
// this relies upon the application of the regex to filter the most amount of valid emails
// regexone from the test filtered 14/17 the possible emails, performing better than 
// regextwo which allowed 39 entries, 22 more than the 17 valid emails in the emailarray.
// import fc from "fast-check";

const describe = window.describe;
const it = window.it;
const fc = window.fastcheck;

const regexone = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
const regextwo =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const emailarray = [
    'email@example.com',
    'firstname.lastname@example.com',
    'email@subdomain.example.com',
    'firstname+lastname@example.com',
    'email@123.123.123.123',
    'email@[123.123.123.123]',
    '"email"@example.com',
    '1234567890@example.com',
    'email@example-one.com', 
    '_______@example.com',
    'email@example.name', 
    'email@example.museum', 
    'email@example.co.jp', 
    'firstname-lastname@example.com', 
    'much."more\ unusual"@example.com', 
    'very.unusual."@".unusual.com@example.com', 
    'very."(),:;<>[]".VERY."very@\\\\\\ \"very".unusual@strange.example.com', 


    'plainaddress', 
    '#@%^%#$@#$@#.com', 
    '@example.com', 
    'Joe Smith <email@example.com>', 
    'email.example.com', 
    'email@example@example.com', 
    '.email@example.com', 
    'email.@example.com', 
    'email..email@example.com', 
    'あいうえお@example.com', 
    'email@example.com (Joe Smith)', 
    'email@example', 
    'email@-example.com', 
    'email@example.web', 
    'email@111.222.333.44444', 
    'email@example..com', 
    'Abc..123@example.com', 
    '"(),:;<>[\]@example.com', 
    'just"not"right@example.com', 
    'this\ is\"really\"not\\\\allowed@example.com'
];
const validEmails = [
    'email@example.com', 
    'firstname.lastname@example.com', 
    'email@subdomain.example.com', 
    'firstname+lastname@example.com', 
    'email@123.123.123.123', 
    'email@[123.123.123.123]', 
    '"email"@example.com', 
    '1234567890@example.com', 
    'email@example-one.com', 
    '_______@example.com', 
    'email@example.name', 
    'email@example.museum', 
    'email@example.co.jp', 
    'firstname-lastname@example.com', 
    'much."more\ unusual"@example.com', 
    'very.unusual."@".unusual.com@example.com', 
    'very."(),:;<>[]".VERY."very@\\\\\\ \"very".unusual@strange.example.com', 
];
console.log(validEmails.length);
let passedArray = [];
const emailTest = function(emailarray, validemails, expression) {
    emailarray.forEach(function(subscriber) {
        if (expression.test(String(subscriber).toLowerCase()) === true) {
            passedArray.push(subscriber);
        };
    });
    console.log(passedArray);
    if (passedArray === validemails) {
        console.log(true);
        return true;
    } else {
        console.log(false);
        return false;
    };
};
emailTest(emailarray, validEmails, regexone);
emailTest(emailarray, validEmails, regextwo);

//perhaps a more trivial example but in an aim to implement property based testing
// I used fast-check to generate various arrays of strings, these arrays will contain 
// no valid emails and thus no strings should be passed.

const fcemailTest = function(emailarray, expression) {
    let theArray = [];
    emailarray.forEach(function(subscriber) {
        if (expression.test(String(subscriber).toLowerCase()) === true) {
            theArray.push(subscriber);
        };
    });
    if (theArray.length === 0) {
        return true;
    } else {
        return false;
    };
};

// Properties
describe("EmailProperties", () => {
	// string text always contains itself
	it("should not let in random strings as valid emails", () => {
        fc.assert(
            fc.property(
                fc.array(fc.string()),
                randomemailarray => fcemailTest(randomemailarray, regexone)));
    });
});
