import React, {useState} from "react";
import {SignUpFormData} from "@/interfaces/user.interface";
import Seo from "@/common/Seo";
import Button from '@mui/material/Button';
import {TextField, Grid, Box, InputAdornment, IconButton} from "@mui/material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import {Alert} from "@mui/lab";


function ReusableTextField(props: any) {
  const {name, label, type, value, onChange, variant, checkDuplicate} = props;
  return (
    <Box sx={{mb: 2}}>
      <TextField
        onChange={onChange}
        name={name}
        type={type}
        required
        value={value}
        fullWidth
        label={label}
        variant={variant}
        InputProps={
          checkDuplicate && {
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={checkDuplicate}>
                  <CheckCircleOutlineIcon/>
                </IconButton>
              </InputAdornment>
            ),
          }
        }
      />
    </Box>
  );
}

export default function SignUp() {
  const [formData, setFormData] = useState<SignUpFormData>({
    email: "",
    displayName: "",
    password1: "",
    password2: ""
  })


  const [isEmailDuplicated, setIsEmailDuplicated] = useState(false);
  const [isDisplayNameDuplicated, setIsDisplayNameDuplicated] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [error, setError] = useState("");

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const {name, value} = event.target;
    setFormData((preForm) => ({...preForm, [name]: value}))
  }


  const handleCheckEmailDuplicate = () => {
    const result = false;
    if (result) {
      setIsEmailDuplicated(true);
      setError('Duplicated Email');
      return;
    } else {
      setIsEmailDuplicated(false);
    }

  };

  const handleCheckDisplayNameDuplicate = () => {
    const result = true;
    if (result) {
      setIsDisplayNameDuplicated(true);
      setError('Duplicated DisplayName');
      return;
    } else {
      setIsEmailDuplicated(false);
    }

  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (formData.password1 !== formData.password2) {
      setError('Passwords do not match');
      return;
    }
    setError("");
  }

  return (
    <>
      <Seo title="Sign Up"/>
      <Grid container justifyContent="center">
        <Grid item xs={12} md={6}>
          <form onSubmit={handleSubmit}>
            {error && <Alert severity="error">{error}</Alert>}
            <ReusableTextField
              name="email"
              type="email"
              label="Email"
              value={formData.email}
              onChange={handleFormChange}
              variant="outlined"
              checkDuplicate={handleCheckEmailDuplicate}
            />

            <ReusableTextField
              name="displayName"
              type="text"
              label="Display Name"
              value={formData.displayName}
              onChange={handleFormChange}
              variant="outlined"
              checkDuplicate={handleCheckDisplayNameDuplicate}
            />

            <ReusableTextField
              name="password1"
              type="password"
              label="Password"
              value={formData.password1}
              onChange={handleFormChange}
              variant="outlined"
            />
            <ReusableTextField
              name="password2"
              type="password"
              label="Confirm Password"
              value={formData.password2}
              onChange={handleFormChange}
              variant="outlined"
            />

            <Button type="submit" variant="contained" color="primary" fullWidth sx={{backgroundColor: 'primary.main'}}>
              Sign Up
            </Button>

          </form>
        </Grid>
      </Grid>
    </>
  )
}