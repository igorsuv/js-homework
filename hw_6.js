

function variantOne(height, yolochka) {
    let row_yolochka = '';
    for (let i = 1; i <= height; i++) {
        row_yolochka = row_yolochka + yolochka; 
        console.log(row_yolochka); 
    }
}

// Виклик функції
variantOne(5, '*');








function variantTwo(height, zirochka) {
    let line = '';
    let i = 1;
    while (i <= height) {
        line += zirochka; // Додаємо символ до рядка
        console.log(line); // Виводимо рядок
        i++;
    }
}

// Виклик функції
variantTwo(5, '*');


