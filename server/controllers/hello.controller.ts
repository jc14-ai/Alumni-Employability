import { Request, Response } from "express";

export const hello = async (req:Request, res: Response) => {
    return res.status(200).json({hello:"hello world!"});
}