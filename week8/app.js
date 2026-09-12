const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
  session({
    secret: "mySecretKey",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 5 * 60 * 1000 // 5 minutes
    }
  })
);

// Home page
app.get("/", (req, res) => {
  res.send(`
    <h1>Stateful Web Application</h1>

    <h2>Login</h2>
    <form action="/login" method="POST">
      <input type="text" name="username" placeholder="Username" required>
      <input type="password" name="password" placeholder="Password" required>
      <button type="submit">Login</button>
    </form>

    <br>

    <a href="/set-cookie">Create Cookie</a><br>
    <a href="/get-cookie">Read Cookie</a><br>
    <a href="/private">Private Route</a><br>
    <a href="/logout">Logout</a>
  `);
});


// --------------------------------------------------
// 1. CREATE COOKIE
// --------------------------------------------------

app.get("/set-cookie", (req, res) => {

  res.cookie("username", "student", {
    maxAge: 60 * 60 * 1000,
    httpOnly: true
  });

  res.send("Cookie created successfully!");
});


// --------------------------------------------------
// 2. READ COOKIE
// --------------------------------------------------

app.get("/get-cookie", (req, res) => {

  const username = req.cookies.username;

  if (username) {
    res.send(`Cookie value: ${username}`);
  } else {
    res.send("Cookie not found");
  }
});


// --------------------------------------------------
// 3. LOGIN AND MAINTAIN SESSION
// --------------------------------------------------

app.post("/login", (req, res) => {

  const { username, password } = req.body;

  // Simple demo credentials
  if (username === "admin" && password === "1234") {

    // Store user information in session
    req.session.user = username;

    res.send(`
      <h2>Login Successful!</h2>
      <p>Welcome, ${username}</p>

      <a href="/private">Go to Private Page</a><br>
      <a href="/logout">Logout</a>
    `);

  } else {

    res.send(`
      <h2>Login Failed</h2>
      <p>Invalid username or password.</p>
      <a href="/">Try Again</a>
    `);
  }
});


// --------------------------------------------------
// 4. PROTECT PRIVATE ROUTE
// --------------------------------------------------

app.get("/private", (req, res) => {

  // Check whether session exists
  if (req.session.user) {

    res.send(`
      <h1>Private Page</h1>
      <p>Welcome ${req.session.user}!</p>
      <p>You are authorized to access this page.</p>

      <a href="/logout">Logout</a>
    `);

  } else {

    res.status(401).send(`
      <h2>Access Denied</h2>
      <p>Please login first.</p>
      <a href="/">Login</a>
    `);
  }
});


// --------------------------------------------------
// 5. LOGOUT
// --------------------------------------------------

app.get("/logout", (req, res) => {

  req.session.destroy((err) => {

    if (err) {
      return res.send("Unable to logout");
    }

    res.clearCookie("connect.sid");

    res.send(`
      <h2>Logout Successful</h2>
      <p>Your session has been destroyed.</p>

      <a href="/">Login Again</a>
    `);
  });
});


// Start server
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});