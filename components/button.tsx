import { Button as ShadcnButton } from "@/components/shadcn/button";
import { ReactNode } from "react";

type NativeVariants = "secondary" | "destructive" | "outline" | "ghost" | "link";
type CustomVariants = "custom1" | "custom2" | "custom3";

interface CustomButtonProps {
  variant?: NativeVariants | CustomVariants;
  children?: ReactNode;
  [key: string]: any;
}

function Button({ variant, ...props }: CustomButtonProps) {
  let customStyles = "",
      customCss = {}

  switch (variant) {
    case "custom1":
      customStyles = "bg-blue-500 hover:bg-blue-600 text-white p-10";
      break;
    case "custom2":
      customStyles = "bg-red-500 hover:bg-red-600 text-white rounded-3xl";
      break;
    case "custom3":
      customCss = {
        backgroundColor: "black",
        color: "white",
        borderRadius: "50px 5px 5px 5px",
        paddingLeft: "25px"
      }
      break;
  }

  return <ShadcnButton className={customStyles} variant={variant as NativeVariants} style={customCss} {...props} />;
}

export default Button;