import * as React from "react";
// import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";

export function BasicForm() {
  const formik = useFormik({
    initialValues: { email: "shangeeth", password: "bolt" },
    onSubmit: (value) => {
      console.log("onSubmit :", value);
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <h1>Form</h1>
        <input
          type="email"
          placeholder="enter e-mail"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        <br />
        <input
          type="password"
          placeholder="enter password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        <br />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

{
  /* <TextField
  required
  onChange={(event) => setMovieName(event.target.value)}
  label="movie name"
  variant="outlined"
  className="input-name"
  type="text"
/>; */
}
