import React, { useEffect } from "react";
import { useState } from "react";
import styles from "./styles/Modal.module.css";

const Modal = ({ visible, onComplete, children, className }) => {
  const [visibleState, setVisibleState] = useState(visible);
  const [animate, setAnimate] = useState(visible);

  useEffect(() => {
    if (visibleState !== visible) {
      setVisibleState(visible);
    }

    if (visible) {
      setAnimate(true);

      const timer = setTimeout(() => {
        setVisibleState(false);
        setAnimate(false);
        onComplete();
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [visible]);

  return (
    <>
      {visibleState && (
        <div
          className={`${className ? className : ""} ${styles.modal} ${
            animate ? styles.animate : ""
          }`}
        >
          {children}
        </div>
      )}
    </>
  );
};

export default Modal;
