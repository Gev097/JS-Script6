


// Խնդիր 2: Հատկությունների քանակի հաշվարկ
// Նկարագրություն: Գրել ֆունկցիա, որը կհաշվարկի տրված օբյեկտի հատկությունների քանակը։

function countProperties(obj) {
    return Object.keys(obj).length;
}

let exampleObject = {
    name: 'Alice',
    age: 30,
    profession: 'Engineer',
    city: 'New York'
};

console.log(countProperties(exampleObject)); 


//////////////////////////////////////////////////////////////////////////

// Խնդիր 4. Օբյեկտի պատճենում
// Նկարագրություն. Գրել ֆունկցիա, որը կվերադարձնի նոր օբյեկտ, որը տվյալ օբյեկտի պատճենն է:

function copyObject(obj) {
    return Object.assign({}, obj);
}

let originalObject = {
    name: 'Alice',
    age: 30,
    profession: 'Engineer',
    city: 'New York'
};

let copiedObject = copyObject(originalObject);

console.log(copiedObject); 
console.log(copiedObject === originalObject); 

//////////////////////////////////////////////////////////////////////////

// Խնդիր 5: Նոր հատկության ավելացում
// Նկարագրություն: Գրել ֆունկցիա, որը կավելացնի նոր հատկություն տրված օբյեկտին։

function addProperty(obj, key, value) {
    debugger
    obj[key] = value;
    return obj;
}

let exObject = {
    name: 'Alice',
    age: 30,
    profession: 'Engineer'
};

addProperty(exObject, 'city', 'New York');

console.log(exObject); 