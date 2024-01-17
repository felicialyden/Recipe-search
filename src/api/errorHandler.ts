import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library"
import { ErrorRequestHandler } from "express"

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    if(err.message === 'Unauthorized to delete') {
        err.statusCode = 401
    }
    if(err instanceof PrismaClientKnownRequestError){
        switch (err.code){
            case 'P2002':
            err.message = `Field must be unique: ${err.meta?.target}`
            break
            case 'P2025':
            err.message = err.meta?.cause as string
            break
        }
     }
     console.log(err)
    res.status(err.statusCode || 400).json({ error: err.message })
}

export default errorHandler