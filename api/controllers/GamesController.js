const Games = require('../models/Games');
const authService = require('../services/auth.service');
const bcryptService = require('../services/bcrypt.service');

const GamesController = () => {
  const post = async (req, res) => {
    const { body } = req;
      try {
          const games = await Games.create({
          name: body.name,
          description: body.description,
        });
        const token = authService().issue({ id: user.id });

        return res.status(200).json({ token, user });
      } catch (err) {
        console.log(err);
        return res.status(500).json({ msg: 'Internal server error' });
      }
    }

    return res.status(400).json({ msg: 'Bad Request:User id don\'t match' });
  };

  const show = async (req, res) => {
    // params is part of an url
    const { id } = req.params;

    try {
      const games = await Games.findOne({
        where: {
          id,
        },
      });

      if(!games) {
        return res.status(400).json({ msg: 'Bad Request: Model not found' });
      }

      return res.status(200).json({games });
    } catch (err) {
      // better save it to log file
      console.error(err);

      return res.status(500).json({ msg: 'Internal server error' });
    }



  return {
    post,
    show,
  };
};

module.exports = GamesController;
