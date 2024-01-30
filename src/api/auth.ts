import { Router } from "express";
import { createClient } from "@supabase/supabase-js";

const router = Router();
const supabaseUrl = process.env.SUPABASE_URL as string;
const supabaseKey = process.env.SUPABASE_KEY as string;
process.env.NODE_TLS_REJECT_UNAUTHORIZED;
const supabase = createClient(supabaseUrl, supabaseKey);

router.post("/session", async (req, res, next) => {
  const { code } = req.body;
  try {
    const { data, error } = await supabase.auth.exchangeCodeForSession(code);
    if (error) {
      throw Error(error.message);
    }
    res.json(data);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

export default {
    router,
};
