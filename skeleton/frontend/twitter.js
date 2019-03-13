const FollowToggle = require('./follow_toggle.js');

const documentReadyCallback = () => {
    $('.follow-toggle').each((_, el) => {
        new FollowToggle(el);
    });
};

// wrapping a callback in `$` is the equivalent of:
//   `document.addEventListener('DOMContentLoaded', callback)`
$(documentReadyCallback);