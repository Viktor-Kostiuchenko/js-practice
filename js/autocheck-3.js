// ! MODULE #3
//////////// ? #1
//* Присвой переменной apartment объект описывающий квартиру со следующими характеристиками:

//* imgUrl - фотография, значение "https://via.placeholder.com/640x480";
//* descr - описание, значение "Spacious apartment in the city center";
//* rating - рейтинг, значение 4;
//* price - цена, значение 2153;
//* tags - метаинформация, массив ["premium", "promoted", "top"]

// const apartment = {
//    imgUrl: "https://via.placeholder.com/640x480",
//    descr: "Spacious apartment in the city center",
//    rating: 4,
//    price: 2153,
//    tags: ["premium", "promoted", "top"],
// }

//////////// ? #2
//* Дополни объект квартиры свойством owner, значением которого будет объект с информацией о владельце. Добавь ему следующие свойства:

//* name - имя владельца, значение "Henry";
//* phone - телефон, значение "982-126-1588";
//* email - почта, значение "henry.carter@aptmail.com"

// const apartment = {
//     imgUrl: 'https://via.placeholder.com/640x480',
//     descr: 'Spacious apartment in the city center',
//     rating: 4,
//     price: 2153,
//    tags: ['premium', 'promoted', 'top'],
//    owner: {
//       name: 'Henry',
//       phone: '982-126-1588',
//       email: 'henry.carter@aptmail.com'
//     }
//   };

//////////// ? #3
//* Дополни код присвоив объявленным переменным выражения обращения к соответствующим свойствам обьекта apartment.

//* aptRating - рейтинг;
//* aptDescr - описание;
//* aptPrice - цена;
//* aptTags - теги.

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };


// const aptRating = apartment.rating;
// const aptDescr = apartment.descr;
// const aptPrice = apartment.price;
// const aptTags = apartment.tags;

//////////// ? #4
//* Дополни код присвоив объявленным переменным выражения обращения к соответствующим свойствам обьекта apartment.

//* ownerName - имя владельца;
//* ownerPhone - телефон владельца;
//* ownerEmail - почта владельца;
//* numberOfTags - количество элементов массива в свойстве tags;
//* firstTag - первый элемент массива в свойстве tags;
//* lastTag - последний элемент массива в свойстве tags.

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[apartment.tags.length -1];

//////////// ? #5
//* Дополни код присвоив объявленным переменным выражения обращения к соответствующим свойствам обьекта apartment используя синтаксис «квадратных скобок».

//* aptRating - рейтинг;
//* aptDescr - описание;
//* aptPrice - цена;
//* aptTags - теги.

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// const aptRating = apartment['rating'];
// const aptDescr = apartment['descr'];
// const aptPrice = apartment['price'];
// const aptTags = apartment['tags'];


//////////// ? #6
//* Дополни код обновив значения свойств объекта apartment:

//* цену в свойстве price на 5000;
//* рейтинг квартиры в свойстве rating на 4.7;
//* имя владельца во вложенном свойстве name на "Henry Sibola";
//* массив тегов в свойстве tags добавив в конец строку "trusted"

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };
// apartment.price = 5000
// apartment.rating = 4.7
// apartment.owner.name = 'Henry Sibola'
// apartment.tags.push('trusted')

//////////// ? #7
//* Добавь объекту apartment несколько новых свойств:

//* area - площадь в квадратных метрах, число 60;
//* rooms - количество комнат, число 3;
//* location - местоположение квартиры, обьект со следующими вложенными свойствами;
//* country - страна, строка "Jamaica";
//* city - город, строка "Kingston".

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// apartment.area = 60
// apartment.rooms = 3
// apartment.location = {
//    country: 'Jamaica',
//    city: 'Kingston'
// }

//////////// ? #8
//* Дополни код объявления объекта так, чтобы у него были свойства name, price, image и tags со значениями из переменных с аналогичными именами. Обязательно используй синтаксис коротких свойств.

// const name = 'Repair Droid';
// const price = 2500;
// const image = 'https://via.placeholder.com/640x480';
// const tags = ['on sale', 'trending', 'best buy'];

// const product = {
//    name,
//    price,
//    image,
//    tags
// };

//////////// ? #9
//* Дополни код объявления объекта credentials так, чтобы в результате у него были два свойства: email и password, имена которых хранятся в переменных emailInputName и passwordInputName.

//* Значением свойства email должна быть строка "henry.carter@aptmail.com", а значением свойства password - строка "jqueryismyjam".

// const emailInputName = 'email';
// const passwordInputName = 'password';

// const credentials = {
//    [emailInputName]: 'henry.carter@aptmail.com',
//    [passwordInputName]: 'jqueryismyjam'
// };

//////////// ? #10
//* Перебери объект apartment используя цикл for...in и запиши в массив keys все его ключи, а в массив values все значения его свойств.

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];

// for (key in apartment) {
//    keys.push(key)
//    values.push(apartment[key])
// }

//////////// ? #11
//* Выполни рефакторинг решения предыдущего задания добавив в цикл for...in проверку на собственное свойство.

// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//    if (apartment.hasOwnProperty(key)) {
//       keys.push(key);
//       values.push(apartment[key])
//   }
// }

//////////// ? #12
//* Напиши функцию countProps(object), которая считает и возвращает количество собственных свойств объекта в параметре object. Используй переменную propCount для хранения количества свойств объекта.

// function countProps(object) {
//   let propCount = 0;
//    for (let key in object) {
//       if (object.hasOwnProperty(key)) {
//          propCount += object.hasOwnProperty(key)
//       }
//    }
//   return propCount;
// }

//////////// ? #13
//* Перебери объект apartment используя метод Object.keys() и цикл for...of. Запиши в переменную keys массив ключей собственных свойств объекта apartment, и добавь в массив values все значения его свойств.

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// const keys = Object.keys(apartment)
// for (const key of keys) {
//    values.push(apartment[key])
// }

//////////// ? #14
//* Выполни рефакторинг функции countProps(object) используя метод Object.keys() и, возможно, цикл for...of.

// function countProps(object) {
//    const keys = Object.keys(object)
//    return keys.length;
// }

//////////// ? #15
//* Запиши в переменную keys массив ключей собственных свойств объекта apartment, а в переменную values массив всех значений его свойств. Используй методы Object.keys() и Object.values().

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };

// const keys = Object.keys(apartment);
// const values = Object.values(apartment);

//////////// ? #16
//* Напиши функцию countTotalSalary(salaries) которая принимает объект зарплат, где имя свойства это имя сотрудника, а значение свойства это зарплата. Функция должна рассчитать общую сумму зарплат сотрудников и вернуть её. Используй переменную totalSalary для хранения общей суммы зарплаты.

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   const values = Object.values(salaries)

//   for (const value of values) {
//     totalSalary += value
//   }
//   return totalSalary;
// }

//////////// ? #17
//* Перебери массив объектов colors используя цикл for...of. Добавь в массив hexColors значения свойств hex, а в массив rgbColors значения свойств rgb из всех объектов массива colors.

// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];

// for (const color of colors) {
//   hexColors.push(color.hex)
//   rgbColors.push(color.rgb)
// }

//////////// ? #18
//* Напиши функцию getProductPrice(productName) которая принимает один параметр productName - название продукта. Функция ищет объект продукта с таким именем (свойство name) в массиве products и возвращает его цену (свойство price). Если продукт с таким названием не найден, функция должна возвращать null.

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   for (const product of products) {
//     if (product.name === productName) {
//       return product.price
//     }
//   }
//   return null
// }

//////////// ? #19
//* Напиши функцию getAllPropValues(propName) которая принимает один параметр propName - имя (ключ) свойства. Функция должна вернуть массив всех значений свойства с таким именем из каждого объекта в массиве products. Если в объектах нет свойства с таким именем, функция должна вернуть пустой массив.

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   const values = []
//   for (const product of products) {
//     if (product.hasOwnProperty(propName)) {
//       values.push(product[propName])
//     }
//   }
//   return values
// }

//////////// ? #20
//* Напиши функцию calculateTotalPrice(productName) которая принимает один параметр productName - название товара. Функция должна вернуть общую стоимость (цена * количество) товара с таким именем из массива products.

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   if (Object.values(product).includes(productName)) {
//     total = product.price * product.quantity
//   }
//   return total
// }

//////////// ? #21
//* Пришел трёхдневный прогноз максимальных температур и мы считаем среднюю температуру за три дня (meanTemperature). Замени объявления переменных yesterday, today и tomorrow одной операцией деструктуризации свойств объекта highTemperatures.

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };

// const { yesterday, today, tomorrow } = highTemperatures
// const meanTemperature = (yesterday + today + tomorrow) / 3;

//////////// ? #22
//* В прогнозе максимальных температур также может быть необязательное свойство icon - иконка погоды. Замени объявления переменных yesterday, today, tomorrow и icon одной операцией деструктуризации свойств объекта highTemperatures. Задай значение по умолчанию для icon - строку "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };

// const { 
//   yesterday, 
//   today, 
//   tomorrow, 
//   icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" 
// } = highTemperatures;

// const meanTemperature = (yesterday + today + tomorrow) / 3;

//////////// ? #23
//* Замени объявления переменных highYesterday, highToday, highTomorrow и highIcon одной операцией деструктуризации свойств объекта highTemperatures.Задай значение по умолчанию для highIcon - строку "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };

// const {
//   yesterday: highYesterday,
//   today: highToday,
//   tomorrow: highTomorrow,
//   icon: highIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
// } = highTemperatures;

// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

//////////// ? #24
//* Выполни рефакторинг цикла for...of так, чтобы в нём использовалась деструктуризация объекта..

// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];

// for (const { hex, rgb } of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }

//////////// ? #25
//* Мы получили прогноз погоды на два дня, с минимальными и максимальными температурами, а также необязательными иконками. Замени объявления всех переменных одной операцией деструктуризации свойств объекта forecast. Задай значение по умолчанию для иконок, переменных todayIcon и tomorrowIcon - строку "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };

// const {
//   today: {
//   	low: lowToday,
//   	high: highToday,
//   	icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//     },

// 	tomorrow: {
//       low: lowTomorrow,
//       high: highTomorrow,
//       icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//     }
      
//  } = forecast;

//////////// ? #26
//* Функция calculateMeanTemperature(forecast) принимает один параметр forecast - объект температур на два дня следующего формата.

//* {
//*   today: { low: 10, high: 20 },
//*   tomorrow: { low: 20, high: 30 }
//* }
//* Замени объявления переменных todayLow, todayHigh, tomorrowLow и tomorrowHigh одной операцией деструктуризации свойств объекта forecast.

// Change code below this line
// function calculateMeanTemperature(forecast) {
//   const {
//     today: {
//     low: todayLow,
//     high: todayHigh,
//     },
    
//     tomorrow: {
//     low: tomorrowLow,
//     high: tomorrowHigh,
//     },
    
//   } = forecast; 

//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

//////////// ? #27
//* В переменной scores хранится массив результатов тестирования.Используя распыление и методы Math.max() и Math.min() дополни код так, чтобы в переменной bestScore был самый высокий балл, а в worstScore самый низкий.

// const scores = [89, 64, 42, 17, 93, 51, 26];
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);

//////////// ? #28
//* В переменных firstGroupScores, secondGroupScores и thirdGroupScores хранятся результаты тестирования отдельных групп. Используя распыление дополни код так, чтобы:

//*В переменной allScores хранился массив всех результатов от первой до третьей группы.
//* В переменной bestScore был самый высокий общий балл.
//* В переменной worstScore был самый низкий общий балл.

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

//////////// ? #29
//* В конструкторе можно создавать новые тесты, для которых есть настройки по умолчанию которые хранятся в переменной defaultSettings. Во время создания теста, все или часть настроек можно переопределить, они хранятся в переменной overrideSettings.

//* Для того чтобы получить финальные настройки теста, необходимо взять настройки по умолчанию и поверх них применить переопределённые настройки. Дополни код так, чтобы в переменной finalSettings получился объект финальных настроек теста.

// const defaultSettings = {
//   theme: 'light',
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// const finalSettings = {...defaultSettings, ...overrideSettings};

//////////// ? #30
//* Напиши функцию makeTask(data) которая принимает один параметр data - объект со следующими свойствами.

//* text - текст задачи.
//* category - категория задачи.
//* priority - приоритет задачи.
//* Функция должна составить и вернуть новый объект задачи, не изменяя напрямую параметр data. В новом объекте должно быть свойство completed, значение которого хранится в одноимённой локальной переменной.

//* В параметре data гарантированно будет только свойство text, а остальные два, category и priority, могут отсутствовать.Тогда, в новом объекте задачи, в свойствах category и priority должны быть значения по умолчанию, хранящиеся в одноимённых локальных переменных.

// function makeTask(data) {
//   const completed = false;
//   const category = 'General';
//   const priority = 'Normal';
  
// 	return {completed, category, priority, ...data}
// }

//////////// ? #31
//* Используя операцию rest дополни код функции add() так, чтобы она принимала любое количество аргументов, считала и возвращала их сумму.

// function add(...args) {
//   let total = 0;
  
//   for(const num of args) {
//     total += num;
//   }
  
//   return total
// }

//////////// ? #32
//* Функция addOverNum() считает сумму всех аргументов.Измени параметры и тело функции addOverNum() так, чтобы она считала сумму только тех аргументов, которые больше чем заданное число.Это число должно быть первым параметром функции.

// Change code below this line
// function addOverNum(firstNum, ...args) {
//   let total = 0;

//   for (const arg of args) {
//     if (firstNum < arg) {
//     total += arg;
//   	}
//   }
//   return total;
// }

//////////// ? #33
//* Функция findMatches() принимает произвольное количество аргументов. Первым аргументом всегда будет массив чисел, а остальные аргументы будут просто числами.

//* Дополни код функции так, чтобы она возвращала новый массив matches, в котором будут только те аргументы, начиная со второго, которые есть в массиве первого аргумента.

//*   Например, findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) должна вернуть массив[1, 2], потому что только они есть в массиве первого аргумента.

// function findMatches(array, ...args) {
//   const matches = []; // Don't change this line

// 	for (const arg of args) {
//       if (array.includes(arg)) {
//         matches.push(arg);
//       }
//     }
//   return matches;
// }

//////////// ? #34
//* Добавь объекту bookShelf ещё два метода, которые пока что будут возвращать просто строки по аналогии с getBooks() и addBook(bookName).

//* Метод removeBook(bookName) будет удалять книгу по имени. Возвращает строку "Deleting book <имя книги>", где <имя книги> это значение параметра bookName.

//* Метод updateBook(oldName, newName) будет обновлять название книги на новое.Возвращает строку "Updating book <старое имя> to <новое имя>", где < старое имя > и < новое имя > это значения параметров oldName и newName соотвественно.

// const bookShelf = {
//   books: ['The last kingdom', 'The guardian of dreams'],
//   getBooks() {
//     return 'Returning all books';
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   removeBook(bookName) {
//     return `Deleting book ${bookName}`;
//   },
//   updateBook(oldName, newName) {
//     return `Updating book ${oldName} to ${newName}`
//   }
// };

//////////// ? #35
//* Дополни метод updateBook(oldName, newName) так, чтобы он изменял название книги с oldName на newName в свойстве books. Используй indexOf() для того, чтобы найти нужный элемент массива, и splice() для того чтобы заменить этот элемент

// const bookShelf = {
//   books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
//   updateBook(oldName, newName) {
// 	  const bookIndex = this.books.indexOf(oldName);
//     this.books.splice(bookIndex, 1, newName)

//     return this.books
//   },
// };

//////////// ? #36
//* К нам обратилась владелица лавки зелий «У старой жабы» и заказала программу для ведения инвентаря - добавления, удаления, поиска и обновления зелий.Добавь объекту atTheOldToad свойство potions, значением которого сделай пустой массив.

// const atTheOldToad = {
//   potions: []
// };

//////////// ? #37
//* Добавь объекту atTheOldToad метод getPotions(), который просто возвращает значение свойства potions.

// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   getPotions() {
//     return this.potions
//   }
// };

//////////// ? #38
//* Дополни метод addPotion(potionName) так, чтобы он добавлял зелье potionName в конец массива зелий в свойстве potions.

// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   addPotion(potionName) {
//     this.potions.push(potionName)
//   },
// };

//////////// ? #39
//* Дополни метод removePotion(potionName) так, чтобы он удалял зелье potionName из массива зелий в свойстве potions.

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     const potionIndex = this.potions.indexOf(potionName)
//     this.potions.splice(potionIndex, 1)
//   },
// };

//////////// ? #40
//* Дополни метод updatePotionName(oldName, newName) так, чтобы он обновлял название зелья с oldName на newName, в массиве зелий в свойстве potions.

// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   updatePotionName(oldName, newName) {
//  	const oldNameIndex = this.potions.indexOf(oldName)
//     this.potions.splice(oldNameIndex, 1, newName)
//   },
// };

//////////// ? #41
//* Заказчица хочет чтобы каждое зелье было представлено не только именем, но и ценой, а в будущем может быть и другими характеристиками. Поэтому теперь в свойстве potions будет храниться массив объектов со следующими свойствами.

// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Dragon breath', price: 780 },
//     { name: 'Stone skin', price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
  
//   addPotion(potionName) {
//     this.potions.push(potionName);
 
//     return `Potion ${potionName} is already equipped!`;
//   },
  
//   removePotion(potionName) {
//     for (const potion of this.potions) {
//          const potionIndex = this.potions.indexOf(potion);
//     	if (potion.name === potionName) {
//         this.potions.splice(potionIndex, 1);
//       }  
//     }
//     return `Potion ${potionName} is not in inventory!`;
//   },
  
//   updatePotionName(oldName, newName) {
//     for (const potion of this.potions) {
//       if (potion.name === oldName) {
//         potion.name = newName}
//      }  

//      return `Potion ${oldName} is not in inventory!`;
//    }
// };




