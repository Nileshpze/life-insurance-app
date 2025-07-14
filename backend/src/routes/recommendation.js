"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = require("../db");
const router = express_1.default.Router();
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { age, income, dependents, risk } = req.body;
    let recommendation = "";
    let explanation = "";
    if (age < 40 && risk === "High") {
        recommendation = "Term Life – $500,000 for 20 years";
        explanation = "At your age and risk tolerance, term life offers high coverage at low cost.";
    }
    else if (age < 60 && risk === "Medium") {
        recommendation = "Term Life – $250,000 for 15 years";
        explanation = "Mid-range term life offers balanced protection.";
    }
    else {
        recommendation = "Whole Life – $100,000";
        explanation = "Whole life insurance suits conservative, older profiles.";
    }
    yield db_1.pool.query("INSERT INTO submissions(age, income, dependents, risk, recommendation) VALUES($1, $2, $3, $4, $5)", [age, income, dependents, risk, recommendation]);
    res.json({ recommendation, explanation });
}));
exports.default = router;
