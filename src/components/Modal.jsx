import { motion } from "framer-motion"

const Modal = ({visible,modalType, message, onClose}) => {
    if (!visible) {
      return  null;
    }
    const handleConfirmation = () =>{
        onClose("confirmationSucceed")
    }
    return (
        <div className="modal-overlay">
           <motion.div
               className="notification-success"
               initial={{ opacity: 0, scale: 0.5 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.5 }}>
               { modalType === "information" ?
                   <div>
                       <p>{message}</p>
                   </div>
                   :
                   <div>
                       <p>{message.modalQuestion}
                           <button onClick={handleConfirmation}>{message.confirmationButton}</button>
                       </p>

                   </div>
                }
               <button className="close-btn-success"
                       onClick={onClose}>X</button>
           </motion.div>
        </div>
    );
}
export default Modal;
