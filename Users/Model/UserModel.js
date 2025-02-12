const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({

  
  Name: { 
    type: String, 
    required: true 
  },
  email: { 
    type: String, 
    required: true, 
    unique: true, 
    lowercase: true 
  },
  Password: { 
    type: String, 
    required: true 
  },
  Mobile: {
    type: String,
    required: true,
  }
 
 
});

// Step 3: Create the User model
const UserModel = mongoose.model('User', userSchema);
module.exports = UserModel