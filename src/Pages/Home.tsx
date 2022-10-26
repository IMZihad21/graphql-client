import { useQuery } from "@apollo/client";
import { Box, Grid } from "@mui/material";
import ListBlog from "../Components/Home/ListBlog";
import Loader from "../Components/Shared/Loader";
import { GET_ALL_BLOGS } from "../Configs/Queries/blog";

const Home = () => {
  const { loading, error, data } = useQuery(GET_ALL_BLOGS);
  return (
    <Box>
      {loading ? (
        <Loader />
      ) : (
        <Grid container spacing={2}>
          {data?.allBlogs?.map((blog: BlogProps, index: number) => (
            <Grid item xs={12} md={6} key={`homeBlog${index}`}>
              <ListBlog data={blog} />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default Home;
