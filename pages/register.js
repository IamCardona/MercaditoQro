import { useUser } from '../lib/auth/userContext'
import { useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Form, Input, Button, Divider, Alert, Spin, message } from 'antd'
import { UserOutlined, LockOutlined, MailOutlined, ArrowLeftOutlined } from '@ant-design/icons'

import firebase from '../lib/auth/firebase'

const Register = () => {
  const router = useRouter()
  const { loadingUser, user } = useUser()
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [is, setIs] = useState(true)

  const onFinish = values => {
    setLoading(true)
    setIs(false)
    const { email, password, username } = values
    firebase.auth().createUserWithEmailAndPassword(email, password).then(user => {
      firebase.firestore().collection('users').doc(user.user.uid).set({
        email,
        username
      }).catch(() => {
        setError("Ha ocurrido un error, vuelve a intentarlo.")
      })
      message.success(`Bienvenido a Mercadito Qro!`)
      router.push('/')
      setLoading(false)
    }).catch(error => {
      if(error.message === "The email address is already in use by another account."){
        setError("Parece que ese correo ya esta en uso.")
      }
      if(error.message === "Password should be at least 6 characters"){
        setError("La contraseña debe tener almenos 6 caracteres.")
      }
      setLoading(false)
    })
  }

  if(loadingUser) {
    return(
      <div className="center">
        <Spin spinning={true} />
      </div>
    ) 
  }

  if(user && is) {
    return(
      <div className="center" style={{ textAlign: "center", width: "100%" }}>
        <Link href="/">
          <img src="/logo.png" alt="Mercadito Qro" className="image-login click" />        
        </Link>

        <h1>{`Hola, ${user}, ya has iniciado sesión!`}</h1>

        <Link href="/">
          <a><ArrowLeftOutlined /> Ir a Mercadito Qro</a>
        </Link>
      </div>
    )
  }

  return(
    <div style={{
      textAlign: "center"
    }}>
        {/**  */}
        <Head>
          <title>Crear cuenta - Mercadito Qro</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="icon" href="bolso.svg" type="image/svg" />
        </Head>

      {/** Spining */}
      <Spin spinning={loading}>

        {/** Logo - Mercadito Qro */}
        <div>
          <Link href="/">
            <img src="/logo.png" alt="Logo" className="image-login click" />
          </Link>
        </div>

        {/** Login Form */}
        <div className="container-login">

          {/** Error display */}
          {error && (
            <Alert
              message={error}
              type="error"
              closable
              onClose={() => setError(null)}
              style={{ marginBottom: "1rem" }}
            />
          )}

          <h3>Crear cuenta</h3>

          <Form onFinish={onFinish}>

            {/** Username */}
            <Form.Item name="username" rules={[{
              required: true,
              message: "Ingresa tu nombre de usuario"
            }]}>
              <Input placeholder="Usuario" prefix={<UserOutlined />} />
            </Form.Item>

            {/** Email */}
            <Form.Item name="email" rules={[{
              required: true,
              message: "Ingresa tu correo electrónico"
            },{
                type: "email",
                message: "Ingresa un correo electrónico valido"
            }]}>
              <Input placeholder="Correo electrónico" prefix={<MailOutlined />} />
            </Form.Item>

            {/** Password */}
            <Form.Item name="password" rules={[{
              required: true,
              message: "Ingresa tu contraseña"
            }]}>
              <Input.Password placeholder="Contraseña" prefix={<LockOutlined />} type="password" />
            </Form.Item>

            {/** Submit button */}
            <Form.Item>
              <Button type="primary" htmlType="submit" style={{ width: "80%" }}>Crear cuenta</Button>
            </Form.Item>
          </Form>

          {/** "¿Ya tienes una cuenta?" */}
          <div>
            <Divider style={{
              color: "grey"
            }} plain>¿Ya tienes una cuenta?</Divider>

            <Link href="/login">
              <Button>Iniciar sesión</Button>
            </Link>
          </div>

          {/** "¿Olvidaste tu contraseña?" */}
          <div style={{ textAlign: "left", marginTop: "2rem", marginBottom: "2rem" }}>
            <Link href="/reset">
              <a>¿Olvidaste tu contraseña?</a>
            </Link>
          </div>
        </div>
      </Spin>
    </div>
  )
}

export default Register