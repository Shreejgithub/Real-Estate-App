import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import Stripe from "stripe";
import userRoutes from "./routes/userRoute.js";
import vendorRoutes from "./routes/vendorRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import propertyRoutes from "./routes/propertyRoutes.js"; // Import property routes

const stripe = new Stripe('sk_test_51Q3bPZJuR1V2aLDtBvVfoSUdWbIsDPJi0VCja7LEZtjoKJIA2NvdZL4g9EN0T53CQaBen7dIbtpZ6H149tpF6V56005bADP7d8');

const app = express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

const PORT = process.env.PORT || 9000;
const URL = process.env.MONGOURL;

mongoose.connect(URL).then(() => {
    console.log("DB connected successfully");

    app.listen(PORT, '0.0.0.0',() => {
        console.log(`Server is running on port: ${PORT}`);
    });

}).catch(error => console.log(error));

// Routes
app.use("/api/users", userRoutes);
app.use("/api/vendors", vendorRoutes);
app.use("/api/admins", adminRoutes);
app.use("/api/properties", propertyRoutes); // Add property routes

// Payment With Stripe

app.post('/payment', async (req, res) => {
    try {
        const { name } = req.body; // Extracting the name from the request body

        if (!name) {
            return res.status(400).send('Property name is required');
        }

        // Create a product using the dynamic name received from the frontend
        const product = await stripe.products.create({
            name: name, // Using the dynamic property name
        });

        // Create a price for the product
        const price = await stripe.prices.create({
            product: product.id,
            unit_amount: 100 * 100,
            currency: 'inr',
        });

        // Create a checkout session
        const session = await stripe.checkout.sessions.create({
            line_items: [{
                price: price.id,
                quantity: 1,
            }],
            mode: 'payment',
            success_url: 'http://localhost:3000/success',
            cancel_url: 'http://localhost:3000/cancel',
            customer_email: "eaglebyte@gmail.com"
        });

        // Send session information
        res.json({ url: session.url });
    } catch (error) {
        console.error(error);
        res.status(500).send('Something went wrong');
    }
});

// 404 Middleware
app.use((req, res, next) => {
    res.status(404).json({ message: "Route not found" });
});

// Global Error Handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Internal Server Error" });
});