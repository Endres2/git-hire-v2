const { AuthenticationError } = require('apollo-server-express');
const { Profile, JobList } = require('../models');
const Job = require('../models/Job');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    profiles: async () => {
      return Profile.find();
    },

    profile: async (parent, { profileId }) => {
      return Profile.findOne({ _id: profileId });
    },
    // job: async ()=>{
    //   return JobList.find();
    // }
  },

  Mutation: {
    addProfile: async (parent, { firstName, lastName, email, password }) => {
      const profile = await Profile.create({ firstName, lastName, email, password });
      const token = signToken(profile);

      return { token, profile };
    },
    login: async (parent, { email, password }) => {
      const profile = await Profile.findOne({ email });

      if (!profile) {
        throw new AuthenticationError('No profile with this email found!');
      }

      const correctPw = await profile.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

      const token = signToken(profile);
      return { token, profile };
    },

    addJob: async (parent, { profileId, job }) => {
      // const newJob = Job.create(job:{});
      return Profile.findOneAndUpdate(
        { _id: profileId },
        {
          $addToSet: {  jobs: newJob},
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    removeProfile: async (parent, { profileId }) => {
      return Profile.findOneAndDelete({ _id: profileId });
    },
    removeSkill: async (parent, { profileId, jobs }) => {
      return Profile.findOneAndUpdate(
        { _id: profileId },
        { $pull: { jobs: Job } },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;
