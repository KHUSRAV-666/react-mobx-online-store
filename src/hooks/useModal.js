import { useState } from 'react';

function useModal() {
  const [isOpen, setIsOpen] = useState();
  const [item, setItem] = useState({})

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  function toggle() {
    setIsOpen(!isOpen);
  }

  return {
    item,
    setItem,
    open,
    close,
    toggle,
    isOpen,
  };
}

export default useModal;
