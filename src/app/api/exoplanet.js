// pages/api/exoplanet.js

export default async function handler(req, res) {
    const response = await fetch(
      'https://exoplanetarchive.ipac.caltech.edu/TAP/sync?query=select+*+from+pscomppars+where+pl_name+like+%27%OGLE-TR-10%20b%25%27+and+st_nphot%3E0&format=json'
    );
  
    if (!response.ok) {
      return res.status(response.status).json({ error: 'Failed to fetch data' });
    }
  
    const data = await response.json();
    console.log(data);
    // Send the data back to the client
    res.status(200).json(data);
  }
  