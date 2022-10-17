class AbstractProduct {

  static #takenID = [];

    constructor(productID, productName, productDescription, productPrice,
        productBrand, productQuantity, productActiveSize, productDate, pathImg) {
        if (this.constructor.name === 'AbstractProduct') {
            throw new Error(`${this.constructor.name}: can not create instance of abstract class`);
        }
        
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
    this.images = [];


    if (pathImg != undefined) {
        this.setImages(pathImg);
      }

      if (productID != undefined) {
        this.setID(productID);
      }
      
     if (productName != undefined) {
        this.setName(productName);
      }

      if (productDescription != undefined) {
        this.setDescription(productDescription);
      }

      if (productPrice != undefined) {
        this.setPrice(productPrice);
      }

      if (productBrand != undefined) {
        this.setBrand(productBrand);
      }

      if (productQuantity != undefined) {
        this.setQuantity(productQuantity);
      }

      if (productActiveSize != undefined) {
        this.setActiveSize(productActiveSize);
      }

      if (productActiveSize != undefined) {
        this.setActiveSize(productActiveSize);
      }

      if (productDate != undefined) {
        this.setDate(productDate);
      }


    }

    setImages (pathImg) {
        this.images.push(pathImg);
      }
    
    getImage (numberImg) {
        if (numberImg == undefined) {
          return (this.images[0])
        }
    
        if (numberImg < this.images.length) {
          return (this.images[numberImg])
        }
        console.log("Картинки с таким ключем не существует");
      }


     setID (productID) {
      if(AbstractProduct.#takenID.includes(productID)) {
        console.log("Такой айди уже существует");
      return;
      }
        this.ID = productID;
        AbstractProduct.#takenID.push(productID);
      }
    
    
      getID () {
        return this.ID;
      }
    
      setName (productName) {
        if (typeof (productName) != "string") {
          console.log("Введено число, введи имя field Name!");
          return;
        }
    
        if (productName.length < 3) {
          console.log("Имя слишком короткое, должно быть более 3 символов field Name");
          return;
        }
    
        this.name = productName;
      }

      getName () {
        return this.name;
      }

      setDescription (productDescription) {
        if (productDescription.length < 5) {
          console.log("Имя слишком короткое, должно быть более 5 символов field Description");
          return;
        }
        this.description = productDescription;
      }
    
    
    getDescription () {
        return this.description;
      }
    
     setPrice (productPrice) {
        if (typeof (productPrice) != 'number') {
          console.log("Должны быть цифры! field Price");
          return;
        }
    
        if (productPrice < 0 && productPrice > 10000) {
          console.log("Некорректное значение! field Price");
          return;
        }
    
        this.price = productPrice;
      }
    
     getPrice () {
        return this.price;
      }

    setBrand (productBrand) {
        if (typeof (productBrand) != "string") {
          console.log("Введено число, введи имя! field Brand");
          return;
        }
    
        if (productBrand.length < 3) {
          console.log("Имя слишком короткое, должно быть более 3 символов. field Brand");
          return;
        }
    
        this.brand = productBrand;
      }
    
    getBrand () {
        return this.brand;
      };
    
      setQuantity (productQuantity) {
        if (typeof (productQuantity) != 'number') {
          console.log("Должны быть цифры! Field Quantity");
          return;
        }
    
        if (productQuantity < 0 && productQuantity > 10000) {
          console.log("Некорректное значение! Field Quantity");
          return;
        }
    
        this.quantity = productQuantity;
      }
    
      getQuantity () {
        return this.quantity;
      }

      setActiveSize (productActiveSize) {
        for (let item of this.sizes) {
          if (item == productActiveSize) {
            this.activeSize = productActiveSize;
            return;
          }
        }
    
        if (this.activeSize != productActiveSize) {
          console.log("Такого значения не существует! Field activeSize");
          return;
        }
      }
    
      getActiveSize () {
        return this.activeSize;
      }
    
      getSizes () {
        return this.sizes;
      }
    
      setDate (productDate) {
        if (Date.parse(productDate) != NaN) {
          this.date = new Date(Date.parse(productDate));
        }
        else
          console.log("Введи дату в формате 'YYYY-MM-DDTHH:mm:ss.sss' field Date");
      }
    
      getDate () {
        return this.date;
      }
    

      addReview (ID, date, comment, author, keyRating, valueRating) {
        this.reviews.push(new Reviews(ID, date, comment, author, keyRating, valueRating));
      }
    
      addSize (newSize) {
        this.sizes.push(newSize);
      }
    
      deleteSize (delitedSize) {
        for (let i = 0; i < this.sizes.length; i++) {
          if (this.sizes[i] == delitedSize) {
            this.sizes.splice(i, 1);
            return;
          }
        }
        console.log('Такого значения не существует! deleteSize');
      }
    
    
      getReviewByID (getReviewID) {
        for (let i = 0; i < this.reviews.length; i++) {
          if (this.reviews[i].IDrew == getReviewID) {
            return this.reviews[i];
          }
        }
        console.log("Такого ключа не существует! getReviewByID");
      }
    
      deleteReview (deleteRevID) {
        for (let i = 0; i < this.reviews.length; i++) {
    
          if (this.reviews[i].IDrew == deleteRevID) {
            this.reviews.splice(i, 1);
            return;
          }
        }
        console.log("Такого ключа не существует! deleteReview");
      }
    
      getAverageRating () {
        let countRating = 0;
        let summRating = 0;
        for (let i = 0; i < this.reviews.length; i++) {
          for (let key in this.reviews[i].rating) {
            if (this.reviews[i].rating[key] != null) {
              summRating += this.reviews[i].rating[key];
              ++countRating;
            }
          }
    
        }
        if (summRating != 0) {
          return summRating / countRating;
        }
        console.log('Отзывов нет!')
      }

      getFullInformation() {
        for (let property in this) {
          console.log(`${property} -  ${this[property]} `);
        }
      }

      getPriceForQuantity(int) {
        console.log(`$${int*this.price}`);
      }
    
      getter_setter (parametr, valueOfParametr) {
        if(parametr in this) {
          if(valueOfParametr!=undefined) {
            this[parametr] = valueOfParametr;
          }
          else return this[parametr];
        }
      }

}

function searchProducts(arrayProducts, searchingText) {

  let rezultSearch = [];

  let indexOfAnySinbol = searchingText.indexOf('*');

  for (let i = 0; i < arrayProducts.length; i++) {
    if (indexOfAnySinbol == -1 && directSearch(arrayProducts[i], searchingText)) {
      rezultSearch.push(arrayProducts[i]);
    }
    else {
      if (advancedSearch(arrayProducts[i], searchingText, indexOfAnySinbol)) {
        rezultSearch.push(arrayProducts[i]);
      }
    }
  }

  return rezultSearch;
}

function directSearch(arrayProducts, searchingText) {
  let nameSearch = arrayProducts.getName().includes(searchingText);
  let descriptionSearch = arrayProducts.getDescription().includes(searchingText);

  return (nameSearch || descriptionSearch);
}

function advancedSearch(arrayProducts, searchingText, indexOfAnySinbol) {
  let firstPartText = searchingText.slice(0, indexOfAnySinbol);
  let secondPartText = searchingText.slice(indexOfAnySinbol + 1);

  findSearch = function (field) {
    if (field.indexOf(firstPartText) != -1) {
      return field.includes(secondPartText, field.indexOf(firstPartText));
    }
  }
  return (findSearch(arrayProducts.getName()) || findSearch(arrayProducts.getDescription()));
}

function sortProducts(arrayProducts, sortRule) {
  switch (sortRule) {
    case 'ID':
      return arrayProducts.sort((a, b) => a.ID - b.ID);
    case 'price':
      return arrayProducts.sort((a, b) => a.price - b.price);
    case 'name':
      return arrayProducts.sort((a, b) => {
        const nameA = a.name.toUpperCase(); 
        const nameB = b.name.toUpperCase(); 
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }

        return 0;
      });

    default: console.log('Такого параметра сортировки нет!');
  }
}


function Reviews(ID, date, comment, author, keyRating, valueRating) {
    this.IDrew;
    this.author;
    this.date;
    this.comment;
    this.rating = {
      'service': null,
      'price': null,
      'value': null,
      'quality': null
    }

    if (keyRating != undefined && valueRating != undefined) {
        this.setRating(keyRating, valueRating);
      }

      if (ID != undefined) {
        this.setID(ID);
      }

      if (author != undefined) {
        this.setAuthor(author);
      }

      if (date != undefined) {
        this.setDate(date);
      }

      if (comment != undefined) {
        this.setComment(comment);
      }
  }

  Object.assign(Reviews.prototype, {

    setRating (keyRating, valueRating) {
        if ((valueRating <= 0 || valueRating > 10)) {
          console.log("Некорректное значение! Field Rating");
          return;
        }
        if (this.rating.hasOwnProperty(keyRating)) {
          this.rating[keyRating] = valueRating;
          return;
        }
        console.log("Такого ключа нет! Field Rating")
      },
  
      getRating () {
        return rating.keyRating;
      },
  
      setID (ID) {
        this.IDrew = ID;
      },
  
      getID () {
        return this.IDrew;
      },
  
      setAuthor (author) {
        if (typeof (author) != "string") {
          console.log("Введено число, введи имя! Field Author");
          return;
        }
  
        if (author.length < 3) {
          console.log("Имя слишком короткое, должно быть более 3 символов. Field Author");
          return;
        }
  
        this.author = author;
      },
  
      getAuthor () {
        return this.author;
      },
  
      setDate (date) {
        if (Date.parse(date) != NaN) {
          this.date = new Date(Date.parse(date));
        }
        else
          console.log("Введи дату в формате 'YYYY-MM-DDTHH:mm:ss.sss'");
      },
  
      getDate () {
        return this.date;
      },
  
        setComment (comment) {
        if (comment.length < 5) {
          console.log("Имя слишком короткое, должно быть более 5 символов. Field Coment");
          return;
        }
        this.comment = comment;
      },

      getComment () {
        return this.comment;
      }
    })



class Clothes extends AbstractProduct {
    constructor(clothesMaterial, clothesColor, productID, productName, productDescription, productPrice,
      productBrand, productQuantity, productActiveSize, productDate, pathImg) {
        super(productID, productName, productDescription, productPrice,
          productBrand, productQuantity, productActiveSize, productDate, pathImg);

        this.material = clothesMaterial;
        this.color = clothesColor;

        if (clothesMaterial!=undefined) {
          this.setMaterial(clothesMaterial);
        }

        if (clothesColor!=undefined) {
          this.setColor(clothesColor);
        }

    }
    setMaterial (clothesMaterial) {
      if (typeof (clothesMaterial) != "string") {
        console.log("Введено число, введи строку!");
        return;
      }
  
      if (clothesMaterial.length < 3) {
        console.log("Значение слишком короткое, должно быть более 3 символов");
        return;
      }
  
      this.material = clothesMaterial;
    }
  
    getMaterial () {
      return this.material;
    }

    setColor (clothesColor) {
      if (typeof (clothesColor) != "string") {
        console.log("Введено число, введи строку!");
        return;
      }
  
      if (clothesColor.length < 3) {
        console.log("Значение слишком короткое, должно быть более 3 символов");
        return;
      }
  
      this.color = clothesColor;
    }
  
    getColor () {
      return this.color;
    }

}

class Electronics extends AbstractProduct {
    constructor(electonicsWarranty,electonicsPower,productID, productName, productDescription, productPrice,
      productBrand, productQuantity, productActiveSize, productDate, pathImg) {
        super(productID, productName, productDescription, productPrice,
          productBrand, productQuantity, productActiveSize, productDate, pathImg);

        this.warranty;
        this.power;

        if(electonicsPower!=undefined){
          this.setPower(electonicsPower);
        }

        if(electonicsWarranty!=undefined) {
          this.setWarranty(electonicsWarranty);
        }
    }

    setWarranty (electonicsWarranty) {
    if (typeof (electonicsWarranty) != 'number') {
      console.log("Должны быть цифры! field Price");
      return;
    }

    if (electonicsWarranty < 0 && electonicsWarranty > 10000) {
      console.log("Некорректное значение! field Price");
      return;
    }

    this.warranty = electonicsWarranty;
  }

  getWarranty (){
    return this.warranty;
  }

  setPower(electonicsPower) {
    if (typeof (electonicsPower) != 'number') {
      console.log("Должны быть цифры! field Price");
      return;
    }

    if (electonicsPower < 0 && electonicsPower > 10000) {
      console.log("Некорректное значение! field Price");
      return;
    }

    this.power = electonicsPower;
  }

}


  // ==========TEST===============
  let products = [
    new Clothes('Coton', 'Grey',1, 'T-shirt', 'sunset over the oceean', 49, 'Kal', 10, 'S', 10 - 10 - 2022,
      'C:\Users\Марина\Pictures\/t-shots.jpg'),
  
    new Clothes('Cottton', 'Green',2, 'ocean', 'helllo', 81, 'Kal', 8, 'S', 10 - 12 - 2022,
      'C:\Users\Марина\Pictures\/t-shots.jpg'),
  
    new Clothes('Coton', 'Red',3, 'sunset', 'helllo my ocean!', 32, 'Kal', 6, 'S', 10 - 12 - 2022,
      'C:\Users\Марина\Pictures\/t-shots.jpg')
  ];
 // console.log(oneProduct);
  
  //console.log(searchProducts(products, 'sunset'));
  console.log(sortProducts(products, 'price'));
  
  
  //let oneProduct = new Clothes('Coton', 'Grey', 1, 'T-shirt', 'sunset over the ocean', 49, 'Kal', 10, 'S', 10 - 10 - 2022,
  //  'C:\Users\Марина\Pictures\/t-shots.jpg');
  //oneProduct.addReview(1, 10 - 09 - 2022, 'Hello', 'abc', 'price', 10);
  //oneProduct.addReview(2, 10 - 07 - 2022, 'Helloooo', 'avtor', 'value', 7);

 // oneProduct.getFullInformation();
 // oneProduct.getPriceForQuantity(5);
  //console.log(oneProduct.getReviewByID(2));
  //console.log('/n');
  //console.log(oneProduct.getReviewByID(1));



  //console.log(oneProduct.getImage());
  //oneProduct.setImages('C:\Users\Марина\Pictures\/t.jpg');
  //console.log(oneProduct.getImage(1));
 // oneProduct.addSize('MM');
 // console.log(oneProduct.getSizes());
 // oneProduct.deleteSize('MM');
 // console.log(oneProduct.getSizes());
 // console.log(oneProduct.getAverageRating());
 // oneProduct.deleteReview(2);
 // console.log(oneProduct.getReviewByID(2));
  
  //console.log(oneProduct);
  //console.log(oneProduct.getName());
  
  
  