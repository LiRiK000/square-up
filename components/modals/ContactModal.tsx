"use client";

import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";

import React from "react";
import { useContactModal } from "@/hooks/useContactModal";

const ContactModal = () => {
  const contact = useContactModal();

  return (
    <Dialog open={contact.isOpen} onOpenChange={contact.onClose}>
      <DialogContent>
        <DialogHeader className="border-b pb-3">
          <h2 className="text-lg font-medium">Contact Us</h2>
        </DialogHeader>
        <div className=""></div>
      </DialogContent>
      {/* <div className="flex flex-col gap-y-1"> */}
      {/* <h1>Test</h1> */}
      {/* </div> */}
    </Dialog>
  );
};

export default ContactModal;
