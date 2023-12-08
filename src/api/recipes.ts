import { Router } from "express";
import dotenv from 'dotenv';

const router = Router();

dotenv.config();
const url = process.env.BASE_URL;
const apiKey = process.env.API_KEY;

router.get("/", async (_req, res, next) => {
    try {
      const response = await fetch(
        `${url}/findByIngredients?ingredients=turkey,cheese,kale&ignorePantry=true&ranking=1&number=5&apiKey=${apiKey}`
      );
      const json = await response.json()
      res.send(json);
    } catch (error) {
      next(error)
    }
  });
  
  router.get("/:id", async (req, res, next) => {
    try {
      const recipeId = Number(req.params.id)
      const response = await fetch(
        `${url}/${recipeId}/information?apiKey=${apiKey}`
      );
      const json = await response.json()
      res.send(json);
    } catch (error) {
      next(error)
    }
  });

  export default {
    router,
  };