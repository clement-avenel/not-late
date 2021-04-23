const data = require('../data/apologies.json')

exports.index = (req, res, next) => {
  let randomApology = data[Math.floor(Math.random() * data.length)]
  if(randomApology !== undefined){
    res.status(200).json(randomApology);
  }else{
    res.status(400).json({
      error: "An error occurred"
    });
  }
};
