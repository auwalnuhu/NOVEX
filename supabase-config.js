const SUPABASE_URL = "https://rfoncbnubgkqsvltigxg.supabase.co/rest/v1/";
const SUPABASE_ANON_KEY = "sb_publishable_2coDFsA-zXx0293gw4I06w_FARzCEU3";

const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);
