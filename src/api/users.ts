import { Router } from "express";
import prisma from "../prisma";

const router = Router();

router.get("/:id", async (req, res, next) => {
    const userId = Number(req.params.id)
    try {
      const response = await prisma.user.findUnique({
        where: {id: userId}
      });
      
      if(!response) {
        throw Error('User does not exist')
      }
      res.json(response);
    } catch (error) {
      next(error);
    }
  });

router.get("/:id/saved", async (req, res, next) => {
    const userId = Number(req.params.id)
    try {
      const response = await prisma.saved.findMany({
        where: {userId: userId}
      });

      console.log(response)

      if(!response) {
        throw Error('No saved recipes')
      }
      res.json(response);
    } catch (error) {
      next(error);
    }
  });

  export default {
    router,
  };
  