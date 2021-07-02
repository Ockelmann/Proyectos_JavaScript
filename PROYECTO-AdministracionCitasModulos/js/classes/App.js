
import { datosCita, nuevaCita } from '../funciones.js';
import { mascotaInput,tipoInput,edadInput, propietarioInput, telefonoInput, fechaInput, horaInput, sintomasInput, formulario } from '../selectores.js';

class App {
    constructor() {
        this.initApp();
    }

    initApp() {
        // Eventos
        eventListeners();
        function eventListeners() {
            mascotaInput.addEventListener('change', datosCita);
            tipoInput.addEventListener('change', datosCita);
            edadInput.addEventListener('change', datosCita);
            propietarioInput.addEventListener('change', datosCita);
            telefonoInput.addEventListener('change', datosCita);
            fechaInput.addEventListener('change', datosCita);
            horaInput.addEventListener('change', datosCita);
            sintomasInput.addEventListener('change', datosCita);

            // Formulario nuevas citas
            formulario.addEventListener('submit', nuevaCita);
        }

    }
}

export default App;