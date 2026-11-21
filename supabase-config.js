
const SUPABASE_URL = "https://rfoncbnubgkqsvltigxg.supabase.co";

const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_2coDFsA-zXx0293gw4I06w_FARzCEU3";

if (!window.supabase || typeof window.supabase.createClient !== "function") {
    console.error("NOVEX: Supabase library failed to load.");
} else {
    window.supabaseClient = window.supabase.createClient(
        SUPABASE_URL,
        SUPABASE_PUBLISHABLE_KEY
    );

    console.log("NOVEX: Supabase connected successfully.");
}
