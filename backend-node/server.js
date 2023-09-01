require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const corsOptions = require("./config/corsOptions");

const errorHandler = require("./middleware/errorHandler");
const verifyJWT = require("./middleware/verifyJWT");
const cookieParser = require("cookie-parser");
const credentials = require("./middleware/credentials");
const mongoose = require("mongoose");
const connectDB = require("./config/dbConn");

const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger"); // Import the Swagger specification

// Middleware to serve Swagger UI
// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const PORT = process.env.PORT || 3500;

// Serve static files from the 'uploads' directory
app.use(
  "/product-image",
  express.static(path.join(__dirname, "product-image"))
);

// Connect to MongoDB
connectDB();

// Handle options credentials check - before CORS!
// and fetch cookies credentials requirement
app.use(credentials);

// Cross Origin Resource Sharing
app.use(cors(corsOptions));

// built-in middleware to handle urlencoded form data
app.use(express.urlencoded({ extended: false }));

// built-in middleware for json
app.use(express.json());

//middleware for cookies
app.use(cookieParser());

//serve static files
app.use("/", express.static(path.join(__dirname, "/public")));

// routes
app.use("/register", require("./routes/register"));
app.use("/auth", require("./routes/auth"));
app.use("/users", require("./routes/users"));
app.use("/refresh", require("./routes/refresh"));
app.use("/logout", require("./routes/logout"));

app.use("/products", require("./routes/api/products"));

app.use(verifyJWT);
app.use("/fund-wallet", require("./routes/api/fund-wallet"));
app.use("/add-new-product", require("./routes/api/add-new-product"));
app.use("/purchase-item", require("./routes/api/purchase-product"));
app.use("/confirm-order", require("./routes/orders/confirm-order"));
app.use("/withdraw", require("./routes/api/withdraw-funds"));

app.use(errorHandler);

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
