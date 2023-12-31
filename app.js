require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors({
    origin:"*"
}));

app.get('/',(req,res)=>{
    res.send("HNG");
});

app.get('/api',(req,res)=>{
  const slackName = req.query.slack_name;
  const track = req.query.track;

  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const currentDay = daysOfWeek[new Date().getDay()];

  const now = new Date();
  const utcTime = now.toISOString().replace(/\.\d+Z$/, 'Z');

  const jsonResponse = {
    slack_name: slackName,
    current_day: currentDay,
    utc_time: utcTime,
    track: track,
    github_file_url: 'https://github.com/olukinni-029/HNG/blob/main/app.js', 
    github_repo_url: 'https://github.com/olukinni-029/HNG', 
    status_code: 200,
  };

  // Send the JSON response
  res.json(jsonResponse);
});

const port= process.env.PORT||3000;

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
});