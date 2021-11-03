import React, { useState } from 'react'
import { Drawer } from '@mui/material'
import { makeStyles } from '@mui/styles'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@svg/menu.svg'
import CloseIcon from '@svg/close.svg'
import AppLogo from './AppLogo'
import NavLinks from './NavLinks'

const useStyles = makeStyles({
  modal: {
    '& > div:first-of-type': {
      opacity: '0 !important',
    },
  },
})

const AppDrawer = () => {
  const styles = useStyles()
  const [open, setOpen] = useState(false)

  const openDrawer = () => {
    setOpen(true)
  }

  const closeDrawer = () => {
    setOpen(false)
  }

  return (
    <div className="block mr-12 lg:hidden lg:mr-0">
      <IconButton className="cursor-pointer" onClick={openDrawer}>
        <MenuIcon className="sm:h-32 sm:w-32" />
      </IconButton>

      <Drawer anchor="left" open={open} onClose={closeDrawer} classes={{ modal: styles.modal }}>
        <div className="w-320 max-w-12/12-vw">
          <div className="flex justify-between p-16">
            <AppLogo className="text-24" />

            <div>
              <IconButton onClick={closeDrawer} className="cursor-pointer">
                <CloseIcon />
              </IconButton>
            </div>
          </div>

          <NavLinks className="block" itemsClassName="h-48 border-b-1" />
        </div>
      </Drawer>
    </div>
  )
}

export default React.memo(AppDrawer)
