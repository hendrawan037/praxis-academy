var MOUNTAINS = [
    { Name: "Kilimanjaro", Height: 5895, Country: "Tanzania" },
    { Name: "Everest", Height: 8848, Country: "Nepal" },
    { Name: "Mount Fuji", Height: 3776, Country: "Japan" },
    { Name: "Mont Blanc", Height: 4808, Country: "Italy/France" },
    { Name: "Vaalserberg", Height: 323, Country: "Netherlands" },
    { Name: "Denali", Height: 6168, Country: "United States" },
    { Name: "Popocatepetl", Height: 5465, Country: "Mexico" }
];

function buildTable(data) {
    var table = document.createElement("table");
    var properties = Object.keys(data[0]);
    var header = document.createElement("tr");

    // create the header
    var textNode, th;
    for (var i = 0; i < properties.length; i++) {
        textNode = document.createTextNode(properties[i]);
        th = document.createElement("th");
        th.appendChild(textNode);
        header.appendChild(th);
    }
    table.appendChild(header);

    // create the rows
    data.forEach(function (obj) {
        var row = document.createElement("tr");
        for (var i = 0; i < properties.length; i++) {
            var item = document.createElement("td");
            if (Number.isInteger(obj[properties[i]]))
                item.style.textAlign = "right";
            var text = document.createTextNode(obj[properties[i]]);
            item.appendChild(text);
            row.appendChild(item);
        }
        table.appendChild(row);
    });
    return table;
}

function test() {
    document.getElementsByTagName("div")[0].appendChild(buildTable(MOUNTAINS));
}
test();