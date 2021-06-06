import firebase from '../config/firebase'

const db = firebase.firestore().collection('users')

export const AuthService = {
  getUserByEmail: async (email: string) => {
    return await db
      .where('email', '==', email)
      .get()
      .then((snapshot) => {
        let data = {}
        snapshot.forEach((doc: any) => {
          data = { ...doc.data(), id: doc.id }
        })
        return data
      })
  },
}
