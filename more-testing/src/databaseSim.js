// Simulated database with shared state
// Demonstrates why setup/teardown is important for testing

module.exports = {
  users: [],

  addUser: function (user) {
    this.users.push(user);
    return this.users.length;
  },

  clearUsers: function () {
    this.users = [];
  },

  getUserCount: function () {
    return this.users.length;
  },

  findUser: function (name) {
    return this.users.find((user) => user === name);
  },
};
