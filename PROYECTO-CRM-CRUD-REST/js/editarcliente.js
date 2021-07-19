import {obtenerCliente, editarCliente } from './API.js';
import { mostrarAlerta } from './funciones.js';

(function() {


    const nombreInput = document.querySelector('#nombre');
    const apellidoInput = document.querySelector('#apellido');
    const emailInput = document.querySelector('#email');
    const telefonoInput = document.querySelector('#telefono');
    const empresaInput = document.querySelector('#empresa');
    const idInput = document.querySelector('#id');

    document.addEventListener('DOMContentLoaded', async () => {
        // Verificar si el cliente existe
        const parametrosURL = new URLSearchParams(window.location.search);
        const idCliente = parseInt( parametrosURL.get('id') );
        
        const cliente = await obtenerCliente(idCliente)
        mostrarCliente(cliente);
       
        // registra el formulario
        const formulario = document.querySelector('#formulario');
        formulario.addEventListener('submit', validarCliente);
       
    });

    function mostrarCliente(cliente) {
        const { nombre,apellido, empresa, email, telefono, id} = cliente;

        nombreInput.value = nombre;
        apellidoInput.value = apellido;
        empresaInput.value = empresa;
        emailInput.value = email;
        telefonoInput.value = telefono;
        idInput.value = id;
    }


    async function validarCliente(e) {
        e.preventDefault();
        const cliente = {
            nombre: nombreInput.value,
            apellido: apellidoInput.value, 
            email: emailInput.value, 
            telefono: telefonoInput.value,
            empresa: empresaInput.value,
            id: parseInt(idInput.value)
        }
        if( validar(cliente) ) {
            mostrarAlerta('Todos los campos son obligatorios');
            return;
        }

        await editarCliente(cliente);
        window.location.href = 'index.html';
    }


    function validar(obj) {
        return !Object.values(obj).every(element => element !== '') ;
    }
})();