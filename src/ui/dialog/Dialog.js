import React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { XIcon } from "lucide-react";
import styles from "./Dialog.module.css";

const Dialog = (props) => {
  return <DialogPrimitive.Root {...props} />;
};

const DialogTrigger = (props) => {
  return <DialogPrimitive.Trigger {...props} />;
};

const DialogPortal = (props) => {
  return <DialogPrimitive.Portal {...props} />;
};

const DialogOverlay = (props) => {
  return <DialogPrimitive.Overlay className={styles.overlay} {...props} />;
};

const DialogContent = ({ children, ...props }) => {
  return (
    <DialogPortal>
      <DialogOverlay />
      <DialogPrimitive.Content className={styles.content} {...props}>
        {children}
        <DialogPrimitive.Close asChild>
          <button className={styles.closeButton}>
            <XIcon size={20} />
            <span className="sr-only"></span>
          </button>
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPortal>
  );
};

const DialogClose = (props) => {
  return <DialogPrimitive.Close {...props} />;
};

const DialogHeader = (props) => {
  return <div className={styles.header} {...props} />;
};

const DialogFooter = (props) => {
  return <div className={styles.footer} {...props} />;
};

const DialogTitle = (props) => {
  return <DialogPrimitive.Title className={styles.title} {...props} />;
};

const DialogDescription = (props) => {
  return <DialogPrimitive.Description className={styles.description} {...props} />;
};

export {
  Dialog,
  DialogTrigger,
  DialogPortal,
  DialogOverlay,
  DialogContent,
  DialogClose,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
};
