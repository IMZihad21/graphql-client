import { Box, Divider, Paper, Typography } from "@mui/material";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

interface iProps {
  blog: BlogProps;
}

const ListBlog: FC<iProps> = ({ blog }) => {
  const navigate = useNavigate();

  return (
    <Paper
      sx={{ padding: 1, height: "100%", cursor: "pointer" }}
      onClick={() => navigate(`/blog/${blog?.slug}`)}
    >
      <Typography variant="overline" sx={{ fontWeight: 600 }}>
        {blog?.title}
      </Typography>
      <Divider />
      <Typography variant="body2">
        {blog?.content?.length > 150
          ? blog?.content?.substring(0, 150) + "..."
          : blog?.content}
      </Typography>
      <Divider />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="caption">{`Published on ${blog?.createdAt}`}</Typography>
        <Typography variant="caption">{`Authored by ${blog?.author.email}`}</Typography>
      </Box>
    </Paper>
  );
};

export default ListBlog;
