class GitHub {
  constructor() {
    this.client_id = '9b72ebe08be12b92a5a3';
    this.client_secret = '3d03ee5265662b47cff416c3aa17c57bf1230dd0';
    this.max_repo_count = 10;
    this.sort = 'updated_at: asc';
  }

  // get method
  async getUser(user) {
    // fetch user profile
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profileData = await profileResponse.json();

    // fetch user repositories
    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.max_repo_count}&sort=${this.sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoData = await repoResponse.json();
    
    return {
      profile: profileData,
      repo: repoData
    }
  }
}