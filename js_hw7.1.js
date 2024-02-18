var services = {
    "стрижка": 60,
    "гоління": 80 ,
    "Миття голови": 100 ,
     price : function () {
        let totalPrice = 0;
        for (let key in services) {
            if (typeof services[key] === 'number')
            totalPrice += services[key];
        }
        return totalPrice  ; 
    } ,

    minPrice: function() {
        let  minP = Infinity
        for (let key in services) {
            if (typeof services[key] === 'number')
           minP = Math.min(minP, services[key])
        }
        return minP;
    

    } ,
    maxPrice: function() {
        let maxP = 0
        for (let key in services) {
            if (typeof services[key] === 'number')
                maxP = Math.max(maxP, this[key]);
        }
        return maxP;
}
}

//services.price()

// services.minPrice()

// services.maxPrice() 

services['Жіночка стрижка'] = 1000
services['Дитяча стрижка'] = 30

//console.log(typeof services['Дитяча стрижка'])

 console.log(services.price())

 console.log(services.minPrice())

 console.log(services.maxPrice())