const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.json({
        message: "Welcome to our API",
        status: "Active",
        timestamp: new Date()
    });
});

const studentList = [
    { id: 101, name: "Pallavi", course: "MERN Stack" },
    { id: 102, name: "Joyce", course: "Data Science" },
    { id: 103, name: "Fazrin", course: "UI/UX" }
];

app.get('/students', (req, res) => {
    res.json(studentList);
});

app.get('/product/:id', (req, res) => {
    const productId = req.params.id;

    res.json({
        requestedId: productId,
        category: "Electronics",
        inStock: true,
        tags: ["gadget", "new-arrival"]
    });
});

app.listen(PORT, () => {
    console.log(`JSON Server is running at http://localhost:${PORT}`);
});