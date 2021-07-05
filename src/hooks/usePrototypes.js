import { useContext } from "react";
import AppStateContext from "../contexts/AppStateContext";

export default function usePrototypes() {
  // [?]: useContext
  const { prototypes } = useContext(AppStateContext);

  return prototypes;
}