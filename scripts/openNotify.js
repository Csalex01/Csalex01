let urlOpen = "http://api.open-notify.org/astros.json";

function setup() {
  noCanvas();
  console.log("p5js is working!");
}

function queryOpen() {
  loadJSON(urlOpen, (data) => {
    console.log(data);
    let astroNum = data.number;
    let txt = document.getElementById("txt");
    txt.innerHTML = `There are ${astroNum} people in space!`;
    txt.style.margin = "0px 0px 0px 10px";
    let astronauts = data.people;

    let list = document.createElement("ol");
    list.className = "open_list";

    astronauts.forEach((x) => {
      let listElement = document.createElement("li");
      listElement.innerHTML = `${x.name} => ${x.craft}`;
      list.appendChild(listElement);
    });
    txt.appendChild(list);
  });
}