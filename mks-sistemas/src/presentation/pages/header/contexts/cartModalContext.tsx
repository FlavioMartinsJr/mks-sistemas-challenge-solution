import { createContext,useContext,useState } from "react";

type ModalContextData = {
    isOpen:boolean;
    ModalOpen:() => void;
};

interface Props {
    children?: React.ReactNode;
  }

const ModalContext = createContext({} as ModalContextData);

export const ModalProvider: React.FC<Props> = ({ children }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const ModalOpen = () => {
        setIsOpen(isOpen===false? true : false)
    };

    return(
        <ModalContext.Provider value={{isOpen,ModalOpen}}>
            <>
                {children}
            </>
        </ModalContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useModalContext = () => {
    const context = useContext(ModalContext);
    return context;
}