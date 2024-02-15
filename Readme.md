# Web Scraping Project with Puppeteer, Node.js, and TypeScript

This project demonstrates web scraping using Puppeteer in a Node.js environment with TypeScript. It includes a scraper script to search for "top home listing websites" on Google and then (hypothetically) scrape listings from a chosen site like Zillow. Additionally, the project features an Express server that exposes an API endpoint to trigger the scraping process.

## Prerequisites

- Node.js (version 12.x or higher recommended)
- npm (comes installed with Node.js)

## Installation

### Clone the Repository

First, clone the repository to your local machine:

```bash
git clone <repository-url>
cd <project-directory>
npm install
npm start
```
Triggering Scraping via API
Use Postman to send a POST request to http://localhost:3000/api/scrape with the following JSON body:
{
  "searchString": "top home listing websites"
}

