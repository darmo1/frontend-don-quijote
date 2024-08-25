import { ComponentProps, useState } from "react";
import { toast } from "react-toastify";

export type ToastProps = {
  message: string;
  delay?: number;
  position?:
    | "top-left"
    | "top-right"
    | "bottom-left"
    | "bottom-center"
    | "bottom-right";
  autoClose?: number;
  hideProgressBar?: boolean;
  closeOnClick?: boolean;
  pauseOnHover?: boolean;
  draggable?: boolean;
  theme?: string;
  [key: string]: any;
};

export const useToast = () => {

  const success = ({
    message,
    autoClose = 3000 ,
    closeOnClick = true,
    draggable = true,
    hideProgressBar = false,
    pauseOnHover = true,
    position = "bottom-center",
    theme = "dark",
  }: ToastProps) => {
    toast.success(message, {
      autoClose,
      closeOnClick,
      draggable,
      hideProgressBar,
      pauseOnHover,
      position,
      theme
    });
  };

  const error = ({
    message,
    autoClose = 3000,
    closeOnClick = true,
    draggable = true,
    hideProgressBar = false,
    pauseOnHover = true,
    position = "bottom-center",
    theme = "dark",
    ...rest
  }: ToastProps) => {
    toast.error(message, {
      autoClose,
      closeOnClick,
      draggable,
      hideProgressBar,
      pauseOnHover,
      position,
      theme,
      ...rest,
    });
  };

  return {
    success,
    error,
  };
};
