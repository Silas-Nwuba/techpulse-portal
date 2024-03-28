import { createClient } from "@supabase/supabase-js";
import { supabaseKey, supabaseUrl } from "./supabase";

// Initialize Supabase client
const supabase = createClient(supabaseUrl, supabaseKey);

// Set up CORS
const setCORS = async () => {
  try {
    const { data, error } = await supabase.rpc("setup_cors", {
      cors_origins: ["http://localhost:5173/admin/post"], // Add your frontend URL here
    });
    if (error) {
      console.error("Error setting up CORS:", error.message);
    } else {
      console.log("CORS setup successfully:", data);
    }
  } catch (error) {
    console.error("Error setting up CORS:", error.message);
  }
};

// Call the function to set up CORS
setCORS();
