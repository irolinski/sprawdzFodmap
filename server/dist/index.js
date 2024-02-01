"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 8080;
app.use(express_1.default.static('build'));
app.get('/api/items', (req, res) => {
    const items = [
        {
            name: "laptop",
            price: 500,
        },
        {
            name: "top",
            price: 444440,
        },
        {
            name: "hard drive by art blakey",
            price: 2000,
        },
    ];
    res.send(items);
});
app.listen(PORT, () => console.log(`Listening on ${PORT}`));
