export default function notFound(req, res, next) {
    res
        .status(404)
        .json({
            error: "Not Found",
            messagge: `Page ${req.path} not found`
        })

}