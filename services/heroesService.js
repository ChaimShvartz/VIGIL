import { loadFromFileAsync } from "./fileService.js";

async function getHeroByID(id) {
    const heroes = await loadFromFileAsync();
    console.log(id);
    
    return heroes.find((hero) => hero.id === id);
}

export default {
    getHeroByID
}