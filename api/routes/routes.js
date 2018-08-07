module.exports = {
  
  routes: function(app){
    app.route('/api/exercise/new-user')
    .post((req,res) => {
      let username = req.body.username;
      res.json({username});
    })
    
    app.route('/api/exercise/add')
    .post((req,res) => {
      res.json({});
    })
    
    app.route('/api/exercise/log')
    .get((req,res) => {
      res.json({"result": req.query});
    })
  }
  
}