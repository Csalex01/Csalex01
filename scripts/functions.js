// Assigns the variable
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

let setAPI = (api) => {
  assignFooter(`API set to: ${api}`);
}

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

// SOCIAL MEDIA BUTTON ONCLICK() EVENTS
facebook.onclick = () => {
  window.open(facebook_url, "_blank");
}

twitter.onclick = () => {
  window.open(twitter_url, "_blank");
}

instagram.onclick = () => {
  window.open(instagram_url, "_blank");
}

github.onclick = () => {
  window.open(github_url, "_blank");
}