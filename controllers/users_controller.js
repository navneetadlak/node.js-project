<<<<<<< Updated upstream
module.exports.profile = function(req, res){
    
    return res.render('user_profile', {
        title: 'User Profile'
    });
=======
const User = require('../models/user')

module.exports.profile = function(req, res){ 
//    return res.render('user_profile', {
//        title: 'User Profile'
//    });
  


}

// render the sign up page
module.exports.signUp= function(req, res){
    return res.render('user_sign_up',{
        title: "Codeial | Sign Up"
    })
}

// render the sign in page
module.exports.signIn= function(req, res){
    return res.render('user_sign_in',{
        title: "Codeial | Sign In"
    })
}

// get the sign up data
// module.exports.create = function(req, res){
//     if(req.body.password != req.body.confirm_password){
//         return res.redirect('back');
//     }

//     User.findOne({email: req.body.email}, function(err, user){
//          if(err){console.log('error in finding user in signing up'); return}
        
//         if(!user){
//             User.create(req.body, function(err, user){
//                 if(err){console.log('error in creating user while signing up'); reeturn}
//                 return res.redirect('/users/sign-in');
//             })
//         }else{
//             return res.redirect('back');
//         }

//     });
// }
module.exports.create = function(req, res) {
    if (req.body.password !== req.body.confirm_password) {
        // req.flash('error', 'Passwords do not match');
        console.log('Passwords do not match');
        return res.redirect('back');
    }

    User.findOne({ email: req.body.email })
        .then(user => {
            if (!user) {
                return User.create(req.body)
                    .then(newUser => {
                        return res.redirect('/users/sign-in');
                    })
                    .catch(err => {
                        console.log('error', err);
                        return res.redirect('back');
                    });
            } else {
                console.log('success', 'You have signed up, login to continue!');
                return res.redirect('back');
            }
        })
        .catch(err => {
            console.log('error', err);
            return res.redirect('back');
        });
};


// sign in and create a session for the user
module.exports.createSession = function(req, res){
    // find the user
    User.findOne({email: req.body.email}, function(err, user){
        if(err){console.log('error in finding user in signing in'); return}
        // handle user found
        if(user){

         // handle password which don't match
         if(user.password != req.body.password){
            return res.redirect('back');
         }

        // handle session creation
        res.cookie('user_id', user.id);
        return res.redirect('/users/profile');

        }else{
          // handle user found

        }

    });

   

   

    // handle user not found
>>>>>>> Stashed changes
}