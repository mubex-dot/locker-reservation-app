import {
  Box,
  Button,
  Modal,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";

const DashboardTable = () => {
  const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleReservation = (lockerCode, id) => {
    setOpen(id);
    console.log(
      `Reserving locker with the locker code: ${lockerCode} and with the id: ${id}`
    );
  };
  const location = useLocation();

  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box
          sx={{
            backgroundColor: "#E9E9E9",
            padding: "1em",
            width: "25%",
            borderRadius: "15px",
          }}
        >
          <Typography
            variant="body2"
            sx={{
              textAlign: "center",
              color: "#121212",
              fontWeight: 600,
              fontSize: "1.42131rem",
            }}
          >
            Available Lockers
          </Typography>
          <Box sx={{ marginTop: "2em" }}>
            {availableLockers.map((item) => (
              <Box
                sx={{
                  display: "flex",
                  justifyContent:
                    location.pathname === "/admin" ? "center" : "space-between",
                  alignItems: "center",
                  margin: "1.5em 0",
                }}
                key={item.id}
              >
                <Typography
                  variant="body2"
                  sx={{ fontSize: "1.29206rem", fontWeight: "600" }}
                >
                  {parseInt(item.lockerCode)}
                </Typography>
                <Button
                  onClick={() =>
                    handleReservation(parseInt(item.lockerCode), item.id)
                  }
                  sx={{
                    backgroundColor: "#041526",
                    color: "#FFFFFF",
                    fontSize: "1.29206rem",
                    fontWeight: 600,
                    textTransform: "none",
                    padding: ".2em 1em",
                    borderRadius: "17px",
                    display: location.pathname === "/admin" ? "none" : "block",
                    "&:hover": {
                      backgroundColor: "#041526",
                    },
                  }}
                  disableRipple
                >
                  Reserve
                </Button>
                <Modal open={open === item.id} onClose={handleClose}>
                  <Box
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      width: 700,
                      bgcolor: "#040E18",
                      boxShadow: 24,
                      p: 4,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                      borderRadius: "50px",
                    }}
                  >
                    <Typography
                      variant="h4"
                      sx={{
                        color: "#fff",
                        fontSize: "2rem",
                        fontWeight: 500,
                      }}
                    >
                      Your Locker Has Been Reserved !
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#fff",
                        fontSize: "1.25rem",
                        fontWeight: 400,
                        width: "55%",
                        textAlign: "center",
                        margin: ".5em 0",
                      }}
                    >
                      You have 15 minutes till your reservation ends
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#fff",
                        fontSize: "1.25rem",
                        fontWeight: 500,
                        textAlign: "center",
                      }}
                    >
                      Use the code below to access your locker
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#0D5B00",
                        fontSize: "1.25rem",
                        fontWeight: 600,
                        textAlign: "center",
                        margin: "2em 0",
                      }}
                    >
                      65543890B
                    </Typography>
                    <Button
                      onClick={handleClose}
                      sx={{
                        color: "#040E18",
                        backgroundColor: "#fff",
                        fontSize: "1.19906rem",
                        fontWeight: 600,
                        textTransform: "none",
                        padding: ".3em 6em",
                        borderRadius: "10px",
                        "&:hover": { backgroundColor: "#fff" },
                      }}
                      disableRipple
                    >
                      Continue
                    </Button>
                  </Box>
                </Modal>
              </Box>
            ))}
          </Box>
        </Box>
        <Box
          sx={{
            backgroundColor: "#E9E9E9",
            padding: "1em",
            width: "70%",
            borderRadius: "15px",
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: "#121212",
              fontWeight: 600,
              fontSize: "1.42131rem",
            }}
          >
            Recent Reservations
          </Typography>
          <Box sx={{ marginTop: "2em" }}>
            <TableContainer sx={{ backgroundColor: "#E9E9E9" }}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontSize: "1.125rem", fontWeight: 500 }}>
                      Locker Code
                    </TableCell>
                    <TableCell sx={{ fontSize: "1.125rem", fontWeight: 500 }}>
                      Time Left
                    </TableCell>
                    <TableCell sx={{ fontSize: "1.125rem", fontWeight: 500 }}>
                      Date
                    </TableCell>
                    <TableCell sx={{ fontSize: "1.125rem", fontWeight: 500 }}>
                      Status
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.id}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell sx={{ fontSize: "1rem", fontWeight: 400 }}>
                        {parseInt(row.lockerCode)}
                      </TableCell>
                      <TableCell
                        sx={{
                          fontSize: "1rem",
                          fontWeight: 400,
                          color:
                            row.status === "Ended"
                              ? "#FF5003"
                              : row.status === "Ongoing"
                              ? "#0D5B00"
                              : "#DE6944",
                        }}
                      >
                        {row.timeLeft}
                      </TableCell>
                      <TableCell sx={{ fontSize: "1rem", fontWeight: 400 }}>
                        {row.date}
                      </TableCell>
                      <TableCell
                        sx={{
                          fontSize: "1rem",
                          fontWeight: 400,
                          color:
                            row.status === "Ended"
                              ? "#FF5003"
                              : row.status === "Ongoing"
                              ? "#0D5B00"
                              : "#DE6944",
                        }}
                      >
                        {row.status}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const availableLockers = [
  {
    id: 1,
    lockerCode: "016",
  },
  {
    id: 2,
    lockerCode: "016",
  },
  {
    id: 3,
    lockerCode: "016",
  },
  {
    id: 4,
    lockerCode: "016",
  },
  {
    id: 5,
    lockerCode: "016",
  },
  {
    id: 6,
    lockerCode: "016",
  },
  {
    id: 7,
    lockerCode: "016",
  },
];

const rows = [
  {
    id: 1,
    lockerCode: "096",
    timeLeft: "00:00",
    date: "Jan 3, 2024",
    status: "Ended",
  },
  {
    id: 2,
    lockerCode: "096",
    timeLeft: "00:00",
    date: "Jan 3, 2024",
    status: "Ongoing",
  },
  {
    id: 3,
    lockerCode: "096",
    timeLeft: "00:00",
    date: "Jan 3, 2024",
    status: "Ended",
  },
  {
    id: 4,
    lockerCode: "096",
    timeLeft: "00:00",
    date: "Jan 3, 2024",
    status: "Ongoing",
  },
  {
    id: 5,
    lockerCode: "096",
    timeLeft: "00:00",
    date: "Jan 3, 2024",
    status: "Closed",
  },
  {
    id: 6,
    lockerCode: "096",
    timeLeft: "00:00",
    date: "Jan 3, 2024",
    status: "Ongoing",
  },
  {
    id: 7,
    lockerCode: "096",
    timeLeft: "00:00",
    date: "Jan 3, 2024",
    status: "Ended",
  },
  {
    id: 8,
    lockerCode: "096",
    timeLeft: "00:00",
    date: "Jan 3, 2024",
    status: "Closed",
  },
];

export default DashboardTable;