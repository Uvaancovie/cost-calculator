// components/Modal.tsx
'use client'

import { useState, ReactNode } from 'react'

interface ModalProps {
  title?: string
  children?: ReactNode
  triggerText?: string
  confirmText?: string
  cancelText?: string
  onConfirm?: () => void
  onCancel?: () => void
}

export default function Modal({
  title = 'Modal Title',
  children,
  triggerText = 'Open Modal',
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  onConfirm,
  onCancel,
}: ModalProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => setIsOpen(true)
  const handleClose = () => setIsOpen(false)

  const handleConfirm = () => {
    onConfirm?.()
    setIsOpen(false)
  }

  const handleCancel = () => {
    onCancel?.()
    setIsOpen(false)
  }

  return (
    <div>
      {/* Trigger Button */}
      <button
        onClick={handleOpen}
        className="px-4 py-2 bg-green-700 text-white rounded hover:bg-green-600 transition"
      >
        {triggerText}
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          {/* Modal Box */}
          <div className="bg-white w-full max-w-md p-6 rounded-md shadow-lg relative">
            <h2 className="text-xl font-semibold mb-4 text-green-800">
              {title}
            </h2>
            <div className="mb-4 text-gray-700">{children}</div>
            {/* Buttons */}
            <div className="flex justify-end space-x-3">
              <button
                onClick={handleCancel}
                className="px-4 py-2 border border-green-700 text-green-700 rounded hover:bg-green-700 hover:text-white transition"
              >
                {cancelText}
              </button>
              <button
                onClick={handleConfirm}
                className="px-4 py-2 bg-green-700 text-white rounded hover:bg-green-600 transition"
              >
                {confirmText}
              </button>
            </div>
            {/* Close Icon (optional) */}
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
