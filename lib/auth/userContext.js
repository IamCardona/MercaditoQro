import { useState, useEffect, createContext, useContext } from 'react'
import firebase from './firebase.js'

export const UserContext = createContext()

export default function UserContextComp({ children }) {
  const [user, setUser] = useState(null)
  const [loadingUser, setLoadingUser] = useState(true)

  useEffect(() => {
    const unsubscriber = firebase.auth().onAuthStateChanged(async (user) => {
      try {
        if (user) {
          firebase.firestore().collection('users').doc(user.uid).get().then(data => {
            setUser(data.data().username)
            setLoadingUser(false)
          })
        } else {
          setUser(null)
          setLoadingUser(false)
        }
      } catch (error) {
        // Most probably a connection error. Handle appropriately.
        setLoadingUser(false)
      }
    })

    // Unsubscribe auth listener on unmount
    return () => unsubscriber()
  }, [])

  return (
    <UserContext.Provider value={{
      user,
      loadingUser,
    }}>
      {children}
    </UserContext.Provider> 
  )
}

// Custom hook that shorhands the context!
export const useUser = () => useContext(UserContext)