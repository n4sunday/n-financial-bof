import firebase from '../config/firebase'
import { InvestInterface } from 'interfaces'
import { genUUID } from 'utils/uuid'

const db = firebase.firestore().collection('invest')

export const InvestAction = {
  get: async (user_id: string) => {
    return await db
      // .where('user_id', '==', user_id)
      .get()
      .then((snapshot) => {
        let data: InvestInterface[] = []
        snapshot.forEach((doc: any) => {
          data.push({
            id: doc.id,
            ...doc.data(),
          })
        })
        return data
      })
  },
  create: async (data: InvestInterface) => {
    const id = genUUID()
    return await db
      .doc(id)
      .set(data)
      .then(function () {
        return data
      })
      .catch(function (error) {
        return error
      })
  },
}
