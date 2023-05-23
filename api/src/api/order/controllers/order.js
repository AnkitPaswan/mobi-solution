("use strict");
const stripe = require("stripe")(process.env.STRIPE_KEY);
/**
 * order controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::order.order", ({ strapi }) => ({
    async create(ctx) {
        const { products } = ctx.request.body;
        try {

            const lineItems = await Promise.all(
                products.map(async (product) => {
                    const item = await strapi
                        .service("api::product.product")
                        .findOne(product.id);
                    // console.log(item)
                    // console.log(product)
                    console.log(product.attributes.title,)
                    console.log(product.attributes.img.data[0].attributes.url)

                    return {
                        price_data: {
                            currency: "inr",
                            product_data: {
                                name: item.title,
                                // description: product.attributes.desc,
                                // images: ["http://localhost:1337/uploads/panel4_5632f617f1.png"],
                                // images: [product.attributes.img.data[0].attributes.url],

                                metadata: {
                                    id: item.id,
                                }
                            },
                            unit_amount: Math.round(item.price * 100),
                        },
                        quantity: product.attributes.quantity,
                    };
                })
            );
            const session = await stripe.checkout.sessions.create({

                shipping_options: [
                    {
                        shipping_rate_data: {
                            type: 'fixed_amount',
                            fixed_amount: {
                                amount: 0,
                                currency: 'inr',
                            },
                            display_name: 'Free shipping',
                            delivery_estimate: {
                                minimum: {
                                    unit: 'business_day',
                                    value: 5,
                                },
                                maximum: {
                                    unit: 'business_day',
                                    value: 7,
                                },
                            },
                        },
                    },
                    {
                        shipping_rate_data: {
                            type: 'fixed_amount',
                            fixed_amount: {
                                amount: 1500,
                                currency: 'inr',
                            },
                            display_name: 'Next day air',
                            delivery_estimate: {
                                minimum: {
                                    unit: 'business_day',
                                    value: 1,
                                },
                                maximum: {
                                    unit: 'business_day',
                                    value: 1,
                                },
                            },
                        },
                    },
                ],
                phone_number_collection: {
                    enabled: true,
                },
                line_items: lineItems,
                mode: 'payment',
                shipping_address_collection: { allowed_countries: ["IN"] },
                payment_method_types: ["card"],
                success_url: process.env.CLIENT_URL + "/SuccessPage",
                cancel_url: process.env.CLIENT_URL + "?success=false",
            });
            console.log(session);
            await strapi
                .service("api::order.order")
                .create({ data: { products, stripeid: session.id } });
            return { stripeSession: session };

        } catch (error) {
            // ctx.response.status = 500;
            // return { error };
            console.log(error)
        }
    },
}));