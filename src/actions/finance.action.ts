import firebase from '../config/firebase'
import { FinanceCashFlowInterface } from 'interfaces'
import { getYear } from 'modules/Finance/services/utils'
import { genUUID } from 'utils/uuid'

const db = firebase.firestore()

export const FinanceCashFlowAction = {
  get: async (user_id: string, year = getYear()) => {
    const coll = db.collection('finance')
    return await coll
      .where('user_id', '==', user_id)
      .where('type', '==', 'cash_flow')
      .where('year', '==', year)
      .get()
      .then((snapshot) => {
        let data: FinanceCashFlowInterface[] = []
        snapshot.forEach((doc: any) => {
          data.push({
            id: doc.id,
            ...doc.data(),
          })
        })
        return data
      })
  },
  create: async (data: FinanceCashFlowInterface) => {
    const coll = db.collection('finance')
    const id = genUUID()
    return await coll
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
