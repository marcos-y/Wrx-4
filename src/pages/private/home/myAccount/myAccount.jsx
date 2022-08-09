// Utils & Config
import React,{useEffect} from 'react';
import axios from 'axios';

//Internal components
import NavbarBackground from "../../../../components/molecules/navbarBackground/navbarBackground";
import Footer from "../../../public/home/footer/footer";
import ClientPanel from "../../../../components/molecules/clientPanel/clientPanel";
import AuthService from "../../../../services/auth";

const MyAccount = () => {

    useEffect(() =>{
        AuthService.getClientWithOrders();
    },[]);

    const pedidos = [{ numero: '#1', 
                       fecha: '24/03/2021', 
                       direccion: 'Av. Blasco Ibañez 2301', 
                       pago: 'Tarjeta de crédito o débito (*3123)', 
                       producto: 'Paragolpes delantero XYZ', 
                       precio: '320', 
                       pendiente: 'PAGO' }
                    ,  
                    { numero: '#2', 
                      fecha: '24/03/2021', 
                      direccion: 'Av. Blasco Ibañez 2301', 
                      pago: 'Tarjeta de crédito o débito (*3123)',
                      producto: 'Paragolpes delantero XYZ', 
                      precio: '320', 
                      pendiente: 'ENTREGA' }]

        const pedidos2 = [{ numero: '#3', 
                      fecha: '24/03/2021', 
                      direccion: 'Av. Blasco Ibañez 2301', 
                      pago: 'Tarjeta de crédito o débito (*3123)',
                      producto: 'Paragolpes delantero XYZ', 
                      precio: '320', 
                      pendiente: 'ENTREGA' },  

                      { numero: '#4', 
                      fecha: '24/03/2021',
                      direccion: 'Av. Blasco Ibañez 2301', 
                      pago: 'Tarjeta de crédito o débito (*3123)', 
                      producto: 'Paragolpes delantero XYZ', 
                      precio: '320', 
                      pendiente: 'PAGO' }

                    , { numero: '#5', 
                      fecha: '24/03/2021', 
                      direccion: 'Av. Blasco Ibañez 2301', 
                      pago: 'Tarjeta de crédito o débito (*3123)', 
                      producto: 'Paragolpes delantero XYZ', 
                      precio: '320', 
                      pendiente: 'ENTREGA' }]

    return (
        <>
            <NavbarBackground title="MI PERFIL"></NavbarBackground>
            <ClientPanel pedidos={pedidos} pedidos2={pedidos2}></ClientPanel>
            <Footer></Footer>
        </>
    )
}

export default MyAccount;