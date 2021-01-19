import React from "react";
import { Grid } from "@material-ui/core";
import BookmarkDialog from "./BookmarkDialog";

const BookmarkButtons = () => {
  return (
    <Grid container justify="flex-end" alignItems="center" spacing={1}>
      {/* todo align item */}
      {/* <Grid item>
        <ButtonGroup variant="outlined" color="primary" size="small">
          <Button>
            <FormatAlignLeft />
          </Button>
          <Button>
            <FormatAlignCenter />
          </Button>
          <Button>
            <FormatAlignRight />
          </Button>
        </ButtonGroup>
      </Grid> */}
      <Grid item>
        <BookmarkDialog />
      </Grid>
    </Grid>
  );
};

export default BookmarkButtons;
