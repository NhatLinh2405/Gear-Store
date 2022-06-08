const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
    if (req.method === "POST") {
        console.log(res.body.cartItems);
        try {
            const params = {
                submit_type: "pay",
                mode: "paymet",
                payment_method_type: ["card"],
                billing_address_collection: "auto",
                shipping_option: [
                    { shipping_rate: "shr_1L8QVqHWMcX7aAbymRy8Cx2j" },
                    { shipping_rate: "shr_1L8QXVHWMcX7aAbyO4hF5g34" },
                ],

                line_items: req.body.cartItems.map((item) => {
                    const img = item.image[0].asset._ref;
                    const newImg = img.replace(
                        "image-",
                        "https://cdn.sanity.io/images/vfxfwnaw"
                    );
                }),
                mode: "payment",
                success_url: `${req.headers.origin}/?success=true`,
                cancel_url: `${req.headers.origin}/?canceled=true`,
            };
            // Create Checkout Sessions from body params.
            const session = await stripe.checkout.sessions.create(params);
            res.redirect(303, session.url);
        } catch (err) {
            res.status(err.statusCode || 500).json(err.message);
        }
    } else {
        res.setHeader("Allow", "POST");
        res.status(405).end("Method Not Allowed");
    }
}
