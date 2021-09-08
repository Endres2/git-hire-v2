const mongoose = require('mongoose');

const { Schema } = mongoose;

const jobSchema = new Schema({
    title: {
    type: String,
    required: true,
    trim: true,
  },
  company: {
    type: String,
    required: true,
    trim: true,
  },
  location: {
    type: String,
    required: true,
    trim: true,
  },
  pay: 
    {
      type: String,
      trim: true,
    },
    date:{
        type: String,
        required: true,
        trim: true,
    },
  });



const Job = mongoose.model('Job', jobSchema);

module.exports = Job;

