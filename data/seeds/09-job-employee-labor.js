exports.seed = function (knex) {
  return knex("job_employee_labor").insert([
    {
      startDateTime: "2022-03-26T21:02",
      endDateTime: "2022-03-26T21:30",
      description:
        "nec orci. Donec nibh. Quisque nonummy ipsum non arcu. Vivamus sit amet risus. Donec egestas. Aliquam nec enim. Nunc ut",
      job_employee_id: 1,
    },
    {
      startDateTime: "2022-03-26T21:02",
      endDateTime: "2022-03-26T21:30",
      description: "nec orci. Donec asdn teht jdfiemms  sdfj  ejf nc ut",
      job_employee_id: 1,
    },
    {
      startDateTime: "2022-03-26T21:02",
      endDateTime: "2022-03-26T21:30",
      description:
        "erat eget ipsum. SuspendDateTimeisse sagittis. Nullam vitae diam. Proin dolor. Nulla semper tellus id nunc interdum feugiat. Sed nec metus",
      job_employee_id: 2,
    },
    {
      startDateTime: "2022-03-26T21:02",
      endDateTime: "2022-03-26T21:30",
      description:
        "vulputate, risus a ultricies adipiscing, enim mi tempor lorem, eget mollis lectus pede et risus. Quisque libero lacus, varius et,",
      job_employee_id: 3,
    },
    {
      startDateTime: "2022-03-26T21:02",
      endDateTime: "2022-03-26T21:30",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam laoreet, libero et tristique pellentesque, tellus sem mollis dui, in sodales",
      job_employee_id: 4,
    },
    {
      startDateTime: "2022-03-26T21:02",
      endDateTime: "2022-03-26T21:30",
      description:
        "est, congue a, aliquet vel, vulputate eu, odio. Phasellus at augue id ante dictum cursus. Nunc mauris elit, dictum eu,",
      job_employee_id: 5,
    },
    {
      startDateTime: "2022-03-26T21:02",
      endDateTime: "2022-03-26T21:30",
      description:
        "est, congue a, aliquet vel, vulputate eu, odio. Phasellus at augue id ante dictum cursus. Nunc mauris elit, dictum eu,",
      job_employee_id: 5,
    },
  ]);
};
