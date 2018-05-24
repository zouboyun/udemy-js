class GitHub {
  constructor() {
    this.client_id = '9b72ebe08be12b92a5a3';
    this.client_secret = '3d03ee5265662b47cff416c3aa17c57bf1230dd0';
  }

  // get method
  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profileData = await profileResponse.json();

    return {
      profile: profileData
    }
  }
}