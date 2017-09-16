export default function* rootSaga() {
  yield [
    require('./counter').watchIncrementAsync(),
    require('./fetch').fetchAsync(),
    require('./fetch').fetchDetail(),
  ]
}