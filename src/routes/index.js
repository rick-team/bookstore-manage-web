import {
    Login,
    NotFound
} from '@/view'

export const mainRouter = [{
    pathName: '/login',
    component: Login
},{
    pathName: '/404',
    component: NotFound
},]

export const homeRouter = []