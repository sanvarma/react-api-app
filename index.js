const express = require('express');
const cors = require('cors');

// Create the Express app
const app = express();

// Enable CORS to allow communication from other services
app.use(cors());

// Mock API endpoint
app.get('/api/data', (req, res) => {
  const mockData = {
    id: 1,
    name: 'Sample Data',
    description: 'This is mock data from the backend microservice.'
  };
  res.json(mockData);
});

// Start the server on port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend API running at http://localhost:${PORT}`);
});
