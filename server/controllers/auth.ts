import { Request, Response } from 'express'

export const register = (req: Request, res: Response) => {
    res.send('Register user response from controller')
}