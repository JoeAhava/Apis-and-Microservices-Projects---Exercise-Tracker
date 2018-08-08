const saveUser = require('../controllers/handleUser').saveUser;
const addExercise = require('../controllers/handleExercise').addExercise;

module.exports = {
  
  routes: function(app){
    app.route('/api/exercise/new-user')
    .post(saveUser);
    
    app.route('/api/exercise/add')
    .post(addExercise);
    
    app.route('/api/exercise/log')
    .get((req,res) => {
      res.json({"result": req.query});
    })
  }
  
}