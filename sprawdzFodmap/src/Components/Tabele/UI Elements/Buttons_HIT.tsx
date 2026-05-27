import { Divider } from "@mui/material";

import { HashLink as Link } from "react-router-hash-link";

export default function HitLinks() {
  return (
    <>
      <Link to="#table-cat-20%" aria-label="zakazane przez 20% diet">
        🟡 20%
      </Link>
      <Divider />
      <Link
        to="#table-cat-20-60%"
        aria-label=" zakazane przez między 20 a 60 procent diet"
      >
        🟠 20-60%
      </Link>
      <Divider />
      <Link to="#table-cat->60%" aria-label="zakazane przez 60% diet">
        🔴 60%
      </Link>
    </>
  );
}
