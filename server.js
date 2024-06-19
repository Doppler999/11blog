// import express from 'express';
// import dotenv from 'dotenv';
// import path from 'path';

// dotenv.config();

// const app = express();
// const port = process.env.PORT || 4000;

// app.use(express.static(path.join(__dirname, 'public'))); // Serve static files from the 'public' directory

// app.post('/chat', express.json(), async (req, res) => {
//     try {
//         const response = await fetch(
//             'https://api-inference.huggingface.co/models/gpt2',
//             {
//                 headers: { Authorization: `Bearer ${process.env.HUGGINGFACE_API_KEY}` },
//                 method: 'POST',
//                 body: JSON.stringify({
//                     inputs: req.body.message,
//                 }),
//             }
//         );
//         const result = await response.json();
//         res.json(result);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });
