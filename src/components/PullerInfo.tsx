import React from "react";
import {
  Table,
  TableRow,
  TableCell,
  TableBody,
  Typography,
} from "@mui/material";
import { PullerInfoI } from "@/types/PullerInfoI";

const PullerInfo = ({
  PullerInfo: pullerinfo,
}: {
  PullerInfo: PullerInfoI;
}) => {
  return (
    <Table>
      <TableBody>
        <TableRow>
          <TableCell
            className="!p-0 !pb-2 !border-b-0"
            component="td"
            scope="row"
          >
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Weight
            </Typography>
          </TableCell>
          <TableCell className="!p-0 !pb-2 !border-b-0">
            <Typography variant="body2">{pullerinfo.weight}</Typography>
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell
            width={"40%"}
            className="!p-0 !pb-2 !border-b-0"
            component="td"
            scope="row"
          >
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Name
            </Typography>
          </TableCell>
          <TableCell className="!p-0 !pb-2 !border-b-0">
            <Typography variant="body2">{pullerinfo.fullName}</Typography>
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell
            width={"30%"}
            className="!p-0 !pb-2 !border-b-0"
            component="td"
            scope="row"
          >
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Club
            </Typography>
          </TableCell>
          <TableCell className="!p-0 !pb-2 !border-b-0">
            <Typography variant="body2">{pullerinfo.club}</Typography>
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell
            className="!p-0 !pb-2 !border-b-0"
            component="td"
            scope="row"
          >
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Technique
            </Typography>
          </TableCell>
          <TableCell className="!p-0 !pb-2 !border-b-0">
            <Typography variant="body2">{pullerinfo.technique}</Typography>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default PullerInfo;
