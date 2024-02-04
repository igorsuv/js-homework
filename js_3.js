let input_values = '5'                          //тут ми вводимо значення котре потрібно перевести

let units = ''                                  // тут вказуемо од. виміру    (кілометри, години та кілограми),
switch(units) {
    case 'кілометри' :                                                      // якщо введені кілометри
        console.log(input_values + ' км це ' +input_values*1000 + ' м')     // то підставляємо значення з    input_values та множемо на 1000 
        break
    
    case 'години' :                                                          // якщо введено години
        console.log(input_values + ' год це ' +input_values*60 + ' хв')      // то підставляємо значення з    input_values та множемо на 60    
    
    case 'кілограми' :                                                        // якщо введено кілограми 
        console.log(input_values + ' кг це ' +input_values*1000 + ' г')      // то підставляємо значення з    input_values та множемо на 1000
        break
    
    default :
        console.log (units + ' це що?')                                        // при всих інших од виміру виводимо од. виміру units та конкатенуемо зі строкою ' це що?'
        
}