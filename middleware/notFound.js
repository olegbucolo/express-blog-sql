function notFound(req, res, next) {
    res.status(404);
    console.log('running middleware notFound')
    res.json({
        status: 404,

        error: "Not Found",
        message: "Pagina non trovata"
    })
}

module.exports = notFound;