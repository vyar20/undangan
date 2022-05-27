import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import Flowers from "../assets/svg/flowers-1";
import { useEffect, useState } from "react";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
  },
});

export default function Section1({ openMail, setOpenMail, startFunction }) {
  // eslint-disable-next-line no-unused-vars
  const [invitation, setInvitation] = useState("");


  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);

    // eslint-disable-next-line no-unused-vars
    for (const [key, value] of urlParams) {
     setInvitation(value)
    }
  }, [])
  return (
    <div
      className={`w-full h-screen bg-img-1 z-40 fixed transition-all duration-700 ease-in ${
        openMail && "translate-y-full"
      }`}
    >
      <div
        className={`w-full h-screen justify-center items-center text-center flex flex-col gap-4 z-10 transition-all duration-700 bg-slate-900 text-white ${
          openMail ? "bg-opacity-100" : "bg-opacity-50"
        }`}
      >
        <div className="flex flex-col items-center">
          <p className="font-smooch text-lg">The Wedding Of</p>
          <Flowers />
          <p className="font-smooch text-4xl">
            Letva <br /> & <br /> Dika
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-poppins text-xs">Special Invite To</p>
          <p className="font-poppins text-xl">{invitation}</p>
          <ThemeProvider theme={theme}>
            <Button
              variant="outlined"
              size="small"
              color="primary"
              onClick={() => {
                setOpenMail(!openMail);
                startFunction();
              }}
              style={{ textTransform: "none" }}
              endIcon={<EmailOutlinedIcon />}
            >
              Open Invitation
            </Button>
          </ThemeProvider>
        </div>
      </div>
    </div>
  );
}
