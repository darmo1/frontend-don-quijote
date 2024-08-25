'use client'
import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useMemo,
} from "react";
import { ToastContainer } from "react-toastify";
import { ToastProps, useToast } from "./useToast";

type ToastContextProps = {
  success: (_: ToastProps) => void;
  error: (_: ToastProps) => void;
};

const ToastContext = createContext<ToastContextProps | null>(null);

export const useQuickToast = () => useContext(ToastContext);

export const ToastProvider: FC<PropsWithChildren> = ({ children }) => {
  const { success, error } = useToast();
  const toastMethods = useMemo(() => ({ success, error }), [success, error]);

  return (
    <ToastContext.Provider value={toastMethods}>
      <ToastContainer />
      {children}
    </ToastContext.Provider>
  );
};
