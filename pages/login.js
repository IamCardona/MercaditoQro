import { useState } from 'react'
import { useUser } from '../lib/auth/userContext'
import Link from 'next/link'
import Head from 'next/head'
import { Form, Input, Button, Divider, Spin, message, Alert } from 'antd'
import { UserOutlined, LockOutlined, ArrowLeftOutlined } from '@ant-design/icons'
import firebase from '../lib/auth/firebase'
import { useRouter } from 'next/router'
import NavBack from '../components/user/NavBack'

const Login = () => {
  const router  = useRouter()
  const { loadingUser, user } = useUser()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [is, setIs] = useState(true)

  const onFinish = values => {
    const { email, password } = values
    setLoading(true)
    setIs(false)
    firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
      setLoading(false)
      message.success(`Bienvenido de vuelta a Mercadito Qro!`)
      router.push('/')
    }).catch(() => {
      setLoading(false)
      setError("La contraseña es incorrecta o el usuario no existe.")
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
        <title>Inicia sesión - Mercadito Qro</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="bolso.svg" type="image/svg" />
      </Head>

      <Spin spinning={loading}>

        <NavBack />

        {/** Logo - Mercadito Qro */}
        <div>
          <Link href="/">
            <img src="/logo.png" alt="Logo" className="image-login click" style={{ marginTop: "3rem" }}/>
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

          <h3>Iniciar sesión</h3>

          <Form onFinish={onFinish}>

            {/** Email */}
            <Form.Item name="email" rules={[{
              required: true,
              message: "Ingresa tu correo electrónico"
            },{
              type: "email",
              message: "Ingresa un correo electrónico valido"
            }]}>
              <Input placeholder="Correo electrónico" prefix={<UserOutlined />} />
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
              <Button type="primary" htmlType="submit" style={{ width: "80%" }}>Iniciar sesión</Button>
            </Form.Item>
          </Form>

          {/** "¿Eres nuevo?" */}
          <div>
            <Divider style={{
              color: "grey"
            }} plain>¿Eres nuevo?</Divider>

            <Link href="/register">
              <Button>Crear una cuenta</Button>
            </Link>
          </div>

          {/** "¿Olvidaste tu contraseña?" */}
          <div style={{ textAlign: "left", margin: "2rem 0" }}>
            <Link href="/reset">
              <a>¿Olvidaste tu contraseña?</a>
            </Link>
          </div>
        </div>
      </Spin>
    </div>
  )
}

export default Login