import { Backdrop }from './styled'

export const Modal = ({ children, isOpen, setIsOpen}) =>{

    if (!isOpen) return null;
    return (
        <Backdrop>
            <div className="modal">
                <button type='button' className="modalClose" onClick={()=> setIsOpen(false)}/>
                {children}
            </div>
        </Backdrop>
    )
}