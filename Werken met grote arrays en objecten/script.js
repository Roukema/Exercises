//button on click
// data sorteren
// data to dom
const year = new Date()
  .getFullYear()
  .toString()
  .substr(-2);
const month = new Date().getMonth() + 1;

const emptyDOM = () => {
  document.getElementById("lijst").innerText = "";
};

const addDataToList = data => {
  let listnode = document.createElement("li");

  listnode.innerText = data;

  document.getElementById("lijst").appendChild(listnode);
};

const filterLanden = () => randomPersonData.map(obj => obj.region);

const filterUniek = data => {
  const uniekeLijst = [...new Set(data)];
  return uniekeLijst;
};
const landenLijstToDom = () => {
  filterUniek(filterLanden().sort()).forEach(element => {
    addDataToList(element);
  });
};
document.getElementById("landenLijst").addEventListener("click", () => {
  emptyDOM();
  landenLijstToDom();
});

// Steenbokken

const addPeopleList = data => {
  let listnode = document.createElement("li");
  let divnode = document.createElement("div");
  let imgnode = document.createElement("img");
  let namenode = document.createElement("p");

  imgnode.src = data.photo;
  namenode.innerText = data.name + " " + data.surname;

  divnode.appendChild(namenode);
  divnode.appendChild(imgnode);
  document
    .getElementById("lijst")
    .appendChild(listnode)
    .appendChild(divnode);
};

const sortDataName = () => {
  let data = randomPersonData;
  data.sort(function(a, b) {
    let nameA = a.name.toLowerCase(),
      nameB = b.name.toLowerCase();
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
  });
  return data;
};

const filterWomen = data => {
  women = data.filter(person => person.gender === "female");
  return women;
};
const filterAge = (data, leeftijd) => {
  ageFilter = data.filter(person => person.age > leeftijd);
  return ageFilter;
};
const filterBirthday = data => {
  birthdayfilter = data.filter(person => {
    let [day, month] = person.birthday.dmy.split("/");
    return (day > 22 && month == 12) || (day < 19 && month === 1);
  });

  return birthdayfilter;
};

const peopleToDom = () => {
  filterBirthday(filterAge(filterWomen(sortDataName()), 30)).forEach(
    element => {
      addPeopleList(element);
    }
  );
};

document.getElementById("steenbok").addEventListener("click", () => {
  emptyDOM();
  peopleToDom();
});

// oude creditcards

const addOldCreditcarsList = data => {
  let listnode = document.createElement("li");
  let divnode = document.createElement("div");
  let namenode = document.createElement("p");
  let numbernode = document.createElement("p");
  let cardnode = document.createElement("p");
  let experationnode = document.createElement("p");

  namenode.innerText = data.name + " " + data.surname;
  numbernode.innerText = data.phone;
  cardnode.innerText = data.credit_card.number;
  experationnode.innerText = data.credit_card.expiration;

  divnode.appendChild(namenode);
  divnode.appendChild(numbernode);
  divnode.appendChild(cardnode);
  divnode.appendChild(experationnode);
  document
    .getElementById("lijst")
    .appendChild(listnode)
    .appendChild(divnode);
};
const filterExperation = data => {
  expiration = data.filter(person => {
    let [expMonth, expYear] = person.credit_card.expiration.split("/");
    return (expMonth > month && expYear == year) || expYear > year;
  });

  return expiration;
};
const sortExpDate = data => {
  data.sort(function(a, b) {
    let [monthA, yearA] = a.credit_card.expiration.split("/"),
      [monthB, yearB] = b.credit_card.expiration.split("/");
    return yearA - yearB || monthA - monthB;
  });
  return data;
};

const checkCreditCards = () =>
  sortExpDate(filterExperation(filterAge(randomPersonData, 18))).map(
    addOldCreditcarsList
  );
document.getElementById("credit").addEventListener("click", () => {
  emptyDOM();
  checkCreditCards();
});

// teller landen

const addCountToList = data => {
  let listnode = document.createElement("li");
  let count = 0;
  landenlijst = data;

  randomPersonData.forEach(element => {
    landenlijst.includes(element.region) ? count++ : count;
  });

  listnode.innerText = data + " " + count;
  document.getElementById("lijst").appendChild(listnode);
};

// const addCounter = data => {
//   let count = 0;
//   landenlijst = data;
//   randomPersonData.forEach(element => {
//     landenlijst.includes(element.region)
//       ? { land: element.region, count: count++ }
//       : { land: element.region, count: count };
//   });
// };

filterUniek(filterLanden()).forEach(addCountToList);
