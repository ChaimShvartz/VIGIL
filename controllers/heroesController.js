import heroFuncs from "../services/heroesService.js";

function getHeroes(req, res) {}

async function getHeroByID(req, res) {
    const id = req?.params.id;
    const hero = await heroFuncs.getHeroByID(id);

    if (hero) return res.status(200).send({ success: true, data: hero });
    res.status(404).send({ success: false, message: "Hero not found" });
}

function createHero(req, res) {}

function updateHero(req, res) {}

async function deleteHero(req, res) {
    const id = req?.params.id;
    const deleted = await heroFuncs.deleteHero(id);

    if (deleted)
        return res
            .status(200)
            .send({
                success: true,
                data: { message: "Hero deleted successfully" },
            });
    res.status(404).send({ success: false, message: "Hero not found" });
}

export default {
    getHeroes,
    getHeroByID,
    createHero,
    updateHero,
    deleteHero,
};
