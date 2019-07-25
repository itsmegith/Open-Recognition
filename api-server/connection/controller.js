const connections = require('./model');

const controller = {};

// routes =>

/* ------------------- INDEX -------------------*/
// GET  "/"                     => greetings

controller.welcome = (req, res) => {
  console.log("-- GET /all --");
  res.send("hi, you're at the connections api");
}

/* ------------------- INDEX -------------------*/
// GET  "/all"                     => show all connections

controller.get_all = (req, res) => {
  console.log("-- GET /all --");
  connections.find()
    // modify the next line based on your project's needs
    .then((db_response) => {
      const pojo_response = JSON.parse(JSON.stringify(db_response));
      const map_cb = x => {delete x.__v; return x};
      const no__v = pojo_response.map(map_cb);
      res.send(no__v);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message
      });
    });
 }

/* ------------------- CREATE -------------------*/
// GET  "/add"                => instructions
// POST "/add"                => Create new connections

controller.get_add = (req, res) => {
    console.log("-- GET /add --");
  const newLocal = "send a post request to this rout with a user in the body - schema";
    res.send(newLocal);
}

controller.post_add = (req, res) => {
    console.log("-- POST /add --");
    const new_user1_id = req.body.user1_id;
    const new_user2_id = req.body.user2_id;
    const new_accept1 = req.body.accept1;
    const new_accept2 = req.body.accept2;
    const new_story = req.body.story;
    const new_location = req.body.location;

    const new_profile = { user1_id: new_user1_id,user2_id: new_user2_id,accept1: new_accept1,accept2: new_accept2, story: new_story, location: new_location };
    connections.create(new_profile)
      // modify the next line based on your project's needs
      .then((db_response) => { res.send(db_response) })
      .catch((err) => {
        res.status(500).send({
          message: err.message
        });
      });
}


/* ------------------- READ -------------------*/
// GET  "/find/:id"             => View connections Info with id ...


controller.get_id = (req, res) => {
    const profile_id = req.params.id;
    console.log("-- GET /"+profile_id+"/find --");
    const id_object = { _id: profile_id };
    connections.find(id_object)
      // modify the next line based on your project's needs
      .then((db_response) => { res.send(db_response) })
      .catch((err) => {
        res.status(500).send({
          message: err.message
        });
      });
}



/* ------------------- UPDATE -------------------*/
// GET  "/:id/update"     => instructions
// POST "/:id/update"     => update connections with id...


controller.get_id_update = (req, res) => {
    const profile_id = req.params.id;
    console.log("-- GET /"+profile_id+"/update --");
    res.send();
}

controller.post_id_update = (req, res) => {
    const profile_id = req.params.id;
    console.log("-- POST /"+profile_id+"/update --");
    const id_object = { _id: profile_id };
    const user1_id = req.body.user1_id;
    const user2_id_id = req.body.user2_id_id;
    const accept1 = req.body.accept1;
    const accept2 = req.body.accept2;
    const story = req.body.story;
    const location = req.body.location
    const connection_object = { user1_id: user1_id,user2_id_id:user2_id_id,accept1:accept1,accept2:accept2,story:story,location: location };
    connections.update(id_object,connection_object)
      // modify the next line based on your project's needs        
      .then((db_response) => { res.send(db_response) })
      .catch((err) => {
        res.status(500).send({
          message: err.message
        });
      });
}

/* ------------------- DELETE -------------------*/
// GET  "/:id/delete"     => instructions
// POST "/:id/delete"     => delete connections with id...


controller.get_id_delete = (req, res) => {
    const profile_id = req.params.id;
    console.log("-- GET /"+profile_id+"/delete --");
    res.send("deleted");
}

controller.post_id_delete = (req, res) => {
    const profile_id = req.params.id;
    console.log("-- POST /"+profile_id+"/delete --");
    const id_object = { _id: profile_id };
    connections.remove(id_object)
      // modify the next line based on your project's needs
      .then((db_response) => { res.send(db_response) })
      .catch((err) => {
        res.status(500).send({
          message: err.message
        });
      });
}


module.exports = controller;
