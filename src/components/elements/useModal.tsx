import { useCallback, useState } from "react";

export default function useModal() {
  const [isOpen, setOpen] = useState<boolean>(false);

  const openModal = useCallback(() => setOpen(true), []);
  const closeModal = useCallback(() => setOpen(false), []);

  return { openModal, closeModal, isOpen };
}
