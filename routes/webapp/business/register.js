
exports.get = function (req, res) {
    res.render('business/register', {
      layout: false,
      title: 'Register'
    });
};
