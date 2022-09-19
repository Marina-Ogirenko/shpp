function Product (description, price, brand, activeSize,
    date) {
    this.ID = "1";
    this.description = description;
    this.name ="";
    this.price = price;
    this.brand = brand;
    this.sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
    this.activeSize = activeSize;
    this.quantity = quantity;
    this.date = date;
    this.reviews = [new Reviews(ID)];
    this.images='';

    this.setName = function(userName) {
        if (typeOf(userName)!="String") {
            console.log("Введено число, введи имя!");
            return;
        }


        if (userName.length < 3) {
            alert("Имя слишком короткое, должно быть более 3 символов");
            return;
          }
        
          this.name = userName;
        };


  }

  function Reviews (ID, date, comment){
    this.ID = ID;
    this.author = author;
    this.date = date;
    this.comment = comment;
    this.rating;
  }
  
 // let oneProduct = new Product("Jack");
  
  //alert(oneProduct.name); // Jack