import express, { Request, Response } from 'express';
import { scrapeListings } from './scraper'; // Ensure this path matches your scraper file's location

// Initialize the Express application
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Define the port to listen on
const PORT = 3000;

// POST endpoint to initiate scraping
app.post('/api/scrape', async (req: Request, res: Response) => {
  try {
    // Extract searchString from request body
    const { searchString, city } = req.body;
    
    // Check if searchString is provided
    if (!searchString) {
      return res.status(400).json({ error: 'Search string is required' });
    }
    if (!city) {
      return res.status(400).json({ error: 'City is required' });
    }
    
    // Call the scrape function from scraper.ts
    const results = await scrapeListings(searchString);

    // Respond with the results
    res.json(results);
  } catch (error) {
    console.error('Error during scraping:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
