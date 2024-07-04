//  grab the form element
// add the event listener
// check right input
// then submit

let form = document.getElementById("form");

form.addEventListener("submit", function () {
  event.preventDefault();
  console.log("form is submitted");
  console.log(event);
  let username = document.getElementById("username");
  let password = document.getElementById("password");
  if(username.value == 'shashant' && password.value == '1234')
          {
                    console.log("user matched");
                    this.reset()
          }
});
// in this addEventListener 1st para is event and 2nd para is callback fxn
