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

// Client Data Formating

const formatClientData = (clientData) => ({
  client_id: clientData.client_id,
  first_name: clientData.first_name,
  last_name: clientData.last_name,
  email: clientData.email,
  photo_url: clientData.photo_url,
  phone: clientData.phone,
  created_at: clientData.created_at,

  address: {
    client_address_id: clientData.client_address_id,
    street: clientData.street,
    state: clientData.state,
    country: clientData.country,
    postal_code: clientData.postal_code,
    city: clientData.city,
  },
});

const formatUserClients = (userClients) =>
  userClients.map((clientData) => formatClientData(clientData));

// Employee Data Formating

const formatEmployeeData = (employeeData) => ({
  employee_id: employeeData.employee_id,
  first_name: employeeData.first_name,
  last_name: employeeData.last_name,
  email: employeeData.email,
  photo_url: employeeData.photo_url,
  phone: employeeData.phone,
  created_at: employeeData.created_at,

  address: {
    employee_address_id: employeeData.employee_address_id,
    street: employeeData.street,
    state: employeeData.state,
    country: employeeData.country,
    postal_code: employeeData.postal_code,
    city: employeeData.city,
  },
});

const formatUserEmployees = (userEmployees) =>
  userEmployees.map((employeeData) => formatEmployeeData(employeeData));

// Job Data Formating

const formatJob = (jobData) => ({
  job_id: jobData.job_id,
  title: jobData.title,
  description: jobData.description,
  created_at: jobData.created_at,

  client: {
    id: jobData.client_id,
    first_name: jobData.client_first_name,
    last_name: jobData.client_last_name,
    email: jobData.client_email,
    phone: jobData.client_phone,
  },

  employees: jobData.employees,
});

const formatUserJobs = (userJobs) =>
  userJobs.map((jobData) => formatJob(jobData));

module.exports = {
  formatUserData,
  formatClientData,
  formatUserClients,
  formatUserEmployees,
  formatEmployeeData,
  formatJob,
  formatUserJobs,
};
