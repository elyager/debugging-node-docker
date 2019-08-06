# Debugging Node.js app within Docker

Run:

`docker run -p 3000:3000 -v ${PWD}:/usr/httpServer -v /usr/httpServer/node_modules http-server`

