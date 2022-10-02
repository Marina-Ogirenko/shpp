function Validator() {

this.validateEmail = function(email) {
    let regexp = /^[\w\d][-.+\w\d]{1,19}?@[.!$%&'*+/=?^_\w\d]{1,15}\.\w{1,5}/i;
return regexp.test(email);
}

this.validatePhone = function(phone) {
    if(phone.length>25) {
        return false;
    }

    let regexp_1 =/(\s|-)*(\+38)?(\s|-)*\(?(\s|-)*0((\s|-)*\d){2}\)?((\s|-)*\d){7}/g;
    return phone == phone.match(regexp_1);
}

this.validatePassword = function(password) {
    let regexp =/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z_]{8,}/g;
    return regexp.test(password);
}

};
validator = new Validator;

console.log(validator.validateEmail("firstpart@.se.enddeded"));
console.log(validator.validatePhone("+48 (0989) 567 8901"));
console.log(validator.validatePassword("C00l_Pass"));