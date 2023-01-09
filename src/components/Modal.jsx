export const Modal = ({ children, isOpen, setModalOpen}) =>{
    if (!isOpen) return null;
    return <>{children}</>
}