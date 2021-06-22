import { Button, Container, makeStyles, Typography } from "@material-ui/core";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

const useStyles = makeStyles({
  btn: {
    backgroundColor: "violet",
    "&:hover": {
      backgroundColor: "red",
    },
  },
});

const Create = () => {
  const classes = useStyles();

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
        className={classes.btn}
        type="submit"
        variant="contained"
        color="secondary"
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
