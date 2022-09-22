function Product (productID, productName, productDescription, productPrice,
  productBrand, productQuantity, productActiveSize, productDate) {
    this.ID;
    this.description;
    this.name;
    this.price;
    this.brand;
    this.sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
    this.activeSize;
    this.quantity;
    this.date; 
    this.reviews = [];
    this.images=[]; //не сделано

this.setID = function(productID) {
  this.ID = productID;
}

this.setID(productID);

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

    this.setName(productName);

    this.getName = function() {
      return this.name;
    };

    this.setDescription = function(productDescription) {
      if(productDescription.length<5) {
        console.log("Имя слишком короткое, должно быть более 5 символов");
        return;
      }
      this.description = productDescription;
    };

    this.setDescription(productDescription);

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

    this.setPrice(productPrice);

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

        this.setBrand(productBrand);

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

    this.setQuantity(productQuantity);

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

      this.setActiveSize(productActiveSize);

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

  this.setDate(productDate);

  function Reviews (ID, date, comment, author, rating){
    this.ID;
    this.author;
    this.date;
    this.comment;
    this.rating = [];

    this.setID = function(productID) {
      this.ID = productID;
    }
    
    this.setID(ID);
    
    this.getID = function() {
      return this.ID;
    } 

    this.setAuthor = function(author) {

        if (typeof(author)!="string") {
            console.log("Введено число, введи имя!");
           return;
        }

        if (author.length < 3) {
          console.log("Имя слишком короткое, должно быть более 3 символов");
          return;
          }
        
          this.author = author;
        };

    this.setAuthor(author);

    this.getAuthor = function() {
      return this.author;
    };

    this.setDate = function(date) {
      if(Date.parse(date) != Nan) {
        this.date = new Date( Date.parse(date));
      }
      else 
      console.log("Введи дату в формате 'YYYY-MM-DDTHH:mm:ss.sss'");
    };
  
    this.getDate = function() {
      return this.date;
    };
  
    this.setDate(date);

    this.setComment = function(comment) {
      if(comment.length<5) {
        console.log("Имя слишком короткое, должно быть более 5 символов");
        return;
      }
      this.comment = comment;
    };

    this.setComment(comment);

    this.getComment = function() {
      return this.comment;
    };

    this.setRating = function(rating) {
      if(typeof(rating)!='number') {
        console.log("Должны быть цифры!");
        return;
      }

      //Associate Array - rating['key']=value; key one of 'service', 'price', 'value', 'quality'
       
      if(rating<=0 || rating>10000) {
          console.log("Некорректное значение!");
        return;
        }

        this.price=productPrice;
    }

    this.setPrice(productPrice);

    this.getPrice =function() {
      return this.price;
    }


  };
  
  this.addReview = function(ID, date, comment,  author, rating) {
this.reviews.push(new Reviews(ID, date, comment, author, rating));
  };
  
  this.addSize = function(newSize) {
    this.sizes.push(newSize);
  };

  }

  
  let oneProduct = new Product('Karl');
 // oneProduct.setName('Karell');
  oneProduct.setActiveSize('XS');
  console.log(oneProduct);
  console.log(oneProduct.getName());


  