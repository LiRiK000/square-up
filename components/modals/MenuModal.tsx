"use client";

import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";

import { MenuLinksModal } from "../MenuLinksModal";
import { ModeToggle } from "../ModeToggle";
import { useEffect } from "react";
import { useMenuModal } from "@/hooks/useMenuModal";

export const MenuModal = () => {
  const menu = useMenuModal();

  useEffect(() => {
    if (window.innerWidth > 768) {
      menu.onClose;
    }
  }, []);

  return (
    <Dialog open={menu.isOpen} onOpenChange={menu.onClose}>
      <DialogContent>
        <DialogHeader className="border-b pb-3">
          <h2 className="text-lg font-medium">SquareUp</h2>
        </DialogHeader>
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-y-1">
            <MenuLinksModal />
          </div>
          <ModeToggle />
        </div>
      </DialogContent>
    </Dialog>
  );
};
