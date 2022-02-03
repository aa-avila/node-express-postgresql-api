const notesService = require('../services/notes');

const getAll = async (req, res, next) => {
  try {
    const response = await notesService.getAll();
    res.status(200).send(response);
  } catch (error) {
    next(error);
  }
};

const getById = async (req, res, next) => {
  try {
    const response = await notesService.getById(req.params.id);
    res.status(200).send(response);
  } catch (error) {
    next(error);
  }
};

const create = async (req, res, next) => {
  try {
    const response = await notesService.create(req.body);
    res.status(200).send(response);
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
    const response = await notesService.update(req.params.id, req.body);
    res.status(200).send(response);
  } catch (error) {
    next(error);
  }
};

const remove = async (req, res, next) => {
  try {
    const response = await notesService.remove(req.params.id);

    res.status(200).send(response);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove
};
