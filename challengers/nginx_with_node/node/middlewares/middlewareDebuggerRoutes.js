export function middlewareDebuggerRoutes(req, _, next)  {
    console.log(`METHOD=${req.method} PATH=${req.url}`)
    next();
}