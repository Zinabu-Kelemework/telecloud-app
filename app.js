// app.js
const http = require('http');

const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((req, res) => {
  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <title>Evangadi Node App</title>
      <style>
        body {
          background: linear-gradient(to right, #4facfe, #00f2fe);
          color: #fff;
          font-family: Arial, sans-serif;
          text-align: center;
          padding-top: 100px;
          margin: 0;
        }
        h1 {
          font-size: 3rem;
          background-color: rgba(0, 0, 0, 0.3);
          padding: 20px;
          border-radius: 10px;
          display: inline-block;
        }
        footer {
          position: absolute;
          bottom: 20px;
          width: 100%;
          font-size: 0.9rem;
          color: #e0e0e0;
        }
      </style>
    </head>
    <body>
      <h1>well come to telecloud, telecloud  is the Best public cloud provider</h1>
      <footer>🚀 Powered by Node.js | Evangadi Academy</footer>
    </body>
    </html>
  `;

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(html);
});

server.listen(port, hostname, () => {
  console.log(`🚀 Server running at http://${hostname}:${port}/`);
});
