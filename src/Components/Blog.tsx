import { useQuery } from "@apollo/client";
import { Box, Container, Divider, Typography } from "@mui/material";
import { FC } from "react";
import { useParams } from "react-router-dom";
import { GET_BLOG } from "../Configs/Queries/blog";
import Loader from "./Shared/Loader";
import RenderError from "./Shared/RenderError";

const Blog: FC = () => {
  const { blogSlug } = useParams();
  const {
    loading,
    error,
    data: { blog = {} } = {},
  } = useQuery(GET_BLOG, {
    variables: { slug: blogSlug },
  });

  if (loading) return <Loader />;

  if (error) return <RenderError error={error} />;

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          {blog?.title}
        </Typography>
        <Typography variant="caption">{`Published on ${blog?.createdAt}`}</Typography>
        <Typography variant="caption">{`Authored by ${blog?.author?.email}`}</Typography>
      </Box>
      <Divider />
      <Typography variant="body1">{blog?.content}</Typography>
    </Container>
  );
};

export default Blog;
