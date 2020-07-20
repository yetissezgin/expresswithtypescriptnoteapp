"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var dotenv = __importStar(require("dotenv"));
var DBConnection_1 = __importDefault(require("./src/services/DBConnection"));
var DBOperations_1 = __importDefault(require("./src/services/DBOperations"));
dotenv.config();
var app = express_1.default();
DBConnection_1.default.getInstance().connect(app);
app.use(cors_1.default());
app.use(express_1.default.json());
app.get("/", function (req, res) {
    console.log(process.env.PORT);
    res.send("denem");
});
app.post("/note", function (req, res) {
    DBOperations_1.default.insert(req.body)
        .then(function (result) { res.send(result); })
        .catch(function () { res.status(500).send({ status: "error" }); });
});
app.get("/note", function (req, res) {
    DBOperations_1.default.selectAllRecords()
        .then(function (result) { res.send(result); })
        .catch(function () { res.status(500).send({ status: "error" }); });
});
