function Product(productID, productName, productDescription, productPrice,
  productBrand, productQuantity, productActiveSize, productDate, pathImg) {
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

  this.setImages = function (pathImg) {
    this.images.push(pathImg);
  }

  this.getImage = function (numberImg) {
    if (numberImg == undefined) {
      return (this.images[0])
    }

    if (numberImg < this.images.length) {
      return (this.images[numberImg])
    }
    console.log("Картинки с таким ключем не существует");
  }

  if (pathImg != undefined) {
    this.setImages(pathImg);
  }

  this.setID = function (productID) {
    this.ID = productID;
  }

  if (productID != undefined) {
    this.setID(productID);
  }

  this.getID = function () {
    return this.ID;
  }

  this.setName = function (productName) {

    if (typeof (productName) != "string") {
      console.log("Введено число, введи имя field Name!");
      return;
    }

    if (productName.length < 3) {
      console.log("Имя слишком короткое, должно быть более 3 символов field Name");
      return;
    }

    this.name = productName;
  };

  if (productName != undefined) {
    this.setName(productName);
  }

  this.getName = function () {
    return this.name;
  };

  this.setDescription = function (productDescription) {
    if (productDescription.length < 5) {
      console.log("Имя слишком короткое, должно быть более 5 символов field Description");
      return;
    }
    this.description = productDescription;
  };

  if (productDescription != undefined) {
    this.setDescription(productDescription);
  }

  this.getDescription = function () {
    return this.description;
  };

  this.setPrice = function (productPrice) {
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

  if (productPrice != undefined) {
    this.setPrice(productPrice);
  }

  this.getPrice = function () {
    return this.price;
  }

  this.setBrand = function (productBrand) {

    if (typeof (productBrand) != "string") {
      console.log("Введено число, введи имя! field Brand");
      return;
    }

    if (productBrand.length < 3) {
      console.log("Имя слишком короткое, должно быть более 3 символов. field Brand");
      return;
    }

    this.brand = productBrand;
  };

  if (productBrand != undefined) {
    this.setBrand(productBrand);
  }

  this.getBrand = function () {
    return this.brand;
  };

  this.setQuantity = function (productQuantity) {
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

  this.getQuantity = function () {
    return this.quantity;
  }

  if (productQuantity != undefined) {
    this.setQuantity(productQuantity);
  }

  this.setActiveSize = function (productActiveSize) {

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
  };

  if (productActiveSize != undefined) {
    this.setActiveSize(productActiveSize);
  }

  this.getActiveSize = function () {
    return this.activeSize;
  };

  this.getSizes = function () {
    return this.sizes;
  }

  this.setDate = function (productDate) {
    if (Date.parse(productDate) != NaN) {
      this.date = new Date(Date.parse(productDate));
    }
    else
      console.log("Введи дату в формате 'YYYY-MM-DDTHH:mm:ss.sss' field Date");
  };

  this.getDate = function () {
    return this.date;
  };

  if (productDate != undefined) {
    this.setDate(productDate);
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
    };

    this.setRating = function (keyRating, valueRating) {
      if ((valueRating <= 0 || valueRating > 10)) {
        console.log("Некорректное значение! Field Rating");
        return;
      }
      if (this.rating.hasOwnProperty(keyRating)) {
        this.rating[keyRating] = valueRating;
        return;
      }
      console.log("Такого ключа нет! Field Rating")
    }

    if (keyRating != undefined && valueRating != undefined) {
      this.setRating(keyRating, valueRating);
    }

    this.getRating = function () {
      return rating.keyRating;
    }

    this.setID = function (ID) {
      this.IDrew = ID;
    }

    if (ID != undefined) {
      this.setID(ID);
    }

    this.getID = function () {
      return this.IDrew;
    }

    this.setAuthor = function (author) {

      if (typeof (author) != "string") {
        console.log("Введено число, введи имя! Field Author");
        return;
      }

      if (author.length < 3) {
        console.log("Имя слишком короткое, должно быть более 3 символов. Field Author");
        return;
      }

      this.author = author;
    };

    if (author != undefined) {
      this.setAuthor(author);
    }

    this.getAuthor = function () {
      return this.author;
    };

    this.setDate = function (date) {
      if (Date.parse(date) != NaN) {
        this.date = new Date(Date.parse(date));
      }
      else
        console.log("Введи дату в формате 'YYYY-MM-DDTHH:mm:ss.sss'");
    };

    this.getDate = function () {
      return this.date;
    };

    if (date != undefined) {
      this.setDate(date);
    }

    this.setComment = function (comment) {
      if (comment.length < 5) {
        console.log("Имя слишком короткое, должно быть более 5 символов. Field Coment");
        return;
      }
      this.comment = comment;
    };

    if (comment != undefined) {
      this.setComment(comment);
    }

    this.getComment = function () {
      return this.comment;
    };

  };

  this.addReview = function (ID, date, comment, author, keyRating, valueRating) {
    this.reviews.push(new Reviews(ID, date, comment, author, keyRating, valueRating));
  };

  this.addSize = function (newSize) {
    this.sizes.push(newSize);
  };

  this.deleteSize = function (delitedSize) {
    for (let i = 0; i < this.sizes.length; i++) {
      if (this.sizes[i] == delitedSize) {
        this.sizes.splice(i, 1);
        return;
      }
    }
    console.log('Такого значения не существует! deleteSize');
  }


  this.getReviewByID = function (getReviewID) {
    for (let i = 0; i < this.reviews.length; i++) {
      if (this.reviews[i].IDrew == getReviewID) {
        return this.reviews[i];
      }
    }
    console.log("Такого ключа не существует! getReviewByID");
  }

  this.deleteReview = function (deleteRevID) {
    for (let i = 0; i < this.reviews.length; i++) {

      if (this.reviews[i].IDrew == deleteRevID) {
        this.reviews.splice(i, 1);
        return;
      }
    }
    console.log("Такого ключа не существует! deleteReview");
  }

  this.getAverageRating = function () {
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

}

function searchProducts(arrayProducts, searchingText) {

  let rezultSearch = [];

  let indexOfAnySinbol = searchingText.indexOf('*');

  for (let i = 0; i < arrayProducts.length; i++) {
    if (indexOfAnySinbol == -1 && arrayProducts.directSearch(arrayProducts[i], searchingText)) {
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

let products = [
  new Product(1, 'T-shirt', 'sunset over the oceean', 49, 'Kal', 10, 'S', 10 - 10 - 2022,
    'C:\Users\Марина\Pictures\/t-shots.jpg'),

  new Product(2, 'ocean', 'helllo', 81, 'Kal', 8, 'S', 10 - 12 - 2022,
    'C:\Users\Марина\Pictures\/t-shots.jpg'),

  new Product(3, 'sunset', 'helllo my ocean!', 32, 'Kal', 6, 'S', 10 - 12 - 2022,
    'C:\Users\Марина\Pictures\/t-shots.jpg')
];

// ==========TEST===============
//console.log(searchProducts(products, 'sunset'));
//console.log(sortProducts(products, 'ID'));


//let oneProduct = new Product(1, 'T-shirt', 'sunset over the ocean', 49, 'Kal', 10, 'S', 10 - 10 - 2022,
//  'C:\Users\Марина\Pictures\/t-shots.jpg');
//oneProduct.addReview(1, 10 - 09 - 2022, 'Hello', 'abc', 'price', 10);
//oneProduct.addReview(2, 10 - 07 - 2022, 'Helloooo', 'avtor', 'value', 7);
//console.log(oneProduct.getImage());
//oneProduct.setImages('C:\Users\Марина\Pictures\/t.jpg');
//console.log(oneProduct.getImage(1));
//oneProduct.addSize('MM');
//console.log(oneProduct.getSizes());
//oneProduct.deleteSize('MM');
//console.log(oneProduct.getSizes());
//console.log(oneProduct.getAverageRating());
//oneProduct.deleteReview(2);
//console.log(oneProduct.getReviewByID(2));
//console.log('/n');
//console.log(oneProduct.getReviewByID(1));
//console.log(oneProduct);
//console.log(oneProduct.getName());


