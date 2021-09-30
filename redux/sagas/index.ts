import {
 put, takeEvery,
} from 'redux-saga/effects'

function* login(action) {
   console.log(action)
   // call api login
   try {
      const payload = { name: 'ba logined', id: '1exdfgd' }
      yield put({ type: 'SET_CURRENT_USER', payload })
   } catch (e) {
      yield put({ type: 'HANDLE_LOGIN_FAIL', message: e.message })
   }
}

function* mySaga() {
   yield takeEvery('LOGIN', login)
 }

 export default mySaga
