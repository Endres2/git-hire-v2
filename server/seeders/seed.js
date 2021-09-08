const db = require('../config/connection');
const { Profile, Job } = require('../models');


db.once('open', async () => {
  await Job.deleteMany();
  const jobs = await Job.insertMany([
    {
      title: "Full Stack Dev",
      company: "Amazon",
      location: "California",
      pay: "120000",
      date: "09/06/2021"
    },
    {
      title: "Front End",
      company: "Apple",
      location: "California",
      pay: "100000",
      date: "09/06/2021"
    },
    {
      title: "Full Stack Dev",
      company: "Amazon",
      location: "California",
      pay: "120000",
      date: "09/06/2021"
    },
    {
      title: "Full Stack Dev",
      company: "Google",
      location: "California",
      pay: "130000",
      date: "09/06/2021"
    },
    {
      title: "Full Stack Dev",
      company: "LinkedIn",
      location: "California",
      pay: "100000",
      date: "09/06/2021"
    },
    {
      title: "Full Stack Dev",
      company: "Google",
      location: "California",
      pay: "130000",
      date: "09/06/2021"
    }
  ]);
  console.log('jobs seeded');

  await Profile.deleteMany();

  await Profile.create({
      firstName: "Amiko",
      lastName: "Long",
      email: "amiko@techfriends.dev",
      password: "password03",
      jobs: [jobs[0], jobs[1], jobs[2]],
        
      
  });

  await Profile.create({
    firstName: "Sam",
    lastName: "Aguilera",
    email: "sam@techfriends.dev",
    password: "password04",
    jobs: [jobs[3], jobs[4], jobs[1]]
     
});

  console.log('users seeded');

  process.exit();

});
