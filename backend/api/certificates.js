// backend/api/certificates.js
import express from "express";
import supabase from "../supabaseclient.js"; // INI BENAR (semua huruf kecil, sesuai nama file)
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("certificate")
      .select("*")
      .order("id");
    if (error) throw error;
    res.json(data);
  } catch (error) {
    res.status(500).json({
      message: "Gagal mengambil data sertifikat",
      error: error.message,
    });
  }
});

export default router;
