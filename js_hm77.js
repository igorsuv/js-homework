var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    },
];

var emailRegex = /^[a-zA-Z0-9._]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


var goodEmails = [];
for (var i = 0; i < arr.length; i++) {
    var obj = arr[i];
    if (obj.email.match(emailRegex) !== null && (obj.email.endsWith('@gmail.com') || obj.email.endsWith('@yahoo.com'))) {
        goodEmails.push(obj);
    }
}

console.log(goodEmails);
