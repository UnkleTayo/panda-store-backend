import asyncHandler from 'express-async-handler';
import User from '../Model/userModel.js';
import generateToken from '../utils/generateToken.js';


/*
@desc Auth user & get token
@route POST /api/v1/users/login
@access Public
*/  

const authUser = asyncHandler(async (req, res) => { 
 const {email, password} = req.body

 const user = await User.findOne({email})

 if (user && (await user.matchPassword(password))){
   res.json({
     _id: user._id, 
     name: user.name,
     email: user.email,
     isAdmin: user.isAdmin,
     token: generateToken(user._id)
   })
 } else{
   res.status(401)
   throw new Error("Invalid email or password")
 }
  res.send({email, password})
})

/*
@desc Get User Profile
@route POST /api/v1/users/profile
@access private
*/  
const getUserProfile  = asyncHandler(async (req, res) => { 

const user = await User.findById(req.user._id)
 
  if (user){
    res.json({
      _id: user._id, 
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id)
    })
  } else{
    res.status(401)
    throw new Error("Invalid email or password")
  }
   res.send({email, password})
 })



 
/*
@desc Auth user & get token
@route POST /api/v1/users   
@access Public
*/  

const registerUser = asyncHandler(async (req, res) => { 
 const {name, email, password} = req.body

 const userExists = await User.findOne({email})

 if (userExists){
   res.status(400)
   throw new Error('User already exists')
 }

 const user = await User.create({
   name, email, password
 })

 if (user){
   res.status(201).json({
    _id: user._id, 
    name: user.name,
    email: user.email,
    isAdmin: user.isAdmin,
    token: generateToken(user._id)
   })
 } else{
   res.status(400)
   throw new Error("User not found")
 }

})



/*
@desc Update User Profile
@route PUT /api/v1/users/profile
@access private
*/  
const updateUserProfile  = asyncHandler(async (req, res) => { 
  const user = await User.findById(req.user._id)
   
    if (user){
      user.name = req.body.name || user.name
      user.email = req.body.email || user.email
      if (req.body.password){
        user.password = req.body.password
      }
      const updatedUser = await user.save()
      res.json({
        _id: updatedUser._id, 
        name: updatedUser.name,
        email: updatedUser.email,
        isAdmin: updatedUser.isAdmin,
        token: generateToken(updatedUser._id)
      })
       } else{
      res.status(401)
      throw new Error("Invalid email or password")
    }
     res.send({email, password,})
   })
  

 

export {authUser,getUserProfile, registerUser, updateUserProfile}
