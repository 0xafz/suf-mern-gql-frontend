import React, { useState, useEffect } from 'react'
import DeleteDialog from '../Dialogs/DeleteDialog'
import { formatDayTime } from '~~/utils/helperFuncs'
import { Link, LightButton } from '../my-mui/Misc'
import TextField from '../my-mui/TextField'

import 'twin.macro'
import { Author, Comment as IComment } from '~~/generated/graphql'

interface CommentProps {
  comment: IComment
  user: Author
  quesAnsId: string
  editComment: (...args: any) => void
  deleteComment: (...args: any) => void
}
const Comment = ({
  comment,
  user,
  quesAnsId,
  editComment,
  deleteComment,
}: CommentProps) => {
  const [editOpen, setEditOpen] = useState(false)
  const [deleteModalOpen, setDeleteModalOpen] = useState(false)
  const [editedCommentBody, setEditedCommentBody] = useState(comment.body)

  useEffect(() => {
    setEditedCommentBody(comment.body)
  }, [comment])

  const closeInput = () => {
    setEditOpen(false)
  }

  const handleDeleteComment = () => {
    deleteComment()
    setDeleteModalOpen(false)
  }
  const handleCommentEdit = (e: React.FormEvent) => {
    e.preventDefault()
    editComment(editedCommentBody, comment._id, quesAnsId)
    closeInput()
  }

  return (
    <div tw="my-1">
      {!editOpen ? (
        <div>
          <p tw="text-xs break-all inline mr-2">
            {comment.body} –{' '}
            <Link to={`/user/${comment.author.username}`}>
              {comment.author.username}
            </Link>
            <span>{` ${formatDayTime(comment.createdAt)} `}</span>
            <span tw="font-size[.8em]">
              {comment.createdAt !== comment.updatedAt && '(edited)'}
            </span>
          </p>
          {user && user._id === comment.author._id && (
            <>
              <LightButton tw="mr-1" onClick={() => setEditOpen(true)}>
                Edit
              </LightButton>
              <LightButton onClick={() => setDeleteModalOpen(true)}>
                Delete
              </LightButton>
              <DeleteDialog
                open={deleteModalOpen}
                bodyType="comment"
                onConfirm={() => handleDeleteComment()}
                onClose={() => setDeleteModalOpen(false)}
              />
            </>
          )}
        </div>
      ) : (
        <form tw="mt-3" onSubmit={handleCommentEdit}>
          <TextField
            tag="textarea"
            value={editedCommentBody}
            required
            fullWidth
            placeholder="Enter at least 15 characters"
            rows={2}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              setEditedCommentBody(e.target.value)
            }
          />
          <div>
            <LightButton type="submit" tw="mr-4">
              Update Comment
            </LightButton>
            <LightButton onClick={() => setEditOpen(false)}>Cancel</LightButton>
          </div>
        </form>
      )}
    </div>
  )
}

export default Comment
