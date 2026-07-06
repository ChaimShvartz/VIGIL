import fs from "fs/promises";

const filePath = "data/heroes.json";

export async function dumpToFileAsync(data) {
    const text = JSON.stringify(data, null, 2);
    try {
        return await fs.writeFile(filePath, text, "utf8");
    } catch (err) {
        console.log(err.message);
    }
}

export async function loadFromFileAsync() {
    try {
        const text = await fs.readFile(filePath, "utf8");
        return JSON.parse(text);
    } catch (err) {
        console.log(err.message);
        return {};
    }
}
