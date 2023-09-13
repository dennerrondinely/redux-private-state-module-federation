import { useEffect, useState } from "react";
import { offAddEvent, onAddEvent } from "../core";

export type AddEvent = {};
export const useAddEvent = () => {
  const [state, setState] = useState<AddEvent>({});
  useEffect(() => {
    onAddEvent(setState);

    return () => {
      offAddEvent(setState);
    };
  }, []);
  
  return { state };
};
