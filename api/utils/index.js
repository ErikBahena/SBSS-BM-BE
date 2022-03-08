const formatUserData = (userData) => ({
  user_id: userData.user_id,
  first_name: userData.first_name,
  last_name: userData.last_name,
  email: userData.email,
  photo_url: userData.photo_url,
  phone: userData.phone,

  address: {
    user_address_id: userData.user_address_id,
    street: userData.street,
    state: userData.state,
    country: userData.country,
    postal_code: userData.postal_code,
    city: userData.city,
  },
});
const formatClientData = (clientData) => ({
  client_id: clientData.client_id,
  first_name: clientData.first_name,
  last_name: clientData.last_name,
  email: clientData.email,
  photo_url: clientData.photo_url,
  phone: clientData.phone,

  address: {
    client_address_id: clientData.client_address_id,
    street: clientData.street,
    state: clientData.state,
    country: clientData.country,
    postal_code: clientData.postal_code,
    city: clientData.city,
  },
});

module.exports = {
  formatUserData,
  formatClientData,
};
