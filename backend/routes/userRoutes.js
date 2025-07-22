


// Home Route
app.get("/", (req, res) => {
  res.send("Welcome to Express Backend (Day 1)");
});

// Sample route: About
app.get("/about", (req, res) => {
  res.send("This is the About page");
});

// JSON Response
app.get("/books", (req, res) => {
  res.json([
    { id: 1, title: "Atomic Habits" },
    { id: 2, title: "Clean Code" },
    { id: 3, title: "The Pragmatic Programmer" },
  ]);
});
