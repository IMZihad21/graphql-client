import { useMutation } from "@apollo/client";
import LoadingButton from "@mui/lab/LoadingButton";
import {
  Box,
  Button,
  Divider,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { Dispatch, FC, SetStateAction, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { SIGN_IN, SIGN_UP } from "../Configs/Mutations/auth";
import RenderError from "./Shared/RenderError";

interface iProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const modalStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  maxHeight: "90vh",
  overflowY: "auto",
  bgcolor: "background.paper",
  boxShadow: 24,
  padding: 3,
  borderRadius: 1,
};

const Auth: FC<iProps> = ({ open, setOpen }) => {
  const [newUser, setNewUser] = useState<boolean>(false);
  const { handleSubmit, control, watch, reset: formReset } = useForm();

  const [
    authMutation,
    { loading: authLoading, error: authError, reset: mutationReset },
  ] = useMutation(newUser ? SIGN_UP : SIGN_IN);

  const onSubmit = async (data: any) => {
    mutationReset();

    await authMutation({ variables: data });
    if (!authError) {
      setOpen(false);
    }
  };

  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <Box sx={modalStyle}>
        <Typography variant="h5" component="h1" gutterBottom textAlign="center">
          {newUser ? "Sign Up" : "Sign In"}
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          {newUser && (
            <Controller
              name="firstName"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  fullWidth
                  size="small"
                  label="Your First Name"
                  {...field}
                />
              )}
            />
          )}
          {newUser && (
            <Controller
              name="lastName"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  fullWidth
                  size="small"
                  label="Your Last Name"
                  {...field}
                />
              )}
            />
          )}
          <Controller
            name="email"
            control={control}
            rules={{
              required: {
                value: true,
                message: "Email is required",
              },
            }}
            defaultValue=""
            render={({ field, fieldState: { error } }) => (
              <TextField
                fullWidth
                size="small"
                label="Your Email"
                error={
                  Boolean(error) ||
                  Boolean(
                    (authError as any)?.graphQLErrors[0]?.extensions?.fields
                      ?.email
                  )
                }
                helperText={
                  (error || authError) &&
                  ((error?.message as string) ||
                    (authError as any)?.graphQLErrors[0]?.extensions?.fields
                      ?.email)
                }
                {...field}
              />
            )}
          />
          {newUser ? (
            <Controller
              name="password1"
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "Password is required",
                },
              }}
              defaultValue=""
              render={({ field, fieldState: { error } }) => (
                <TextField
                  fullWidth
                  size="small"
                  label="Your Password"
                  error={
                    Boolean(error) ||
                    Boolean(
                      (authError as any)?.graphQLErrors[0]?.extensions?.fields
                        ?.password1
                    )
                  }
                  helperText={
                    (error || authError) &&
                    ((error?.message as string) ||
                      (authError as any)?.graphQLErrors[0]?.extensions?.fields
                        ?.password1)
                  }
                  {...field}
                />
              )}
            />
          ) : (
            <Controller
              name="password"
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "Password is required",
                },
              }}
              defaultValue=""
              render={({ field, fieldState: { error } }) => (
                <TextField
                  fullWidth
                  size="small"
                  label="Your Password"
                  error={
                    Boolean(error) ||
                    Boolean(
                      (authError as any)?.graphQLErrors[0]?.extensions?.fields
                        ?.password
                    )
                  }
                  helperText={
                    (error || authError) &&
                    ((error?.message as string) ||
                      (authError as any)?.graphQLErrors[0]?.extensions?.fields
                        ?.password)
                  }
                  {...field}
                />
              )}
            />
          )}
          {newUser && (
            <Controller
              name="password2"
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "password2 is required",
                },
                validate: (val: string) => {
                  if (watch("password1") != val) {
                    return "Your passwords do no match";
                  }
                },
              }}
              defaultValue=""
              render={({ field, fieldState: { error } }) => (
                <TextField
                  fullWidth
                  size="small"
                  label="Your password2"
                  error={
                    Boolean(error) ||
                    Boolean(
                      (authError as any)?.graphQLErrors[0]?.extensions?.fields
                        ?.password2
                    )
                  }
                  helperText={
                    (error || authError) &&
                    ((error?.message as string) ||
                      (authError as any)?.graphQLErrors[0]?.extensions?.fields
                        ?.password2)
                  }
                  {...field}
                />
              )}
            />
          )}
          {authError && <RenderError error={authError} />}
          <LoadingButton
            loading={authLoading}
            type="submit"
            variant="contained"
            sx={{
              py: "10px",
            }}
          >
            {newUser ? "Sign Up" : "Sign In"}
          </LoadingButton>
          <Button
            onClick={() => {
              formReset();
              mutationReset();
              setNewUser(!newUser);
            }}
            size="small"
            sx={{
              fontSize: "0.9rem",
              fontWeight: 400,
              color: "primary.main",
              my: -1,
              textTransform: "none",
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            {newUser ? "Already have an account?" : "Create an account"}
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default Auth;
