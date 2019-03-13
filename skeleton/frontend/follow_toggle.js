const APIUtil = require('./api_util.js');

class FollowToggle{
    constructor(el){
        this.el = $(el);
        this.userId = this.el.context.dataset.userId;
        this.followState = this.el.context.dataset.initialFollowState;
        this._render();
        this.el.on('click', this._handleClick.bind(this));
    }

    _render() {
        // debugger
        this.el.empty();
        if (this.followState === "true") {
            this.el.append('follow');
        }
        else {
            this.el.append('unfollow');
        }
    }

    _handleClick(e) {
        e.preventDefault();
        if (this.followState === "true"){
            APIUtil.followUser(this.userId).then(() => { this.followState = "false"; this._render(); });
        } else {
            APIUtil.unfollowUser(this.userId).then(()  => { this.followState = "true"; this._render(); });
        }
    }    
}

module.exports = FollowToggle;