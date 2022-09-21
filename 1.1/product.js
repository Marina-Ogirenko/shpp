function Product () {
    this.ID;
    this.description;
    this.name;
    this.price;
    this.brand;
    this.sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
    this.activeSize;
    this.quantity;
    this.date; 
   // this.reviews = [new Reviews(ID)];
    this.images=''; //не сделано

this.setID = function(productID) {
  this.ID = productID;
}

this.getID = function() {
  return this.ID;
}

    this.setName = function(productName) {
      console.log(`Hello, I'm ${productName}`)

        if (typeof(productName)!="string") {
            console.log("Введено число, введи имя!");
           return;
        }

        if (productName.length < 3) {
          console.log("Имя слишком короткое, должно быть более 3 символов");
          return;
          }
        
          this.name = productName;
        };

    this.getName = function() {
      return this.name;
    };

    this.setDescription = function(productDescription) {
      if(description.length<5) {
        console.log("Имя слишком короткое, должно быть более 5 символов");
        return;
      }
      this.description = productDescription;
    };

    this.getDescription = function() {
      return this.description;
    };

    this.setPrice = function(productPrice) {
      if(typeof(productPrice)!='number') {
        console.log("Должны быть цифры!");
        return;
      }

        if(productPrice<0 && productPrice>10000) {
          console.log("Некорректное значение!");
        return;
        }

        this.price=productPrice;
    }

    this.getPrice =function() {
      return this.price;
    }

    this.setBrand = function(productBrand) {

        if (typeof(productBrand)!="string") {
            console.log("Введено число, введи имя!");
           return;
        }

        if (productBrand.length < 3) {
          console.log("Имя слишком короткое, должно быть более 3 символов");
          return;
        }
        
        this.brand = productBrand;
        };

    this.getBrand = function() {
      return this.brand;
    };

    this.setQuantity = function(productQuantity) {
      if(typeof(productQuantity)!='number') {
        console.log("Должны быть цифры!");
        return;
      }

        if(productQuantity<0 && productQuantity>10000) {
          console.log("Некорректное значение!");
        return;
        }

        this.quantity=productQuantity;
    }

    this.getQuantity = function(){
      return this.quantity;
    }

    this.setActiveSize = function(productActiveSize) {

      for (let item of this.sizes) {
        if(item == productActiveSize) {
          this.activeSize = productActiveSize;
          return;
        }
      }
      
      if(this.activeSize != productActiveSize) {
        console.log("Такого значения не существует!");
        return;
      }
      };

  this.getActiveSize = function() {
    return this.activeSize;
  };

  this.setDate = function(productDate) {
    if(Date.parse(productDate) != Nan) {
      this.date = new Date( Date.parse(productDate));
    }
    else 
    console.log("Введи дату в формате 'YYYY-MM-DDTHH:mm:ss.sss'");
  };

  this.getDate = function() {
    return this.date;
  };

  /**function Reviews (ID, date, comment){
    this.ID = ID;
    this.author = author;
    this.date = date;
    this.comment = comment;
    this.rating;
  };
  /** */


  }

  
  let oneProduct = new Product();
  oneProduct.setName('Karell');
  oneProduct.setActiveSize('XS');
  console.log(oneProduct);
  console.log(oneProduct.getName());


  