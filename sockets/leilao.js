module.exports = (io) => io.on('connection', (socket) => {
  console.log(`userId: ${socket.id} conectado.`);
});