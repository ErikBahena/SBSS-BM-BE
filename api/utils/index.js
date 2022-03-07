const formatUserData = (userData) => ({
  user_id: userData.user_id,
  first_name: userData.first_name,
  last_name: userData.last_name,
  email: userData.email,
  photo_url: userData.photo_url,

  address: {
    user_address_id: userData.user_address_id,
    street: userData.street,
    state: userData.state,
    country: userData.country,
    postal_code: userData.postal_code,
    city: userData.city,
  },
});

module.exports = {
  formatUserData,
};
