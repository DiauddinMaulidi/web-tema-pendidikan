import jwt from "jsonwebtoken"
export const verifyToken = (req, res, next) => {
    try {
        const authHeader = req.headers['authorization']
        if (!authHeader) return res.sendStatus(401)
        const token = authHeader && authHeader.split(" ")[1]
        if (token === null) return res.sendStatus(401)
        jwt.verify(token, process.env.ACCESS_TOKEN, (err, decoded) => {
            if (err) return res.sendStatus(401)
            req.email = decoded.userEmail
            next()
        })
    } catch (error) {
        console.log(error);
    }
}