// Instantiate github 
const github = new GitHub;

// Instantiate ui 
const ui = new UI;

/* Search User */
document.getElementById('search-user').addEventListener(
  'keyup', (e) => {
    // get input text
    const inputText = e.target.value;
    if (inputText !== '') {
      // make http get request
      github.getUser(inputText)
        .then(data => {
          if (data.profile.message === 'Not Found') {
            /* code to show alert*/
          } else {
            /* code to show profile*/
            ui.showProfile(data.profile);
          }
        })
        .catch(err => console.log(err));
    } else {
      /* code to clear profile*/
    }
})