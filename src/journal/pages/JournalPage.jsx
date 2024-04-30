import { IconButton, Typography } from "@mui/material";
import { JournalLayout } from "../layout/JournalLayout";
import { NothingSelectedView, NoteView } from "../views";
import { AddOutlined } from "@mui/icons-material";

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
        consectetur tempora adipisci molestias, quam enim quo, repudiandae
        quidem, minus id facilis fuga magnam voluptatem saepe praesentium
        voluptate tempore autem amet!
      </Typography> */}

      <NothingSelectedView />

      <IconButton
        size="large"
        sx={{
          color: "white",
          backgroundColor: "error.main",
          ":hover": { backgroundColor: "error.main", opacity: 0.9 },
          position: "fixed",
          right: 50,
          bottom: 50,
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
      {/* <NoteView /> */}
    </JournalLayout>
  );
};
