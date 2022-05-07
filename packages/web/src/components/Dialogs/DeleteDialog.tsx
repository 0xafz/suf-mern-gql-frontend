import { Dialog, DialogTitle, DialogContent, DialogActions } from './Dialog'
import 'twin.macro'
import { LightButton } from '../my-mui/Misc'

interface DeleteDialogProps {
  open: boolean
  onConfirm: (...args: any) => void
  onClose: () => void
  bodyType: string
  loading?: boolean
}

const DeleteDialog = ({
  open,
  onConfirm,
  onClose,
  bodyType,
  loading,
}: DeleteDialogProps) => {
  return (
    <>
      {open && (
        <Dialog onClose={onClose}>
          <DialogTitle>Confirm Delete</DialogTitle>
          <DialogContent>
            <p>
              {`Are you sure you want to delete your ${
                bodyType ? bodyType : 'question'
              }?`}
            </p>
          </DialogContent>
          <DialogActions>
            <LightButton
              onClick={onClose}
              tw="mr-1 py-2 px-4"
              disabled={loading}
            >
              Cancel
            </LightButton>
            <LightButton
              onClick={onConfirm}
              tw="bg-red-700 text-white py-2 px-4"
              disabled={loading}
            >
              Delete
            </LightButton>
          </DialogActions>
        </Dialog>
      )}
    </>
  )
}

export default DeleteDialog
