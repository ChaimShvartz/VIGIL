import { dumpToFileAsync, loadFromFileAsync } from "./fileService.js";

async function getHeroByID(id) {
    const heroes = await loadFromFileAsync();    
    return heroes.find((hero) => hero.id === id);
}

async function deleteHero(id) {
    const heroes = await loadFromFileAsync();
    const index = heroes.findIndex((hero) => hero.id === id);
    if(index === -1) return 
    heroes.splice(index, 1)
    dumpToFileAsync(heroes);
    return true
}

export default {
    getHeroByID, deleteHero
}