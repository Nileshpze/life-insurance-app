import { useState } from "react";
import {
  Box,
  Button,
  Container,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";

export default function Home() {
  const [form, setForm] = useState({
    age: "",
    income: "",
    dependents: "",
    risk: "Medium",
  });
  const [result, setResult] = useState(null);

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const res = await axios.post("http://localhost:4000/recommendation", form);
    setResult(res.data);
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8 }}>
        <Typography variant="h4" gutterBottom>
          Life Insurance Recommendation
        </Typography>

        <TextField
          fullWidth
          label="Age"
          name="age"
          type="number"
          value={form.age}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Income"
          name="income"
          type="number"
          value={form.income}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Number of Dependents"
          name="dependents"
          type="number"
          value={form.dependents}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          select
          label="Risk Tolerance"
          name="risk"
          value={form.risk}
          onChange={handleChange}
          margin="normal"
        >
          <MenuItem value="Low">Low</MenuItem>
          <MenuItem value="Medium">Medium</MenuItem>
          <MenuItem value="High">High</MenuItem>
        </TextField>

        <Button fullWidth variant="contained" sx={{ mt: 2 }} onClick={handleSubmit}>
          Get Recommendation
        </Button>

        {result && (
          <Box sx={{ mt: 4 }}>
            <Typography variant="h6">Recommendation:</Typography>
            <Typography>{result.recommendation}</Typography>
            <Typography variant="body2">{result.explanation}</Typography>
          </Box>
        )}
      </Box>
    </Container>
  );
}
