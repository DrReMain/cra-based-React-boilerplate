export default function* rootSaga() {
  yield [
    require('./counter').helloSaga(),
    require('./counter').watchIncrementAsync(),
    require('./fetch').fetchAsync(),
  ]
}