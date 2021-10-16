import { useState, useEffect } from 'react'
import DeleteDialog from './DeleteDialog'
import { formatDayTime } from '../utils/helperFuncs'

import { Link, TextField, LightButton } from './CompStore'

import tw, { styled } from 'twin.macro' //eslint-disable-line no-unused-vars

const Comment = ({ comment, user, quesAnsId, editComment, deleteComment }) => {
  const [editOpen, setEditOpen] = useState(false)
  const [editedCommentBody, setEditedCommentBody] = useState(comment.body)

  useEffect(() => {
    setEditedCommentBody(comment.body)
  }, [comment])

  const closeInput = () => {
    setEditOpen(false)
  }

  const handleCommentEdit = e => {
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
            <Link
              tw=""
              to={`/user/${comment.author.username}`}
            >
              {comment.author.username}
            </Link>
            <span >
              {` ${formatDayTime(comment.createdAt)} `}
            </span>
            <span tw="font-size[.8em]">
              {comment.createdAt !== comment.updatedAt && (
                '(edited)'
              )}
            </span>
          </p>
          {user && user._id === comment.author._id && (
            <LightButton
              tw="mr-1"
              onClick={() => setEditOpen(true)}
            >
              edit
            </LightButton>
          )}
          {user && (user._id === comment.author._id || user.role === 'ADMIN') && (
            <DeleteDialog
              bodyType="comment"
              handleDelete={() => deleteComment(comment._id, quesAnsId)}
            />
          )}
        </div>
      ) : (
        <form tw="mt-3" onSubmit={handleCommentEdit}>
          <TextField
            value={editedCommentBody}
            required
            fullWidth
            type="text"
            placeholder="Enter at least 5 characters"
            variant="outlined"
            size="small"
            multiline
            rows={2}
            onChange={e => setEditedCommentBody(e.target.value)}
          />
          <div >
            <LightButton
              type="submit"
              style={{ marginRight: 9 }}
            >
              Update Comment
            </LightButton>
            <LightButton
              onClick={() => setEditOpen(false)}
            >
              Cancel
            </LightButton>
          </div>
        </form>
      )}
    </div>
  )
}

export default Comment
