export default ({ route, redirect }) => {
  if (route.meta[0].requiresAuth) {
    console.log('需要驗證')
    const authStates = false
    if (!authStates) { // 若沒有登入就使用返回登入頁面 /auth
      return redirect('/auth/')
    }
  }
}
