
import { createContext,  useState, useEffect } from "react";



const AuthContext = createContext()

export default AuthContext;

export const Usecontext = ({children}) => {
   const [manifesto, setManifesto] = useState(false);
   const [offset, setOffset] = useState(0);
   const[ contact, setContact] = useState(false)
  
//get scroll value//
useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
    
    

    
  
    
    

    let contextData = {
        
        manifesto:manifesto,
        setManifesto:setManifesto,
        offset:offset,
        contact:contact,
        setContact:setContact,
        
}
    
  
    
    return(
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}