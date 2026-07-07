function checkHealth(req, res) {
    res.status(200).send({success: true, data: {msg: "OK"}})
}
function getStats(req, res) {}

export default {
    checkHealth,
    getStats,
};
