"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
//Configuration the .env file
dotenv_1.default.config();
//Create Express APP
const app = (0, express_1.default)();
const port = process.env.PORT || 8000;
//Define the firt Route of APP
app.get('/', (req, res) => {
    //Send Hello World
    res.send('APP Express  API RestFUll + nodemon +  any TS + Swagger + MongoDB');
});
app.get('/hello', (req, res) => {
    //Send Hello World
    res.send('Welcome to GET Route : ¡Hello!');
});
// Execute APP and Listen Request to PORT ${PORT}
app.listen(port, () => {
    console.log(`EXPRESS SERVER: Running at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map