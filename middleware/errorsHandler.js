function errorsHandler(err, req, res, next) {
    res.status(500);
    console.log('running middleware errorsHandler')

    res.json({
        error: err.message
    })
}

module.exports = errorsHandler;