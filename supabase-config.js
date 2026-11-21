
const SUPABASE_URL = "https://rfoncbnubgkqsvltigxg.supabase.co";

const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_2coDFsA-zXx0293gw4I06w_FARzCEU3";

window.supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
);
