import { createClient } from "@supabase/supabase-js";

//          TEMPLATE
// export const supabase = createClient(
// "apiUrl",
// "apiKey")

const supabaseUrl = 'https://ujhpfoldyppxbaqcbjdy.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVqaHBmb2xkeXBweGJhcWNiamR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg4MjY4NjQsImV4cCI6MjA1NDQwMjg2NH0.RM8OHBN7VxF_HaCLLSgtU03MuZCXKwPBF9Ebjqv6X3U'


export const supabase = createClient(supabaseUrl, supabaseKey)