class UI {
  constructor() {
    this.profile = document.getElementById('profile');
    this.repos = document.getElementById('repos');
  }

  // display profile when input is found in github api
  showProfile(user) {
    // remove existing alerts
    this.clearAlert();
    // show profile
    this.profile.innerHTML = `
    <div class="card card-body mb-3">
      <div class="row">
        <div class="col-md-3">
        <img class="img-fluid mb-2" src="${user.avatar_url}">
        <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
        </div>
        <div class="col-md-9">
          <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
          <span class="badge badge-success">Public Gists: ${user.public_gists}</span>
          <span class="badge badge-secondary">Followers: ${user.followers}</span>
          <span class="badge badge-dark">Following: ${user.following}</span>
          <br><br>
          <ul class="list-group">
            <li class="list-group-item">Company: ${user.company}</li>
            <li class="list-group-item">Website/Blog: <a href="${user.blog}" target="_blank">${user.blog}</a></li>
            <li class="list-group-item">Location: ${user.location}</li>
            <li class="list-group-item">Member Since: ${new Date(user.created_at).getFullYear()}</li>
          </ul>
        </div>
      </div>
    </div>
  `;
  }

  showRepo(repos) {
    let output = '';
    if (repos.length !== 0) {
      output += '<h3 class="page-heading mb-3">Latest Repos</h3>';
      repos.forEach(repo => {
        output += `
          <div class="card card-body mb-2">
          <div class="row">
            <div class="col-md-6">
              <a href="${repo.html_url}" target="_blank" class="mb-4">${repo.name}</a>
            </div>
            <div class="col-md-6">
              <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
              <span class="badge badge-success">Watchers: ${repo.watchers_count}</span>
              <span class="badge badge-secondary">Forks: ${repo.forks_count}</span>
            </div>
          </div>
          </div>
        `;
      })
      this.repos.innerHTML = output;
    } else {
      this.showAlert('This user does not have any repo.', 'alert alert-danger');
    }
  }
  // show alert when input is not found in github api
  showAlert(msg, className, alertType) {
    // remove existing alerts
    this.clearAlert();
    // remove existing profile
    if (alertType === 'Profile Missing') {
      this.profile.innerHTML = '';
    }
    // remove existing repos
    this.repos.innerHTML = '';
    // show alert message
    const alertMsg = document.createElement('div');
    alertMsg.className = className;
    alertMsg.textContent = msg;
    // get parent node
    const searchContainer = document.querySelector('.search-container');
    searchContainer.appendChild(alertMsg);
  }

  // claer existing alert
  clearAlert() {
    const alert = document.querySelector('.alert');
    if (alert) {
      alert.remove();
    }
  }

  // clear profile when input is empty
  clearProfile() {
    this.profile.innerHTML = '';
    this.repos.innerHTML = '';
    this.clearAlert();
  }
}