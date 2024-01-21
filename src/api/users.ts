import { Router } from "express";
import prisma from "../prisma";
import { createClient } from '@supabase/supabase-js'


const router = Router();
const supabaseUrl = process.env.SUPABASE_URL as string;
const supabaseKey = process.env.SUPABASE_KEY as string;
process.env.NODE_TLS_REJECT_UNAUTHORIZED
const supabase = createClient(supabaseUrl, supabaseKey)


router.get("/:id", async (req, res, next) => {
  const userId = Number(req.params.id);
  try {
    const response = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!response) {
      throw Error("User does not exist");
    }
    res.json(response);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  const {email, password} = req.body;
  console.log(email, password)
  try {
    const {data, error } = await supabase.auth.signUp({
     email, password,
    });
    console.log(data, error)

    if (error) {
      throw Error("Could not create account");
    }
    res.json(data);
  } catch (error) {
    next(error);
  }
});

router.post("/login", async (req, res, next) => {
  const {email, password} = req.body;
  console.log(email, password)
  try {
    const {data, error } = await supabase.auth.signInWithPassword({
     email, password,
    });
    console.log(data, error)

    if (error) {
      throw Error("Could not sign in");
    }
    res.json(data);
  } catch (error) {
    next(error);
  }
});

router.get("/:id/saved", async (req, res, next) => {
  const userId = Number(req.params.id);
  try {
    const response = await prisma.saved.findMany({
      where: { userId: userId },
    });

    console.log(response);

    if (!response) {
      throw Error("No saved recipes");
    }
    res.json(response);
  } catch (error) {
    next(error);
  }
});

router.post("/:id/saved", async (req, res, next) => {
  const userId = Number(req.params.id);
  const { id, title, image } = req.body;

  try {
    const response = await prisma.saved.create({
      data: {
        id,
        title,
        image,
        userId,
      },
    });
    res.json(response);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id/saved", async (req, res, next) => {
  const userId = Number(req.params.id);
  const { id } = req.body;

  try {
    const response = await prisma.saved.delete({
      where: {
        id, userId
      },
    });
    if(!response) throw Error('Unauthorized to delete')
    res.json(response);
  } catch (error) {
    next(error);
  }
});

export default {
  router,
};
