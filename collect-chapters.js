const fs = require("fs")

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const pathToStatic = "./public/static"

const args = process.argv

if (args[2] !== "--book") {
    throw new Error("no book passed")
}

const availableBooks = ["crusoe", "onegin"]

const book = args[3]

if (!availableBooks.includes(book)) {
    throw new Error(`No book with name '${book}' found. Available books: '${availableBooks.join("', '")}'.`)
}

fs.readdir(`${pathToStatic}/${book}`, async function (err, files) {
    if (err) {
        throw new Error(err.message)
    }

    const h2s = []

    for await (const file of files) {
        const data = fs.readFileSync(`${pathToStatic}/${book}/${file}`, {encoding: "utf8"})
        const parsed = JSON.parse(data)

        h2s.push({
            pathname: file.split(".")[0],
            title: capitalizeFirstLetter(parsed["h2"].toLowerCase()),
            subTitle: parsed["h3"]
        })
    }

    // console.log({h2s});

    fs.writeFile(`${pathToStatic}/h2s-${book}.json`, JSON.stringify(h2s, null, 2), function (err) {
        if (err) {
            throw new Error(err.message)
        }
    })
})
