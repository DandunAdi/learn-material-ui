import { Container, Grid, Paper } from "@material-ui/core";
import { useState } from "react";
import { useEffect } from "react";

const Notes = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/notes")
      .then((res) => res.json())
      .then((data) => setNotes(data));
  }, []);

  return (
    <Container>
      <Grid container>
        {notes &&
          notes.map((note) => (
            <Grid item key={note.id} xs={12} md={4} lg={3}>
              <Paper>{note.title}</Paper>
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

export default Notes;
