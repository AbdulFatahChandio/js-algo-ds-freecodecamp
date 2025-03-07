function telephoneCheck(str) {
    // Regular expression to match valid US phone number formats
    const regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;
    return regex.test(str);
}

// Test cases
console.log(telephoneCheck("555-555-5555")); // true
console.log(telephoneCheck("1 555-555-5555")); // true
console.log(telephoneCheck("1 (555) 555-5555")); // true
console.log(telephoneCheck("5555555555")); // true
console.log(telephoneCheck("555-555-5555")); // true
console.log(telephoneCheck("(555)555-5555")); // true
console.log(telephoneCheck("1(555)555-5555")); // true
console.log(telephoneCheck("555-5555")); // false
console.log(telephoneCheck("5555555")); // false
console.log(telephoneCheck("1 555)555-5555")); // false
console.log(telephoneCheck("1 555 555 5555")); // true
console.log(telephoneCheck("1 456 789 4444")); // true
console.log(telephoneCheck("123**&!!asdf#")); // false
console.log(telephoneCheck("(6054756961)")); // false
console.log(telephoneCheck("2 (757) 622-7382")); // false
console.log(telephoneCheck("-1 (757) 622-7382")); // false
console.log(telephoneCheck("555)-555-5555")); // false
console.log(telephoneCheck("(555-555-5555")); // false
console.log(telephoneCheck("(555)5(55?)-5555")); // false
console.log(telephoneCheck("11 555-555-5555")); // false