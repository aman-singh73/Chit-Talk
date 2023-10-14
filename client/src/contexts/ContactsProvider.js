import React, {useContext} from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const ContactsContext=React.createContext()
export function useContacts(){
     return useContext(ContactsContext)
}

export function ContactProvider({children}) {
    const [contacts,setContacts]=useLocalStorage('contacts',[])
    function createContact(id,name){
        setContacts(prevContacts=>{
            return  [...prevContacts,{id,name}]
        })
    }
return (
    <ContactsContext.provider value ={{contacts,createContact}}>
        {children}
    </ContactsContext.provider>
)
}