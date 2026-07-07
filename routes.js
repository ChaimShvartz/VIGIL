import heroesTools from "./controllers/heroesController.js";
import generalTools from "./controllers/generalControllers.js";

export default {
    GET: {
        "/heroes": heroesTools.getHeroes,
        "/health": generalTools.checkHealth,
        "/heroes/:id": heroesTools.getHeroByID,
        "/stats": generalTools.getStats,
    },
    POST: {
        "/heroes": heroesTools.createHero,
        "/heroes/search": heroesTools.getHeroes,
    },
    PATCH: {
        "/heroes/:id": heroesTools.updateHero,
    },
    DELETE: {
        "/heroes/:id": heroesTools.deleteHero,
    },
};
