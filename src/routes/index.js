import {
    Login,
    NotFound,
    SearchBooks,
    AddBook,
    BooksDetails
} from '@/view'

export const mainRouter = [{
    pathName: '/login',
    component: Login
},{
    pathName: '/404',
    component: NotFound
},]

export const homeRouter = [{
    pathName: '/home/SearchBooks',
    component: SearchBooks
},{
    pathName: '/home/AddBook',
    component: AddBook
},{
    pathName: '/home/BooksDetails/:id',
    component: BooksDetails
}]