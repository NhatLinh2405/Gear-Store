export default {
    name: "headphone",
    title: "Headphones",
    type: "document",
    fields: [
        {
            name: "image",
            title: "Image",
            type: "array",
            of: [{ type: "image" }],
            options: {
                hotspot: true,
            },
        },
        {
            name: "name",
            title: "Name",
            type: "string",
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "name",
                maxLength: 96,
            },
        },
        {
            name: "price",
            title: "Price",
            type: "number",
        },
        {
            name: "detail",
            title: "Detail",
            type: "string",
        },
        {
            name: "trademark",
            title: "Trademark",
            type: "string",
        },
        {
            name: "sensitivity",
            title: "Sensitivity",
            type: "string",
        },
        {
            name: "connect",
            title: "Connect",
            type: "string",
        },
        {
            name: "color",
            title: "Color",
            type: "string",
        },
        {
            name: "compatible",
            title: "Compatible",
            type: "string",
        },
        {
            name: "led",
            title: "LED",
            type: "string",
        },
        {
            name: "weight",
            title: "Weight",
            type: "number",
        },
    ],
};
