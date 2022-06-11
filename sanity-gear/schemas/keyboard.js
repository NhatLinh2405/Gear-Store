export default {
    name: "keyboard",
    title: "Keyboard",
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
            name: "Switch",
            title: "Switch",
            type: "string",
        },
        {
            name: "keyCaps",
            title: "KeyCaps",
            type: "string",
        },
        {
            name: "led",
            title: "LED",
            type: "string",
        },
        {
            name: "keyboardTyle",
            title: "Keyboard style",
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
