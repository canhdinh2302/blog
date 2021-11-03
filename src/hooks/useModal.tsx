import React, { useState, useCallback } from 'react'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'

interface useModalInterface {
  id?: string
  title?: string
}

const useModal = ({ id, title }: useModalInterface = {}) => {
  const [open, setOpen] = useState(false)

  const openModal = useCallback(() => {
    setOpen(true)
  }, [])

  const closeModal = useCallback(() => {
    setOpen(false)
  }, [])

  const Modal = useCallback(
    ({ children }: { children: React.ReactNode }) => (
      <Dialog open={open} onClose={closeModal} aria-labelledby={id} maxWidth="sm">
        {title && <DialogTitle id={id}>{title}</DialogTitle>}
        <DialogContent>{children}</DialogContent>
      </Dialog>
    ),
    [open, title, id]
  )

  const ModalAction = useCallback(
    ({ children }: { children: React.ReactNode }) => <DialogActions>{children}</DialogActions>,
    []
  )

  return {
    openModal,
    closeModal,
    Modal,
    ModalAction,
  }
}

export default useModal
