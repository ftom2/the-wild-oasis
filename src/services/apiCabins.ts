import { db } from "./supabase"

export async function getCabins() {
    return db.from("cabins").select("*")
}
