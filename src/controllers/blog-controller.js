module.exports = blogController = {
    index: (_req, res) => {
        res.status(200).render('blog')
    }
}