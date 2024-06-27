const fs = require("fs")

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const pathToStatic = "./public/static"

fs.readdir(`${pathToStatic}/chapters`, async function (err, files) {
    if (err) {
        throw new Error(err.message)
    }

    const h2s = []

    for await (const file of files) {
        // fs.rename(`${pathToStatic}/img/${file}`, `0${file.split("chapter")[1]}`, function (err) {
        //     if (err) {
        //         console.log('ERROR: ' + err);
        //     }
        // })


        const data = fs.readFileSync(`${pathToStatic}/chapters/${file}`, {encoding: "utf8"})
        const parsed = JSON.parse(data)

        h2s.push({
            pathname: file.split(".")[0],
            title: capitalizeFirstLetter(parsed["h2"].toLowerCase()),
            subTitle: parsed["h3"]
        })
    }

    console.log({h2s});

    fs.writeFile(`${pathToStatic}/h2s.json`, JSON.stringify(h2s, null, 2), function (err) {
        if (err) {
            throw new Error(err.message)
        }
    })
})
