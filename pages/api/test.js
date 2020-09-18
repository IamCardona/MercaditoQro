import firebase from '../../lib/auth/firebase'

export default async (req, res) => {
  const snapshot = await firebase.firestore().collection('/shops/tardan/products').where('category', '==', `Etiqueta`).get()
  const data = []
  snapshot.forEach(doc => {
    return data.push(doc.data().name)
  })

  console.log(data)

  res.status(200).send("OK!")
}