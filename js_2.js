// Для начала разобьем года на 3 группы "рік", "роки" ,"років"  
// значения запишим в масив 
// Каждому масиву созжадим переменную 


let years_1 =  [1, 21, 31, 41, 51, 61, 71, 81, 91]   // 'рік'

let years_2 =  [2, 3, 4, 22, 23, 24, 32, 33, 34, 
                42, 43, 44, 52, 53, 54, 62, 63, 
                64, 72, 73, 74, 82, 83, 84, 92, 93, 94]  // 'роки'


let years_3 =  [0, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 
                16, 17, 18, 19, 20, 25, 26, 27, 28, 29, 30, 
                35, 36, 37, 38, 39, 40, 45, 46, 47, 48, 49, 
                50, 55, 56, 57, 58, 59, 60, 65, 66, 67, 68, 
                69, 70, 75, 76, 77, 78, 79, 80, 85, 86, 87, 
                88, 89, 90, 95, 96, 97, 98, 99, 100]  // "років"


let input_years = prompt("Введіть скільки Вам років", "")  // для проверки в браузере
//let input_years = '10';  // для проверки в vscode. 

input_years = parseInt(input_years);   // Это мы не учили. Подмотрел в интернете т.к столкнулся с что все значения выводили в консоли  'Что-то пошло не так'. Проблема оказалась в том что значения вводимые через prompt передаются string  а его нельзя сравнить с 0.

// Далее будет использоватся метод includes(). 
//Мы его  не проходили(подсмотрел в интернете), я не додумался как правильно вывести 1 число из масива, если использовать только ту информацию которую мы проходили.
//

if (input_years < 0) {                                                       // проверка на то что возраст меньше 0 
       console.log('Вам не может быть меньше 0. Будьте внимательны!');
} else if (isNaN(input_years)) {                                            //  проверка на то что можно вводить только цифры
     console.log('Можно вводить только цифры!');
} else if (years_1.includes(input_years)) {                                 // проверка  что в масиве years_1 есть число введеное  из prompt 
      console.log("Вам " + input_years + ' рік');
}  else if (years_2.includes(input_years)) {                                 // проверка  что в масиве years_2 есть число введеное  из prompt 
    console.log("Вам " + input_years + ' роки');
}  else if (years_3.includes(input_years)) {                                  //  проверка  что в масиве years_3 есть число введеное  из prompt 
    console.log("Вам " + input_years + ' років');
} else {
    console.log('Что-то пошло не так! Или Вам больше 100 лет');
}

