const app = require('express')();
const PORT = 8000;

app.listen(
    PORT,
    () => console.log(`Server is running on port ${PORT}`)
)

app.get('/', (req, res) => {
    const trees = require('./trees.json');
    res.json(trees);
});

app.get('/species', (req, res) => {
    const trees = require('./trees.json');
    const species = trees.map(tree => tree.Species);
    res.json(species);
});

app.get('/species/:name', (req, res) => {
    const trees = require('./trees.json');
    const { name } = req.params;
    const species = trees.filter(tree => tree.Species === name);
    res.json(species);
});





