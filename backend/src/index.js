"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const recommendation_1 = __importDefault(require("./routes/recommendation"));
const db_1 = require("./db");
const app = (0, express_1.default)();
const PORT = 4000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/recommendation", recommendation_1.default);
(0, db_1.initDB)().then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
