import * as React from "react";
import Breadcrumbs from "@mui/joy/Breadcrumbs";
import Link from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";

export default function StoreNavBreadCrumbs() {
  return (
    <Breadcrumbs className="!px-0" aria-label="breadcrumbs">
      {["Store"].map((item: string) => (
        <Link key={item} color="neutral" href="/store">
          {item}
        </Link>
      ))}
      <Typography>Dr. Zoidberg</Typography>
    </Breadcrumbs>
  );
}
