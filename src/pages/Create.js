import { Button, Container, Typography } from "@material-ui/core";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

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
        color="primary"
        disableElevation
        onClick={() => console.log("clicked!")}
        endIcon={<KeyboardArrowRightIcon />}
      >
        Submit
      </Button>
    </Container>
  );
};

export default Create;
