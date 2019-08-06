# Debugging Node.js app within Docker

## Paso 1

Run: `docker build -t http-server .`
## Paso 2
Run:

`docker run -p 3000:3000 -v ${PWD}:/usr/httpServer -v /usr/httpServer/node_modules http-server`

