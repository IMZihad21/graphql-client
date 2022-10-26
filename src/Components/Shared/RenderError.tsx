import { GraphQLErrors } from "@apollo/client/errors";
import { Alert, Container, Typography } from "@mui/material";
import { FC } from "react";

interface iProps {
  error: {
    graphQLErrors: GraphQLErrors;
  };
}

const RenderError: FC<iProps> = ({ error }) => {
  return (
    <Container>
      <Alert
        severity="error"
        sx={{
          width: 1,
        }}
      >
        {error?.graphQLErrors?.map((error) => (
          <Typography
            variant="subtitle2"
            key={`graphqlError-${error?.message}`}
          >
            {error?.message}
          </Typography>
        ))}
      </Alert>
    </Container>
  );
};

export default RenderError;
