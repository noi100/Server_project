
export function GlobalMiddleware(req, res, next) {
    // יצירת תאריך ושעה נוכחיים בצורה קריאה
    const time = new Date().toLocaleTimeString();
    
    console.log(`--------------------------------------------------`);
    console.log(`[${time}] ${req.method} request made to: ${req.url}`);
    
    // אם יש פרמטרים בנתיב (כמו ID), נדפיס אותם
    if (Object.keys(req.params).length > 0) {
        console.log(`Params:`, req.params);
    }
    
    // אם נשלח מידע בגוף הבקשה (כמו ביצירת משתמש חדש), נדפיס אותו
    if (req.body && Object.keys(req.body).length > 0) {
        console.log(`Body:`, JSON.stringify(req.body, null, 2));
    }
    console.log(`--------------------------------------------------`);
    
    next(); // מעבר לשכבה הבאה (הבקר או הראוטר)
}