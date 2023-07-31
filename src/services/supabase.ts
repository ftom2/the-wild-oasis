import { createClient } from "@supabase/supabase-js"

const supabaseUrl = "https://jxmwlmkjqwkqsidhugnh.supabase.co"
const supabaseKey = import.meta.env.SUPABASE_KEY || ""
export const db = createClient(supabaseUrl, supabaseKey)
