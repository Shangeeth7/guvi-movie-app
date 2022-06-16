import { useState } from "react";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";

export function Counter() {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  return (
    <div className="counter">
      <IconButton>
        <Badge
          className="like-btn-counter"
          onClick={() => setLike(like + 1)}
          badgeContent={like}
          color="primary"
        >
          👍
        </Badge>
      </IconButton>
      <IconButton>
        <Badge
          className="dislike-btn-counter"
          onClick={() => setDislike(dislike + 1)}
          badgeContent={dislike}
          color="error"
        >
          👎
        </Badge>
      </IconButton>
    </div>
  );
}
