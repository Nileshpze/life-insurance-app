import express from "express";
import { Pool } from "pg";
import { pool } from "../db";

const router = express.Router();

router.post("/", async (req, res) => {
  const { age, income, dependents, risk } = req.body;

  let recommendation = "";
  let explanation = "";

  if (age < 40 && risk === "High") {
    recommendation = "Term Life – $500,000 for 20 years";
    explanation = "At your age and risk tolerance, term life offers high coverage at low cost.";
  } else if (age < 60 && risk === "Medium") {
    recommendation = "Term Life – $250,000 for 15 years";
    explanation = "Mid-range term life offers balanced protection.";
  } else {
    recommendation = "Whole Life – $100,000";
    explanation = "Whole life insurance suits conservative, older profiles.";
  }

  await pool.query(
    "INSERT INTO submissions(age, income, dependents, risk, recommendation) VALUES($1, $2, $3, $4, $5)",
    [age, income, dependents, risk, recommendation]
  );

  res.json({ recommendation, explanation });
});

export default router;
