import { useEffect, useState } from "react"

export function useCard() {
  const [openModal, setOpenModal] = useState(false)

  const handleOpenModal = () => setOpenModal(true)
  const handleCloseModal = () => setOpenModal(false)

  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [openModal])

  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = "hidden"

      const handleEsc = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
          setOpenModal(false)
        }
      }

      window.addEventListener("keydown", handleEsc)

      return () => {
        document.body.style.overflow = ""
        window.removeEventListener("keydown", handleEsc)
      }
    } else {
      document.body.style.overflow = ""
    }
  }, [openModal])

  return { openModal, handleOpenModal, handleCloseModal }
}
