import React, {useState} from "react";
import {Box, Button, Grid, TextField, Paper} from "@mui/material";
import {SignUpFormData} from "@/interfaces/user.interface";


/** TODO
 * 1. input - email, displayName, password1, password2
 * 2. check duplicated - email, displayName
 * 3. check the password is matching
 * 4. css - mui (Chat GPT)
 * 5. database - firebase `users`
 **/

export default function SignUp() {
  const [formData, setFormData] = useState<SignUpFormData>({
    email: "",
    displayName: "",
    password1: "",
    password2: ""
  })

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;
    setFormData((prevFields) => ({
      ...prevFields,
      [name]: value
    }))
  }

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // TODO
    // CHECK EMAIL DUPLICATE
    // CHECK DISPLAY NAME DUPLICATE
    // PASSWORD MATCH
  }

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} sm={6} md={4}>
        <Paper sx={{p: 2}}>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <TextField label="email" fullWidth onChange={onChange} name="email" value={formData.email}/>
            </Grid>
            <Grid item>
              <TextField label="displayName" fullWidth onChange={onChange} name="displayName" value={formData.email}/>
            </Grid>
            <Grid item>
              <TextField label="password" type="password" fullWidth onChange={onChange} name="password1" value={formData.password1}/>
            </Grid>
            <Grid item>
              <TextField label="confirm password" type="password" fullWidth onChange={onChange} name="password2" value={formData.password2} />
            </Grid>
            <Grid item>
              <Button variant="contained" fullWidth type="submit">
                Sign up
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  )
}