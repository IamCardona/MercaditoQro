import Layout from '../components/layout/Layout' 
import { useUser } from '../lib/auth/userContext'
import { Spin, Button, message } from 'antd'
import { useRouter } from 'next/router'
import firebase from '../lib/auth/firebase'
import Link from 'next/link'

const User = () => {
  const { loadingUser, user } = useUser()
  const router = useRouter()

  const signOut = () => {
    firebase.auth().signOut().then(() => {
      message.success("Gracias por tu tiempo, vuelve pronto.")
      router.push('/')
    })
  }

  if(loadingUser) {
    return(
      <div className="center">
        <Spin spinning={true} />
      </div>
    )
  }

  if(!user) {
    return(
      <Layout>
        <h1>Nesesitas Iniciar sesión primero</h1>
        
        <Link href="/login">
          <Button>Iniciar sesión</Button>
        </Link>
        
      </Layout>
    )
  }

  return(
    <Layout title="Mi cuenta - Mercadito Qro" menuKey="/user">
      <div>
        <h1>User</h1>

        <Button type="default" danger onClick={signOut}>Cerar sesión</Button>
      </div>
    </Layout>
  )
}

export default User