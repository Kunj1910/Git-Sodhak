//Init Github
const github = new Github();
//Init UI
const ui = new UI();

//Search input
// const searchUser = document.getElementById("searchUser");
const searchUser = document.getElementById("searchOnClick");



searchUser.addEventListener('click', () => {

  let userText = document.getElementById("searchUser").value
  console.log(userText);

  if (userText !== "") {
    //make http call
    github.getUser(userText).then((data) => {
      if (data.profile.message === "Not Found") {
        // Show alert
        ui.showAlert("User Not Found", "alert alert-danger");
      } else {
        // Show Profile
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    // Clear Profile
    ui.clearProfile();
  }

})