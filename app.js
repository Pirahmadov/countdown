const eventList = document.querySelector(".event");
const timeBox = document.querySelector(".time");
const btn = document.querySelector(".btn");
const eventBox = document.querySelector(".eventbox");
let list = [];
let currentId = 1;
const addList = () => {
  if (eventList.value && timeBox.value) {
    const arr = { id: currentId, value: eventList.value, date: timeBox.value };
    currentId++;
    timeBox.value = "";
    eventList.value = "";
    list.push(arr);
    renderList();
  } else {
    console.log("add event");
  }
};
const converDate = (inputDates) => {
  const now = new Date(inputDates);
  const hour = now.getHours();
  const minutes = now.getMinutes();
  const day = now.getDay();
  const month = now.getMonth() + 1;
  const year = now.getFullYear();
  let allDates = hour + ":" + minutes + " " + day + "/" + month + "/" + year;

  return allDates;
};
const renderList = () => {
  eventBox.innerHTML = "";

  list.forEach((item) => {
    const li = document.createElement("li");
    li.className = "list-group-item list-group-item-primary";
    const title = document.createElement("div");
    const date = document.createElement("div");
    title.innerHTML = item.id + ". " + item.value;
    date.innerHTML = converDate(item.date);
    li.appendChild(title);
    li.appendChild(date);
    eventBox.appendChild(li);
  });
};

btn.addEventListener("click", addList);
