const Database = require("../db/config")
module.exports = {
  async create(req, res) {
    const db = await Database()
    const pass = req.body.password
    let roomId
    let isRoom = true

    while (isRoom) {
      for (var i = 0; i < 6; i++) {
        if (i == 0) {
          roomId = Math.floor(Math.random() * 10).toString()
        }
        else {
          roomId += Math.floor(Math.random() * 10).toString()
        }
      }

      const roomsExistIds = await db.all(`SELECT id from rooms`)
      isRoom = roomsExistIds.some(roomsExistIds => roomsExistIds === roomId)
      if (!isRoom) {
        await db.run(
          `INSERT INTO rooms(
            id, 
            pass) 
            VALUES(
            ${parseInt(roomId)}, 
            ${pass})`)
      }
    }



    await db.close

    res.redirect(`room/${roomId}`)
  }
}