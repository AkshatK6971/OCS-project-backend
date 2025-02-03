import { createClient } from '@supabase/supabase-js'
import dotenv from "dotenv";
dotenv.config();
const supabaseUrl = "https://fqopsdwklxqurfrpkwtl.supabase.co"
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey);

async function validate(userId, hash) {
    const {data, error} = await supabase.from("users").select().eq('userid', userId).eq('password_hash', hash);
    if(data[0]){
        if(data[0].role == "admin"){
            const {data, error} = await supabase.from("users").select();
            return {data, error};
        }
    }
    return {data, error}
}

export {validate}