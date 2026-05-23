import { connect } from "mongoose";

export async function connectDB() {
    // נסיון לקרוא לכל אחת מהאפשרויות הנפוצות שייתכן והגדרת ב-.env
    const dbUri = process.env.DB_URI || process.env.dbUri || process.env.MONGO_URI;

    try {
        if (!dbUri) {
            throw new Error("מחרוזת החיבור ל-MongoDB לא נמצאה במשתני הסביבה (.env)");
        }
        
        await connect(dbUri);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("MongoDB connection error:", error);
    }
}