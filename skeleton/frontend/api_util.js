const APIUtil = {
    followUser: id => {
        return $.ajax({
            method: 'DELETE',
            url: `/users/${id}/follow`,
            dataType: "JSON",
        });
    },

    unfollowUser: id => {
        return $.ajax({
            method: 'POST',
            url: `/users/${id}/follow`,
            // we want JSON back
            dataType: "JSON",
        });
    }
}

module.exports = APIUtil;