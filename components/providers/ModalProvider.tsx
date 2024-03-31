"use client";

import { useEffect, useState } from "react";

import ContactModal from "../modals/ContactModal";
import { MenuModal } from "../modals/MenuModal";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <MenuModal />
      <ContactModal />
    </>
  );
};
