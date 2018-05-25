class UI {
  constructor() {
    this.profile = document.getElementById('profile');
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
            <li class="list-group-item">Wesite/Blog: <a href="${user.blog}" target="_blank">${user.blog}</a></li>
            <li class="list-group-item">Location: ${user.location}</li>
            <li class="list-group-item">Member Since: ${new Date(user.created_at).getFullYear()}</li>
          </ul>
        </div>
      </div>
    </div>
    <h3 class="page-heading mb-3">Latest Repos</h3>
    `;
  }

  // show alert when input is not found in github api
  showAlert(msg, className) {
    // remove existing alerts
    this.clearAlert();
    // remove existing profile
    this.profile.innerHTML = '';
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
    this.clearAlert();
  }
}