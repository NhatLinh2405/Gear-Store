export default {
    name: "mouse",
    title: "Mouse",
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
            name: "color",
            title: "Color",
            type: "string",
        },
        {
            name: "Switch",
            title: "Switch",
            type: "string",
        },
        {
            name: "led",
            title: "LED",
            type: "string",
        },
        {
            name: "materials",
            title: "Materials",
            type: "string",
        },
        {
            name: "sensitivity",
            title: "Sensitivity",
            type: "string",
        },
        {
            name: "numberOfButtons",
            title: "Number of buttons",
            type: "number",
        },
        {
            name: "longevity",
            title: "Longevity",
            type: "string",
        },
        {
            name: "size",
            title: "Size",
            type: "string",
        },
        {
            name: "weight",
            title: "Weight",
            type: "number",
        },
    ],
};
