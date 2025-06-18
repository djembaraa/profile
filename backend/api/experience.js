import express from "express";
import supaBase from "../supabaseclient.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const { data, error } = await supaBase.from("experience").select("*");
    if (error) {
      throw error;
    }

    res.json(data);
  } catch (error) {
    res.status(500).json({
      message: "Gagal mengambil data pengalaman kerja",
      error: error.message,
    });
  }
});

export default router;
