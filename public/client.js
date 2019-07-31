document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});

function toggleModal(id) {
    var element = document.getElementById(id);
    element.classList.toggle("is-active");
} 

document.getElementById("emailInput").addEventListener('keyup', function (e) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  checkInputs();
  if(document.getElementById("emailInput").value.match(mailformat)) {
    document.getElementById("emailValidIcon").classList = "fas fa-check";
    document.getElementById("emailValidText").innerHTML = "This email is valid";
    document.getElementById("emailValidText").classList = "help is-success";
    document.getElementById("emailInput").classList = "input is-success";
    return true;
  } else {
    document.getElementById("emailValidIcon").classList = "fas fa-exclamation-triangle";
    document.getElementById("emailValidText").innerHTML = "This email is invalid";
    document.getElementById("emailValidText").classList = "help is-danger";
    document.getElementById("emailInput").classList = "input is-danger";
    return false;
  }
});

document.getElementById("messageInput").addEventListener('keyup', function (e) {
  document.getElementById("messageCharsLeft").innerHTML = (500 - document.getElementById("messageInput").value.length) + " characters left";
  checkInputs();
  if(document.getElementById("emailInput").value.length > 0) {
    document.getElementById("messageCharsLeft").classList = "help is-unselectable";
  };
  if(document.getElementById("messageInput").value.length > 400) {
    document.getElementById("messageCharsLeft").classList = "help is-warning is-unselectable";
  };
  if(document.getElementById("messageInput").value.length === 500) {
    document.getElementById("messageCharsLeft").classList = "help is-danger is-unselectable";
    document.getElementById("messageCharsLeft").innerHTML = "0 characters left. Cannot type.";
  };
});

function checkInputs() {
  if (document.getElementById("messageInput").value.length === 0) {
    document.getElementById("sendButton").disabled = true;
    document.getElementById("sendButton").classList = "button is-success is-disabled";
  } else if(!document.getElementById("emailInput").value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    document.getElementById("sendButton").disabled = true;
    document.getElementById("sendButton").classList = "button is-success is-disabled";
  } else {
    document.getElementById("sendButton").disabled = false;
    document.getElementById("sendButton").classList = "button is-success";
  };
}

function updateStats(id) {
  // This is manually changed every once in a while,
  // priorities point to finishing the rest of the site being more important right now.
  var serverCount = 15;
  var userCount = 20000;
  document.getElementById(id).innerHTML = "Number of servers: " + serverCount + "+ <br>Number of users: ~" + userCount;
};

updateStats("statsTile");



function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

// Make the DIV element draggable:
dragElement(document.getElementById("docsnavbar"));