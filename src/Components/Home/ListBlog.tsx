import { Box, Divider, Paper, Typography } from "@mui/material";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

interface iProps {
  data: BlogProps;
}

const ListBlog: FC<iProps> = ({ data }) => {
  const navigate = useNavigate();

  return (
    <Paper
      sx={{ padding: 1, cursor: "pointer" }}
      onClick={() => navigate(`/blog/${data.slug}`)}
    >
      <Typography variant="overline" sx={{ fontWeight: 600 }}>
        {data.title}
      </Typography>
      <Divider />
      <Typography variant="body2">{data.content}</Typography>
      <Divider />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="caption">{`Published on ${data.createdAt}`}</Typography>
        <Typography variant="caption">{`Authored by ${data.author.email}`}</Typography>
      </Box>
    </Paper>
  );
};

export default ListBlog;
