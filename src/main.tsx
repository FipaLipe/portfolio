import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&iicon_names=science,science_off,biotech,co2,genetics,hand_bones,function,all_inclusive,asterisk,calculate,functions,subscript,add,music_note,polymer,planet,rocket,experiment"
    />
    <App />
  </StrictMode>,
);
