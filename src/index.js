const http = require('http')
const PORT = 3000

//Función para manejar todas las requests
function handleRequest(req, res) {
  res.end(`Requested URL: ${req.url}`)
}

//Aquí se levanta el servidor
http
  .createServer(handleRequest)
  .listen(PORT, () =>
    console.log(`Server listening on: http://localhost:${PORT}`)
  )
