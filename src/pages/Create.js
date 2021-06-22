import { Button, Container, Typography } from "@material-ui/core";

const Create = () => {
  return (
    <Container>
      <Typography
        variant="h4"
        component="h2"
        color="textSecondary"
        gutterBottom
      >
        Create a New Note
      </Typography>
      <Button
        type="submit"
        variant="contained"
        color="secondary"
        disableElevation
        onClick={() => console.log("clicked!")}
      >
        Submit
      </Button>
    </Container>
  );
};

export default Create;
