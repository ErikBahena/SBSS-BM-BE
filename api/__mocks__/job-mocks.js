// get all jobs related to a user with user_id: 1

const allJobs = [
  {
    // job_id: 1, //primary key in job table
    title: "Mike Bowers Interior",
    created_at: "2022-03-07 21:10:52.727684-08",
    updated_at: "2022-03-07 21:10:52.727684-08",
    // user_id: 1, // foreign key referencing a user in user table

    client: {
      client_id: 1, // foreign key referencing a client in client table
      email: "guestclient2@gmail.com",
      first_name: "guest2",
      last_name: "client2",
      phone: "3608435533",
      photo_url: "someimage.jpg",
      //   user_id: 1, // foreign key referencing a user in the user table
    },

    job_empolyees: [
      {
        // job_empoyee_id: 1, // primary key, which job employee this is
        email: "employee1@gmail.com",
        first_name: "employee1",
        last_name: "employee1",
        phone: "3608435534",
        photo_url: "",
        // empoyee_id: 1, // foreign key, which employee this is
        // job_id: 1, // foreign key referencing which job this employee belongs to

        job_hours: [
          {
            // job_hour_id: 1,
            date: "3/10/2022",
            from: "9:00am",
            to: "10:00pm",
            description: "preparing interior",
            // job_id: 1, // foreign key referencing which job this employee belongs to
            // empoyee_id: 1, // foreign key, which employee this is
          },
          {
            // job_hour_id: 2,
            date: "3/11/2022",
            from: "9:00am",
            to: "10:00pm",
            description: "painting interior",
            // job_id: 1, // foreign key referencing which job this employee belongs to
            // empoyee_id: 1, // foreign key, which employee this is
          },
        ],
        // total_hours: 4, to be computed on frontend
      },
      {
        // job_empoyee_id: 2,
        email: "employee2@gmail.com",
        first_name: "employee2",
        last_name: "employee2",
        phone: "3608435345",
        photo_url: "someimage.jpg",
        // user_id: 1, // foreign key referencing a user in the user table
        hours: [], // no hours listed
      },
    ],

    job_materials: [
      {
        // job_id: 1, //fk
        // job_material_id: 1, //pk
        // material_id: 1, //fk
        name: "SW Paint",
        price: 1032.21,
        quantity: 2,
      },
    ],
  },
];
