//button on click
// data ophalen // hoeft niet
// data sorteren
// data to dom

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
document
  .getElementById("landenLijst")
  .addEventListener("click", () => landenLijstToDom());

// Steenbokken

const addPeopleList = data => {
  console.log(data);
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
  //   filterWomen(data);
};

const filterWomen = data => {
  women = data.filter(person => person.gender === "female");
  return women;
};
const filterAge = data => {
  ageFilter = data.filter(person => person.age > 30);
  return ageFilter;
};
const filterBirthday = data => {
  birthdayfilter = data.filter(person => {
    let [day, month] = person.birthday.dmy.split("/");
    return (day > 22 && month == 12) || (day < 19 && month === 1);
  });

  console.log(birthdayfilter);
  return birthdayfilter;
};

const peopleToDom = () => {
  filterBirthday(filterAge(filterWomen(sortDataName()))).forEach(element => {
    addPeopleList(element);
  });
};
document
  .getElementById("steenbok")
  .addEventListener("click", () => peopleToDom());
