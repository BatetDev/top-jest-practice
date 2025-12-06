const logger = require('./logger');

/**
 * A notification service that depends on an external logger.
 * This mimics how one module (like Game) might call another (like Render).
 */
const Notifier = {
  /**
   * Sends an alert for a user with a given priority.
   * @param {string} user - The user to alert
   * @param {string} priority - 'low' or 'high'
   * @returns {boolean} Success status from logger
   * @throws {Error} If high-priority alert fails to log
   */
  sendAlert: (user, priority = 'low') => {
    // 1. Create the message
    const message = `Alert for ${user}: Check system`;

    // 2. Call the dependency - THIS is what we'll test
    const success = logger.log(message);

    // 3. Business logic: high-priority alerts must succeed
    if (priority === 'high' && !success) {
      throw new Error('Failed to send high-priority alert!');
    }

    // 4. Return the result
    return success;
  },
};

module.exports = Notifier;
