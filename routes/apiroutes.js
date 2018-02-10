app.get("/api/:tables?", function(req, res) {
    let chosen = req.params.tables;

    if(chosen) {
        console.log(chosen);
        for (var i = 0; i < tables.length; i++) {
            if (chosen === tables[i].routeName) {
                return res.json(tables[i]);
            }
        }
        return res.json(tables[i]);
    }
    return res.json(tables);
});

app.post("/api/new", function(req, res) {
    let newTable = req.body;
    newTable.routeName = newTable.name.replace(/\s+/g, "").toLowerCase();
    console.log(newTable);
    tables.push(newTable);
    res.json(newTable);
});

app.listen(PORT, function() {
    console.log("App is listening on PORT " + PORT);
});