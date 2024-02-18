
let SupportForUkraine = {
    himars: 1000,
    f_16: 300,
    leopard:2000,
    getInfo:function() {
        for (let key in this) {
            if (typeof this[key] !== 'function') {
              console.log(key + ': ' + this[key]);
        }
    }
  }
}

  //obj.getInfo() 

  SupportForUkraine.leopard_2 = 1000

  SupportForUkraine.getInfo() 