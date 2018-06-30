// FOR API BUTTONS
let wordnikAPI;
let open_notifyAPI;
let giphyAPI;

let assignElementID = (el, ID) => {
  el = document.getElementById(ID);
  return el;
}

let assignFooter = (txt) => {
  notification = txt;
  if (footerCount > -3) {
    if (prev_notification === notification) {
      footerCount++;
      notification += ` (${footerCount + 1})`;
    } else {
      footerCount = 0;
      prev_notification = notification;
    }
  } else {
    footerCount++;
  }
  footer.innerHTML = notification;
}

// ASSIGNING THE VARIABLES TO THE CORESPONDING DOM ELEMENT
home = assignElementID(home, 'home');
contact = assignElementID(contact, 'contact');
apis = assignElementID(apis, 'apis');
support = assignElementID(support, 'support');
description = assignElementID(description, 'description');
test = assignElementID(test, 'test');
wordnikAPI = assignElementID(wordnikAPI, 'wordnikAPI');
open_notifyAPI = assignElementID(open_notifyAPI, 'open_notifyAPI');
giphyAPI = assignElementID(giphyAPI, 'giphyAPI');

// MENU BUTTON ONCLICK() EVENTS
home.onclick = () => {
  window.location = 'index.html';
}

contact.onclick = () => {
  window.location = 'contact.html';
}

apis.onclick = () => {
  window.location = 'apis.html';
}

support.onclick = () => {
  console.log(under_const);
  assignFooter(under_const);
}

description.onclick = () => {
  console.log(under_const);
  assignFooter(under_const);
}

test.onclick = () => {
  console.log(under_const);
  assignFooter(under_const);
}

// API BUTTON ONCLICK() EVENTS
wordnikAPI.onclick = () => {
  let title = document.getElementById("api_title");
  title.innerHTML = "Current API: Wordnik API";
  let err = document.getElementById("api_error");
  title.style.display = "block";
  err.style.display = "block";
}

open_notifyAPI.onclick = () => {
  let title = document.getElementById("api_title");
  title.innerHTML = "Current API: Open Notify API";
  let err = document.getElementById("api_error");
  title.style.display = "block";
  if (err.style.display === "block") {
    err.style.display = "none";
  }

  queryOpen();
}

giphyAPI.onclick = () => {
  let title = document.getElementById("api_title");
  title.innerHTML = "Current API: Giphy API";
  let err = document.getElementById("api_error");
  title.style.display = "block";
  if (err.style.display === "block") {
    err.style.display = "none";
  }

  queryGiphy();
}