const Student =require('../models/student.model');
const User = require('../models/user.model');
User.belongsTo(Student, {
    foreignKey: 'id',
  });
  
  
  

  
