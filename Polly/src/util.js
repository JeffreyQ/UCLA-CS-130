export default {
  getProfilePicUrl: id => {
    return `http://graph.facebook.com/v5.0/${id}/picture?width=300&height=300`
  }
}
