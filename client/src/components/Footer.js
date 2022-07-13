import React from "react";
import { Typography } from "@mui/material";

function Footer() {
  return (
    <div className="footer">
      <Typography type="h4" variant="h4" align="right">
        BookWorm Reading Club
      </Typography>
      <Typography type="h6" variant="h6" align="right">
        © 2022, Sam Crespo
      </Typography>
    </div>
  );
}

export default Footer;
