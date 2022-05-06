import React from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Task } from "../pages/Home";
import { IconButton } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { API, graphqlOperation } from "aws-amplify";
import { deleteTask } from "../graphql/mutations";

export default function TaskCard({ task }: { task: Task }) {

  const onClickDeleteIcon = () => {
    API.graphql(
      graphqlOperation(deleteTask, {
        input: {
          id: task.id,
        },
      })
    );
  };

  return (
    <CardContent>
      <CardContent>
        <Typography
          
          color="textSecondary"
          gutterBottom
        >
          task card
        </Typography>
        <Typography variant="h5" component="h2">
          {task.name}
        </Typography>
        <Typography color="textSecondary">
          {task.status}
        </Typography>
        <Typography variant="body2" component="p">
          {task.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">More</Button>
        <IconButton
          onClick={onClickDeleteIcon}
          aria-label="delete"
        >
          <DeleteOutlineIcon />
        </IconButton>
      </CardActions>
    </CardContent>
  );
}
