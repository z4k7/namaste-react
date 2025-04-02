const express = require("express");
const cors = require("cors");
const axios = require("axios");


const app = express();
app.use(cors());


app.get("/api/restaurants", async (req, res) => {
    try {
        const response = await axios.get("https://www.swiggy.com/dapi/restaurants/list/v5", {
            params: {
                lat: "28.615524108292938",
                lng: "77.38522890251619",
                "is-seo-homepage-enabled": "true",
                page_type: "DESKTOP_WEB_LISTING"
            },
            headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
                "Accept": "application/json, text/plain, */*",
                "Referer": "https://www.swiggy.com/",
                "Origin": "https://www.swiggy.com/"
            }
        });
        res.json(response.data);
    } catch (error) {
        console.error("Error fetching data from Swiggy API:", error.response ? error.response.data : error.message);
        res.status(500).json({ error: "Failed to fetch data", details: error.message });
    }
})

app.get("/api/menu/:restaurantId", async (req, res) => {
    try {
        const { restaurantId } = req.params;
        const response = await axios.get("https://www.swiggy.com/dapi/menu/pl", {
            params: {
                "page-type": "REGULAR_MENU",
                "complete-menu": "true",
                lat: "28.6245821",
                lng: "77.3891427",
                restaurantId: restaurantId
            },
            headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
                "Accept": "application/json, text/plain, */*",
                "Referer": "https://www.swiggy.com/",
                "Origin": "https://www.swiggy.com/"
            }
        });

        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch menu", details: error.message });
    }
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});