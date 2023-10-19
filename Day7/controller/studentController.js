const getAllStudents = async (req,res) => {
  console.log("INside Function");
  try {
    const students = await Student.findAll();
    console.log(JSON.stringify(students));
    res.json(students);
    
  } catch (error) {
    res.json({error:true , message:"Could not find students"});

  }

};



module.exports = { getAllStudents };
