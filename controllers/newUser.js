
const newUser = async (req, res) => {
    
    //  first getting the data from the body
    const {name,email,password} = req.body
  
  
    // as the key value pair is same we can directly pass
    await User.create({
      name,email,password   
    })
  
    res.status(201).json({
      success:true,
      Message:"User Register Sucessfully"
    })
  };
  
  module.exports = newUser;