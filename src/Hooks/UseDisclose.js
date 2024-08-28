import React, { useState } from 'react'

const UseDisclose = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const onOpen = () => {
      setIsOpen(true);
    }
  
    const onClose = () => {
      setIsOpen(false);
    }
  
    return { onClose, onOpen, isOpen, onClose}

    }


export default UseDisclose