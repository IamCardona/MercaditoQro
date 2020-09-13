import Layout from '../components/layout/Layout'

import { Button } from 'antd'

const Index = () => {
  return(
    <Layout title="Mercadito Qro" menuKey="/">
      <div>
        <h1>Index</h1>

        <Button type="primary">Hello</Button>
      </div>
    </Layout>
  )
}

export default Index