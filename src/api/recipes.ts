import { Router } from "express";
import dotenv from 'dotenv';

const router = Router();

dotenv.config();
const url = process.env.BASE_URL;
const apiKey = process.env.API_KEY;

router.get("/", async (_req, res) => {
    try {
      const response = await fetch(
        `${url}/findByIngredients?ingredients=turkey,cheese,kale&ignorePantry=true&ranking=1&number=5&apiKey=${apiKey}`
      );
      const json = await response.json()
      console.log('response', json);
      res.send(json);
    } catch (error) {
      console.log('error', error)
    }
  });
  
  router.get("/:id", async (req, res) => {
    try {
      const recipeId = Number(req.params.id)
      const response = await fetch(
        `${url}/${recipeId}/information?apiKey=${apiKey}`
      );
      const json = await response.json()
      console.log('response', json);
      res.send(json);
    } catch (error) {
      console.log('error', error)
    }
  });

  export default {
    router,
  };