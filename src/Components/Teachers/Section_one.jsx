"use client";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";

function Section_one() {
  const [classes, setClass] = useState("");
  return (
    <div className=" w-full h-auto flex flex-col gap-10 items-center px-16 mt-20">
      <h1 className=" text-5xl font-bold">
        Best <span className=" text-violet-500">English</span> tutor's
      </h1>
      <div className=" flex items-center gap-5 ">
        <div className=" flex items-center gap-2">
          <h1>Class</h1>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              sx={{ width: "100px" }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Class"
              value={classes}
              onChange={(e) => setClass(e.target.value)}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className=" flex items-center gap-2">
          <h1>Boards</h1>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              sx={{ width: "100px" }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Boards"
              value={classes}
              onChange={(e) => setClass(e.target.value)}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className=" flex items-center gap-2">
          <h1>Subjects</h1>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              sx={{ width: "100px" }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Subjects"
              value={classes}
              onChange={(e) => setClass(e.target.value)}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
    </div>
  );
}

export default Section_one;
