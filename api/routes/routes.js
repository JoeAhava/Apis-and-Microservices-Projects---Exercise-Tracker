module.exports = {
  
  routes: function(app){
    app.route('/api/exercise/new-user')
    .post((req,res) => {
      res.send("add new user");
    })
    
    app.route('/api/exercise/add')
    .post((req,res) => {
      res.send("log new exercise");
    })
    
    app.route('/api/exercise/log')
    .get((req,res) => {
      res.json({"result": req.query});
    })
  }
  
}