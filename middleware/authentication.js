export default ({redirect, i18n, app, store, route}) => {
  const pathNameTwo = '/' + i18n.locale + '/profile'
  console.log(app.$cookies.get('token'))
  console.log(app.$cookies.getAll())
  if (!app.$cookies.get('token')) {
    if(route.path === pathNameTwo && route.query.username)
      return redirect('/' + i18n.locale + '/profile?username='+route.query.username)
    return redirect('/' + i18n.locale + '/login')
  } else {
    store.dispatch('getUserSettings')
    // context.app.$store.dispatch()
  }
  // if (!context.store.getters.isLog) {
  //   console.log(context.store.getters.isLog)
  //   context.store.commit('PUT_ISLOGIN', true)
  //   console.log(context.store.getters.isLog)
  //   return context.redirect('/' + context.i18n.locale + '/login')
  // } else {
  //   context.store.commit('PUT_ISLOGIN', true)
  // }
}
