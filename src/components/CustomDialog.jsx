import { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  IconButton,
} from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { removePost } from '../redux/postSlice';

export function CustomDialog({ index }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const dispatch = useDispatch();

  return (
    <>
      <IconButton onClick={handleOpen} color="red" size="sm">
        <i className="fas fa-trash" />
      </IconButton>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Are you sure ?</DialogHeader>
        <DialogBody>
          You want to remove this post
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={() => {
            dispatch(removePost(index));
            handleOpen();
          }}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}