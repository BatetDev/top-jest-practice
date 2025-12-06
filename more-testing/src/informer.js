module.exports = {
  sendAlert: (user, message, logger) => {
    logger(`ALERT for ${user}: ${message}`);
    return true;
  },

  notifyAll: (users, callback) => {
    return users.map((user) => callback(user));
  },
};
