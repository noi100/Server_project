export class AppError extends Error{
    constructor(code,massage){
        super(message)
        this.statusCode=code
    }
}

export function errorHandler(err,req,res,next){
    const status=err.statusCode||500
    res.status(status).send(err.massage)   
}








