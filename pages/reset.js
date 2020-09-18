import { useState } from 'react'
import Link from 'next/link'
import { Form, Input, Button, Divider, Spin, message } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { useUser } from '../lib/auth/userContext'
import { ArrowLeftOutlined } from '@ant-design/icons'
import firebase from '../lib/auth/firebase'
import { useRouter } from 'next/router'
import NavBack from '../components/user/NavBack'

const Reset = () => {
  const { loadingUser, user } = useUser()
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const onFinish = values => {
    const { email } = values
    setLoading(true)
    firebase.auth().sendPasswordResetEmail(email).then(() => {
      message.success("Correo enviado correctamente, verifica tu bandeja de entrada o spam.")
      setLoading(false)
      router.push('/login')
    }).catch(() => {
      message.error("Ha ocurrido un error, vuelve a intentarlo.")
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

  if(user) {
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

      <NavBack />

      {/** Logo - Mercadito Qro */}
      <div>
        <Link href="/">
          <img src="/logo.png" alt="Logo" className="image-login click" style={{ marginTop: "3rem" }} />
        </Link>
      </div> 

      <Spin spinning={loading}>

        {/** Reset form */}
        <div className="container-login">

          <h3>Restablecer contraseña</h3>

          <Form onFinish={onFinish}>
            <Form.Item name="email" rules={[{
                required: true,
                message: "Ingresa tu correo electrónico"
              },{
                type: "email",
                message: "Ingresa un correo electrónico valido"
              }]}>
              <Input placeholder="Correo electrónico" prefix={<UserOutlined />} />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">Enviar</Button>
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

          {/** "¿Ya tienes una cuenta? Inicia sesión aqui" */}
          <div style={{ textAlign: "left", margin: "2rem 0" }}>
            <Link href="/login">
              <a>¿Ya tienes una cuenta? Inicia sesión aqui</a>
            </Link>
          </div>
        </div>
      </Spin>
    </div>
  )
}

export default Reset