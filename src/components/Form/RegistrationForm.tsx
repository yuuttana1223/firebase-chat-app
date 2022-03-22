import { VFC, useState, FormEvent, memo } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useAppDispatch } from "src/app/hooks";
import { setName } from "src/slices/userSlice";

const theme = createTheme();

export const RegistrationForm: VFC = memo(() => {
  const dispatch = useAppDispatch();
  const [username, setUsername] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setName(username));
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            ようこそ
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="ニックネーム"
              name="name"
              autoFocus
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={!username}
            >
              はじめる
            </Button>
          </Box>
        </Box>
        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
          mt={8}
          mb={4}
        >
          {"Copyright © "}
          <Box component="span" mr={1}>
            Yuu Tanaka
          </Box>
          {new Date().getFullYear()}
          {"."}
        </Typography>
      </Container>
    </ThemeProvider>
  );
});

RegistrationForm.displayName = "RegistrationForm";
