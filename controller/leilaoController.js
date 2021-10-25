const inialPage = (req, res) => {
  res.status(200).render('index');
}

module.exports = {
  inialPage
};