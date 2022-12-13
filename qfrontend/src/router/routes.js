const routes = [
  {
    path: '/auth',
    component: () => import('layouts/authLayout.vue'),
    children: [
      { path: 'login', component: () => import('pages/auth/Login.vue') , name: 'login', meta: {requiresAuth: false}},
    ]
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/', redirect: '/dashboard', name: 'dashboard', meta: {requiresAuth: true}},
      { path: '/dashboard', component: () => import('pages/Dashboard/Index'), meta: {requiresAuth: true}},
      { path: '/contacts', component: () => import('pages/Contact/Index'), meta: {requiresAuth: true}},
      { path: '/tracking_reports', component: () => import('pages/Contact/TrackingReport/Index'), meta: {requiresAuth: true}},
      { path: '/users', component: () => import('pages/User/Index'), meta: {requiresAuth: true}},
      { path: '/notifications', component: () => import('pages/Notification/Form'), meta: {requiresAuth: true}},
      { path: '/configurations', component: () => import('pages/Configuration/Index'), meta: {requiresAuth: true}},
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
