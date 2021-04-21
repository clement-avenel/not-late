const Apology = require('../models/apologyModel');

exports.index = (req, res, next) => {
    Apology.find().then(
      (apologies) => {
        res.status(200).json(apologies);
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
};

exports.new = (req, res, next) => {
    const apology = new Apology({
        vip: req.body.vip,
        delay: req.body.delay,
        message: req.body.message,
        create_date : Date.now(),
        update_date : Date.now(),
    });
};

exports.update = (req, res, next) => {
    const apology = new Apology({
        vip: req.body.vip,
        delay: req.body.delay,
        message: req.body.message,
        update_date : Date.now(),
    });

    Apology.updateOne({_id: req.params.id}, apology).then(
      () => {
        res.status(202).json({
          message: 'Apology updated successfully!'
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
};

exports.delete = (req, res, next) => {
    Apology.deleteOne({_id: req.params.id}).then(
      () => {
        res.status(200).json({
          message: 'Apology deleted!'
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
};
