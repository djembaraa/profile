// backend/supabaseClient.js (Versi ES Module)

// 1. Import fungsi yang diperlukan
import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

// 2. Jalankan konfigurasi dotenv
dotenv.config({ path: "./backend/.env" });
// Ambil URL dan KEY dari process.env
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY;

// Buat client Supabase
const supabase = createClient(supabaseUrl, supabaseServiceKey);

// 3. Ekspor client menggunakan sintaks 'export default'
export default supabase;
