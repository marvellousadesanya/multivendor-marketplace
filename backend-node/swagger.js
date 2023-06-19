const swaggerJSDoc = require("swagger-jsdoc");

// Swagger configuration options
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "ByteMarket API",
      version: "1.0.0",
      description: "API documentation for the pair-to-pair gadget marketplace.",
      contact: "marvellousniyi123@gmail.com",
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  servers: [
    {
      url: "http://localhost:4500", // Update with your server URL
      description: "This is the local server",
    },
  ],
  apis: [
    "./routes/*.js", // Routes in the routes directory
    "./routes/api/*.js", // Routes in the routes/api directory
    "./routes/orders/*.js", // Routes in routes/orders directory
  ],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
