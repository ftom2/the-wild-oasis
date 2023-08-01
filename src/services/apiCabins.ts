import type { Cabin } from "@/pages/cabins/types"
import { db } from "./supabase"

export async function getCabins(): Promise<Cabin[]> {
    const { data, error } = await db.from("cabins").select("*")

    if (error) {
        console.error(error)

        throw new Error(error.message)
    }

    // if (error) throw new Error(error.message)
    return data || []
}
