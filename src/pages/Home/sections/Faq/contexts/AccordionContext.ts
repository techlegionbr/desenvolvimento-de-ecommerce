import { createContext } from "react";

type TypeAccordionsContext = {
  accordions: { [key: string]: boolean };
  onClickAccordion: (number: number, show: boolean) => void;
};

export const AccordionsContext = createContext<TypeAccordionsContext>(
  {} as TypeAccordionsContext
);
