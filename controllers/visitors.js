const Visitor = require('../models/Visitor');

exports.createVisitor = async (req, res, next) => {
  try {
    let { name } = req.query;
    if (!name || name.length === 0) { name = 'Anónimo'; }

    const visitor = await Visitor.create({ name }, (err) => {
      if (err) return console.error(err);
    });

    return res.render('index', {
      text: 'El visitante fue almacenado con éxito',
    });
  } catch (error) {
    console.error(error);
    res.status(500); // this suits for API endpoints
  }
};
