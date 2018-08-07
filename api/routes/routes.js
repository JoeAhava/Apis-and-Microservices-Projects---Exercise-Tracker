module.exports = {
  
  routes: function(app){
    app.route('/api/exercise/new-user')
    .get((req,res) => {
      res.send("add new user");
    })
    
    app.route('/api/exercise/add')
    .get((req,res) => {
      res.send("log new exercise");
    })
    
    app.route('/api/exercise/log?{userId}[&amp;from][&amp;to][&amp;limit]')
    .get((req,res) => {
      res.send("find exercise logs");
    })
  }
  
}