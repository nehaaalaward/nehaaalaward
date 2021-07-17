import { useEffect } from 'react'


const questions = [
 
]


export default function Modal({ onClose }) {

  useEffect(() => {
    const listener = (e) => {
      if (e.keyCode === 27) {
        onClose?.();
      }
    }
    document.addEventListener('keydown', listener)
    return () => {
      document.removeEventListener('keydown', listener)
    }
  }, [])


  return <div className="modal-backdrop">
    <div className="modal-wrapper">
      <div className="modal">
        <div className="header">
          <h4>Detecting worthiness...</h4>
          <button onClick={onClose}>close</button>
        </div>
      </div>
    </div>
  </div>
}
