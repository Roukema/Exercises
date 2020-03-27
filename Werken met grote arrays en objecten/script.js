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
  let land = data.land;
  let count = data.count;
  console.log(data);
  listnode.innerText = land + " " + count;
  document.getElementById("lijst").appendChild(listnode);
};

const addCounter = data => {
  let landenLijst = data.map(land => {
    return { land: land, count: 0 };
  });
  let region = randomPersonData.map(element => element.region);

  let landenlijstCounter = landenLijst.map(element => {
    region.forEach(region =>
      region === element.land
        ? { land: element.land, count: element.count++ }
        : { land: element.land, count: element.count }
    );
    console.log(region, element);
    return {
      land: element.land,
      count: element.count
    };
  });
  return landenlijstCounter;
};

const sortCount = (a, b) => {
  if (a.count > b.count) {
    return -1;
  }
  if (a.count < b.count) {
    return 1;
  }
};

const landenTeller = () =>
  addCounter(filterUniek(filterLanden()))
    .sort(sortCount)
    .forEach(addCountToList);

document.getElementById("landenteller").addEventListener("click", () => {
  emptyDOM();
  landenTeller();
});
// gemiddelde leeftijd per land

// filter personen uit het land (variable data en knopid eerst met vaste waarde china zijn er 2)
// bereken gemiddelde leeftijd
// toon leeftijd
// knoppen maken met id land van het naam.

const filterPersonSelectedCountry = (data, land) => {
  peopleFromSelectedCountry = data.filter(element => {
    if (element.region === land) {
      return element;
    }
  });
  return peopleFromSelectedCountry;
};
const takeAvarageAge = data => {
  let ageArray = data.map(element => element.age);
  let totalAge = ageArray.reduce((a, b) => a + b);
  let averageAge = Math.round(totalAge / ageArray.length);
  return averageAge;
};
const addAverageAgeToDom = data => {
  let h2node = document.createElement("h2");

  h2node.innerText = data;

  document.getElementById("lijst").appendChild(h2node);
};

const createCountryButtons = data => {
  let listnode = document.createElement("li");
  let buttonnode = document.createElement("button");

  buttonnode.innerText = data;
  buttonnode.id = data;
  buttonnode.className = "countryButtons";

  document
    .getElementById("lijst")
    .appendChild(listnode)
    .appendChild(buttonnode);
};

const createButtons = () =>
  filterUniek(filterLanden().sort()).forEach(element => {
    createCountryButtons(element);
  });
document.getElementById("landenGemiddelde").addEventListener("click", () => {
  emptyDOM();
  createButtons();
  eventListenerCountryButtons();
});

const eventListenerCountryButtons = () => {
  document.querySelectorAll(".countryButtons").forEach(element => {
    return element.addEventListener("click", e => {
      let land = e.target.id;
      emptyDOM();
      averageAgeEvent(land);
    });
  });
};

const averageAgeEvent = land =>
  addAverageAgeToDom(
    takeAvarageAge(filterPersonSelectedCountry(randomPersonData, land))
  );

// matchmaker

const addLovePeopleList = data => {
  let listnode = document.createElement("li");
  let divnode = document.createElement("div");
  // let imgnode = document.createElement("img");
  let namenode = document.createElement("p");
  let countrynode = document.createElement("p");
  let agenode = document.createElement("p");
  let zodiacnode = document.createElement("p");
  let buttonnode = document.createElement("button");

  // imgnode.src = data.photo;
  namenode.innerText = data.name + " " + data.surname;
  countrynode.innerText = data.region;
  agenode.innerText = data.age;
  zodiacnode.innerText = data.zodiac;
  buttonnode.innerText = "Match";
  buttonnode.id = data.name + data.surname;
  buttonnode.onclick = addMatchList;

  divnode.appendChild(namenode);
  // divnode.appendChild(imgnode);
  divnode.appendChild(countrynode);
  divnode.appendChild(agenode);
  divnode.appendChild(zodiacnode);
  divnode.appendChild(buttonnode);
  document
    .getElementById("lijst")
    .appendChild(listnode)
    .appendChild(divnode);
};

const addZodiac = () => {
  const persondataZodiac = randomPersonData.map(element => {
    array = element;
    let [day, month] = array.birthday.dmy.split("/");

    if ((day > 20 && month == 3) || (day < 21 && month == 4)) {
      array.zodiac = "ram";
    } else if ((day > 20 && month == 4) || (day < 21 && month == 5)) {
      array.zodiac = "stier";
    } else if ((day > 20 && month == 5) || (day < 21 && month == 6)) {
      array.zodiac = "tweelingen";
    } else if ((day > 20 && month == 6) || (day < 21 && month == 7)) {
      array.zodiac = "kreeft";
    } else if ((day > 20 && month == 7) || (day < 21 && month == 8)) {
      array.zodiac = "leeuw";
    } else if ((day > 20 && month == 8) || (day < 21 && month == 9)) {
      array.zodiac = "maagd";
    } else if ((day > 20 && month == 9) || (day < 21 && month == 10)) {
      array.zodiac = "weegschaal";
    } else if ((day > 20 && month == 10) || (day < 21 && month == 11)) {
      array.zodiac = "schorpioen";
    } else if ((day > 20 && month == 11) || (day < 21 && month == 12)) {
      array.zodiac = "boogschutter";
    } else if ((day > 20 && month == 12) || (day < 21 && month == 1)) {
      array.zodiac = "steenbok";
    } else if ((day > 20 && month == 1) || (day < 21 && month == 2)) {
      array.zodiac = "waterman";
    } else if ((day > 20 && month == 2) || (day < 21 && month == 3)) {
      array.zodiac = "vissen";
    } else {
      array.zodiac = "geenbeeld";
    }

    return array;
  });
  return persondataZodiac;
};

const addMatchList = event => {
  emptyDOM();
  console.log(event.target);
  let target = event.target;
  let person = target.id;
  console.log(person);
  // div met degene van de match
  let data = randomPersonData.filter(element => {
    return person == element.name + element.surname;
  });
  data = data[0];

  let listnode = document.createElement("li");
  let divnode = document.createElement("div");
  // let imgnode = document.createElement("img");
  let namenode = document.createElement("p");
  let countrynode = document.createElement("p");
  let agenode = document.createElement("p");
  let zodiacnode = document.createElement("p");
  let matchnode = document.createElement("ul");

  // imgnode.src = data.photo;
  namenode.innerText = data.name + " " + data.surname;
  countrynode.innerText = data.region;
  agenode.innerText = data.age;
  zodiacnode.innerText = data.zodiac;
  matchnode.id = "matchlijst";

  divnode.appendChild(namenode);
  // divnode.appendChild(imgnode);
  divnode.appendChild(countrynode);
  divnode.appendChild(agenode);
  divnode.appendChild(zodiacnode);
  // div met matches

  listnode.appendChild(divnode);

  document
    .getElementById("lijst")
    .appendChild(listnode)
    .appendChild(matchnode);

  listOfMatches(data.zodiac)
    .filter(person => {
      return person.name != data.name;
    })
    .forEach(divMatches);
};

const divMatches = data => {
  // div met matches
  let listnode = document.createElement("li");
  let divnode = document.createElement("div");
  // let imgnode = document.createElement("img");
  let namenode = document.createElement("p");
  let countrynode = document.createElement("p");
  let agenode = document.createElement("p");
  let zodiacnode = document.createElement("p");
  let buttonnode = document.createElement("button");

  // imgnode.src = data.photo;
  namenode.innerText = data.name + " " + data.surname;
  countrynode.innerText = data.region;
  agenode.innerText = data.age;
  zodiacnode.innerText = data.zodiac;
  buttonnode.innerText = "Match";
  buttonnode.id = data.name + data.surname;
  buttonnode.onclick = addMatchList;

  divnode.appendChild(namenode);
  // divnode.appendChild(imgnode);
  divnode.appendChild(countrynode);
  divnode.appendChild(agenode);
  divnode.appendChild(zodiacnode);
  divnode.appendChild(buttonnode);
  // div met matches
  listnode.appendChild(divnode);

  document.getElementById("matchlijst").appendChild(listnode);
};

const listOfMatches = element => {
  let zodiac = element;
  let data = addZodiac();
  let matches;
  switch (zodiac) {
    case "ram":
      matches = data.filter(person => {
        return (
          person.zodiac === "ram" ||
          person.zodiac === "leeuw" ||
          person.zodiac === "boogschutter"
        );
      });
      break;
    case "stier":
      matches = data.filter(person => {
        return (
          person.zodiac === "stier" ||
          person.zodiac === "maagd" ||
          person.zodiac === "steenbok"
        );
      });
      break;
    case "tweelingen":
      matches = data.filter(person => {
        return (
          person.zodiac === "ram" ||
          person.zodiac === "leeuw" ||
          person.zodiac === "tweelingen"
        );
      });
      break;
    case "kreeft":
      matches = data.filter(person => {
        return (
          person.zodiac === "stier" ||
          person.zodiac === "maagd" ||
          person.zodiac === "steenbok"
        );
      });
      break;
    case "leeuw":
      matches = data.filter(person => {
        return (
          person.zodiac === "ram" ||
          person.zodiac === "leeuw" ||
          person.zodiac === "boogschutter"
        );
      });
      break;
    case "maagd":
      matches = data.filter(person => {
        return (
          person.zodiac === "stier" ||
          person.zodiac === "maagd" ||
          person.zodiac === "steenbok"
        );
      });
      break;
    case "weegschaal":
      matches = data.filter(person => {
        return (
          person.zodiac === "weegschaal" ||
          person.zodiac === "leeuw" ||
          person.zodiac === "boogschutter"
        );
      });
      break;
    case "schorpioen":
      matches = data.filter(person => {
        return (
          person.zodiac === "stier" ||
          person.zodiac === "maagd" ||
          person.zodiac === "schorpioen"
        );
      });
      break;
    case "boogschutter":
      matches = data.filter(person => {
        return (
          person.zodiac === "ram" ||
          person.zodiac === "leeuw" ||
          person.zodiac === "boogschutter"
        );
      });
      break;
    case "steenbok":
      matches = data.filter(person => {
        return (
          person.zodiac === "stier" ||
          person.zodiac === "maagd" ||
          person.zodiac === "steenbok"
        );
      });
      break;
    case "waterman":
      matches = data.filter(person => {
        return (
          person.zodiac === "tweelingen" ||
          person.zodiac === "weegschaal" ||
          person.zodiac === "waterman"
        );
      });
    case "vissen":
      matches = data.filter(person => {
        return (
          person.zodiac === "kreeft" ||
          person.zodiac === "schorpioen" ||
          person.zodiac === "vissen"
        );
      });
      break;
    default:
  }
  return matches;
};

document.getElementById("matchmaking").addEventListener("click", () => {
  emptyDOM();
  addZodiac();
  filterAge(sortDataName(), 18).forEach(addLovePeopleList);
});
