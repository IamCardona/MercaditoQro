import Layout from '../../components/layout/Layout'
import firebase from '../../lib/auth/firebase'
import { useRouter } from 'next/router'
import TardanSidebar from '../../components/tardan/TardanSidebar'

const TardanCategoria = ({ data }) => {
  const router = useRouter()
  console.log(data)
  console.log(router.query.category)

  return(
    <Layout>
      <TardanSidebar pathname={router.query.category} />

      <div>

      </div>
    </Layout>
  )
}

export default TardanCategoria

export async function getStaticPaths() {
    return {
      paths: [{
        params: { category: 'Etiqueta' }
      },{
        params: { category: 'Vestir' }
      },{
        params: { category: 'Casual' }
      },{
        params: { category: 'Texano' }
      },{
        params: { category: 'Western' }
      },{
        params: { category: 'Deportivo' }
      },{
        params: { category: 'Boina' }
      },{
        params: { category: 'Playa' }
      },{
        params: { category: 'Accesorio' }
      }],
      fallback: false
    }
}

export async function getStaticProps({ params }) {
    const snapshot = await firebase.firestore().collection('/shops/tardan/products').where('category', '==', `${params.category}`).get()
    const data = []
    snapshot.forEach(doc => {
      return data.push(doc.data())
    })
    
    return {
      props: { data }
    }
}