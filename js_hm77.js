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

var emailRegex = /^[a-zA-Z0-9._]+@(?!mail\.ru)(?:gmail|yahoo)\.com$/;

var goodEmails = [];
for (var i = 0; i < arr.length; i++) {
    var email = arr[i].email;
    if (email.match(emailRegex) !== null) {
        goodEmails.push(email);
    }
}

console.log(goodEmails);

