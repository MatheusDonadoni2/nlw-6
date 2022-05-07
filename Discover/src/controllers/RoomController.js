module.exports = {
  create(req, res) {
    let roomId = 123456

    createInfoBD = {}

    res.redirect(`room/${roomId}`)
  }
}