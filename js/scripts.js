window.onload = function () {
  // we get the form element
  const form = document.querySelector("form");
  // we create an event handler for the form's submission
  form.onsubmit = function (event) {
    event.preventDefault();

    // we access two HTML elements, the voter info and the message to underaged folks,
    // and add the hidden class to those elements;
    // doing this clears results before displaying new ones, which
    // allows the user to submit the form again and again, and
    // see new results.
    let voterInfo = document.getElementById("voter");
    voterInfo.setAttribute("class", "hidden");
    let under18Message = document.getElementById("non-voter");
    under18Message.setAttribute("class", "hidden");

    // we gather the age value
    const age = parseInt(document.querySelector("input#age").value);

    // we check if the age is greater than 18.
    const ageBool = age >= 18; // ageBool will be set to true
    if (ageBool) {
      voterInfo.removeAttribute("class");
    } else {
      under18Message.removeAttribute("class");
    }
  };
};