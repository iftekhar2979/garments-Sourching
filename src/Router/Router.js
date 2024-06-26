import { createBrowserRouter } from 'react-router-dom'
import AddCompany from '../components/Pages/Dashboard/AddCompany'
<<<<<<< HEAD
import AddProduct from '../components/Pages/Dashboard/Products/AddProduct'
=======
import AddProduct from '../components/Pages/Dashboard/AddProduct'
>>>>>>> aa8c0e4d95acdb69fe711a58a57bcae3528c2900
import Companies from '../components/Pages/Dashboard/Companies'
import Dashboard from '../components/Pages/Dashboard/Dashboard'
import OrderListEdit from '../components/Pages/Dashboard/Edit Sections/OrderListEdit'
import AddOrders from '../components/Pages/Dashboard/Orders/AddOrders'
import SinglePO from '../components/Pages/Dashboard/Orders/View PO/SinglePO'
import ViewOrders from '../components/Pages/Dashboard/Orders/ViewOrders'
import Home from '../components/Pages/Home/Home'
import Login from '../components/Pages/Login/Login'
<<<<<<< HEAD
import Root from '../Root/Root'
import ViewContext from '../components/contextApi/ViewContext'
import DeliveryDetail from '../components/Pages/Dashboard/Orders/View PO/Delivery Detail/DeliveryDetail'
import ToogleTable from '../components/Utility-Component/Table/ToogleTable'
import Chalan from '../components/Pages/Dashboard/Orders/View PO/Chalan/Chalan'
import SingleDetailDelivery from '../components/Pages/Dashboard/Orders/View PO/Delivery Detail/SingleDetailDelivery'
import SignUp from '../components/Pages/Login/SignUp'
import OrderContext from '../components/contextApi/TotalContext'
import ErrorComponent from '../components/Pages/Error/ErrorComponent'
import paramsLoader from '../components/CustomHooks/Functions.js/paramsLoader'
import PrivateRoute from './PrivateRoute'
import TBList from '../components/Pages/Dashboard/TB/TBList'
import TBAndPi from '../components/Pages/Dashboard/TB/TBAndPi'
import ChalanList from '../components/Pages/Dashboard/Chalan List/ChalanList'
import PiStatement from '../components/Pages/Dashboard/TB/PI_Section/PiStatement'
import PIList from '../components/Pages/Dashboard/TB/PI_Section/PIList'
import Employee from '../components/Pages/Dashboard/Employe/Employee'
import DeliveryStatement from '../components/Pages/Dashboard/TB/DeliveryStatement/DeliveryStatement'
import AdminPrivateRoute from './AdminRoute'
export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,   
        errorElement:<ErrorComponent/>,
        children: [
            {
                path: '/',
                element: <Login/>
            }, {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element:<PrivateRoute> <SignUp></SignUp></PrivateRoute>
            }
            , {
                path: '/dashboard/',
                element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
                children: [
                    {
                        path: '/dashboard/',
                        element: <AddCompany></AddCompany>
                    }
                    ,
                    {
                        path: '/dashboard/addCompany',
                        element: <AddCompany></AddCompany>
                    }, {
                        path: '/dashboard/addProduct',
                        element: <AddProduct></AddProduct>
                    }, {
                        path: '/dashboard/companies',
                        element: <Companies></Companies>
                    }, {
                        path: '/dashboard/addOrders',
                        element: <AddOrders></AddOrders>,
                       
                    }, {
                        path: '/dashboard/viewOrders',
                        element: <ViewOrders></ViewOrders>
                    }, {
                        path: '/dashboard/edit/:id',
                        element: <OrderListEdit></OrderListEdit>,
                        loader: async ({ params }) => {
                            return fetch(`${process.env.REACT_APP_DEVELOPMENT_URL}/api/orderList/${params.id}`,{credentials:'include'})
                        }
                    },
                    , {
                        path: '/dashboard/po/:id',
                        element: <ViewContext><SinglePO></SinglePO></ViewContext>,
                        // loader: async ({ params }) => {
                        //     return fetch(`${process.env.REACT_APP_DEVELOPMENT_URL}/orderList/${params.id}`)
                        // },
                        
                    },
                    {
                        path: '/dashboard/po/deliveryDetail/:id',
                        element: <ViewContext><DeliveryDetail></DeliveryDetail></ViewContext>,
                        loader: async ({ params }) => {
                            return fetch(`${process.env.REACT_APP_DEVELOPMENT_URL}/api/deliveryDetail/${params.id}`,{credentials:'include'})
                        },
                    }, {
                        path: '/dashboard/po/singledeliveryDetail/:id',
                        element: <ViewContext><SingleDetailDelivery /></ViewContext>,
                        loader: async ({ params }) => {
                            return fetch(`${process.env.REACT_APP_DEVELOPMENT_URL}/api/singleDeliveryDetail/${params.id}`,{credentials:'include'})
                        }
                    },{
                        path:'/dashboard/tbLists',
                        element:<AdminPrivateRoute><TBAndPi/></AdminPrivateRoute>
                    },{
                        path:'/dashboard/Chalans',
                        element:<ChalanList/>
                    },
                    ,{
                        path:'/dashboard/piList',
                        element:<AdminPrivateRoute><PIList/></AdminPrivateRoute>
                        
                    },{
                        path: '/dashboard/employes',
                        element:<Employee/>

                    }
                
                ]
            }
        ]
        
    },
    {
        path: '/chalan/:id',
        element: <PrivateRoute><ViewContext><Chalan></Chalan></ViewContext></PrivateRoute>,
        loader: async ({ params }) => {
            return fetch(`${process.env.REACT_APP_DEVELOPMENT_URL}/api/singleDeliveryDetail/${params.id}`,{credentials:'include'})
        }
    },
    ,{
        path:'/piStatement/:id',
        element: <PrivateRoute><AdminPrivateRoute><PiStatement/></AdminPrivateRoute></PrivateRoute>
        
    },
    ,{
        path:'/deliveryStatement/:id',
        element:<AdminPrivateRoute><DeliveryStatement/></AdminPrivateRoute>
        
    }

])
=======

import Root from '../Root/Root'
export const router = createBrowserRouter([
  {
    path:'/',
    element:<Root></Root>,
    children:[
        {
            path:'/',
            element:<Home></Home>
        },{
            path:'/login',
            element:<Login></Login>
        },{
            path:'/dashboard/',
            element:<Dashboard></Dashboard>,
            children:[
                {
                    path:'/dashboard/',
                    element:<AddCompany></AddCompany>
                }
                ,
                {
                    path:'/dashboard/addCompany',
                    element:<AddCompany></AddCompany>
                },{
                    path:'/dashboard/addProduct',
                    element:<AddProduct></AddProduct>
                },{
                    path:'/dashboard/companies',
                    element:<Companies></Companies>
                },{
                    path:'/dashboard/addOrders',
                    element:<AddOrders></AddOrders>,
                    loader:async()=>{
                        return fetch(`http://localhost:8000/products/64161bb6a541e87d78c95b47`)
                    }
                },{
                    path:'/dashboard/viewOrders',
                    element:<ViewOrders></ViewOrders>
                },{
                    path:'/dashboard/edit/:id',
                    element:<OrderListEdit></OrderListEdit>,
                    loader:async({params})=>{
                        return fetch(`http://localhost:8000/orderList/${params.id}`)
                    }
                },{
                    path:'/dashboard/po/:id',
                    element:<SinglePO></SinglePO>,
                    loader:async({params})=>{
                        return fetch(`http://localhost:8000/orderList/${params.id}`)
                    }
                }
            ]
        }
    ]
  }])
>>>>>>> aa8c0e4d95acdb69fe711a58a57bcae3528c2900
