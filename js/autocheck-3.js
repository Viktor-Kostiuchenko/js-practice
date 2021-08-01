// ! MODULE #3
//////////// ? #22
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// const { 
//   yesterday, 
//   today, 
//   tomorrow, 
//   icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" 
// } = highTemperatures;

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;

//////////// ? #23
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// const {
//   yesterday: highYesterday,
//   today: highToday,
//   tomorrow: highTomorrow,
//   icon: highIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
// } = highTemperatures;

// // Change code above this line
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

//////////// ? #24
// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const { hex, rgb } of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }

//////////// ? #25
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
// // Change code below this line

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

//   // Change code above this line
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

//////////// ? #27
// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);

//////////// ? #28
// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

//////////// ? #29
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
// // Change code below this line
// const finalSettings = {...defaultSettings, ...overrideSettings};

//////////// ? #30
// function makeTask(data) {
//   const completed = false;
//   const category = 'General';
//   const priority = 'Normal';
  
//   // Change code below this line
// 	return {completed, category, priority, ...data}
//   // Change code above this line
// }

//////////// ? #31
// // Change code below this line
// function add(...args) {
//   let total = 0;
  
//   for(const num of args) {
//     total += num;
//   }
  
//   return total
//   // Change code above this line
// }

//////////// ? #32
// Change code below this line
// function addOverNum(firstNum, ...args) {
//   let total = 0;

//   for (const arg of args) {
//     if (firstNum < arg) {
//     total += arg;
//   	}
//   }
//   return total;
//   // Change code above this line
// }

//////////// ? #33
// // Change code below this line
// function findMatches(array, ...args) {
//   const matches = []; // Don't change this line

// 	for (const arg of args) {
//       if (array.includes(arg)) {
//         matches.push(arg);
//       }
//     }
//   // Change code above this line
//   return matches;
// }

//////////// ? #34
// const bookShelf = {
//   // Change code below this line
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
//   // Change code above this line
// };

//////////// ? #35
// const bookShelf = {
//   books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
//   updateBook(oldName, newName) {
//     // Change code below this line
// 	  const bookIndex = this.books.indexOf(oldName);
//     this.books.splice(bookIndex, 1, newName)

//     return this.books
//     // Change code above this line
//   },
// };

//////////// ? #36
// const atTheOldToad = {
//   // Change code below this line
//   potions: []
//   // Change code above this line
// };

//////////// ? #37
// const atTheOldToad = {
//   // Change code below this line
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   getPotions() {
//     return this.potions
//   }
//   // Change code above this line
// };

//////////// ? #38
// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   addPotion(potionName) {
//     this.potions.push(potionName)
//     // Change code below this line
//     // Change code above this line
//   },
// };

//////////// ? #39
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     // Change code below this line
//     const potionIndex = this.potions.indexOf(potionName)
//     this.potions.splice(potionIndex, 1)
//     // Change code above this line
//   },
// };

//////////// ? #40
// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   updatePotionName(oldName, newName) {
//     // Change code below this line
//  	const oldNameIndex = this.potions.indexOf(oldName)
//     this.potions.splice(oldNameIndex, 1, newName)
//     // Change code above this line
//   },
// };

//////////// ? #41
// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Dragon breath', price: 780 },
//     { name: 'Stone skin', price: 520 },
//   ],
//   // Change code below this line
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

//   // Change code above this line
// };




