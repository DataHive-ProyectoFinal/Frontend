// Cargar datos del usuario desde PHP
fetch('logicaEditar.php')
    .then(response => response.json())
    .then(usuario => {
        
        document.getElementById('nombre_completo').value = usuario.nombre_completo;
        document.getElementById('gmail').value = usuario.gmail;
        document.getElementById('telefono_celular').value = usuario.telefono_celular;
        document.getElementById('telefono_fijo').value = usuario.telefono_fijo;
        document.getElementById('direccion').value = usuario.direccion;
        document.getElementById('cantidad_familia').value = usuario.cantidad_familia;
        document.getElementById('discapacidad_cargo').value = usuario.discapacidad_cargo;

        
        document.getElementById('generoSelect').value = usuario.genero;
        document.getElementById('generoInput').value = usuario.genero;

        document.getElementById('ocupacionSelect').value = usuario.ocupacion;
        document.getElementById('ocupacionInput').value = usuario.ocupacion;

        document.getElementById('ingresoSelect').value = usuario.ingreso;
        document.getElementById('ingresoInput').value = usuario.ingreso;
    })
    .catch(error => console.error('Error cargando los datos:', error));


document.getElementById('generoSelect').addEventListener('change', function() {
    document.getElementById('generoInput').value = this.value;
});

document.getElementById('ocupacionSelect').addEventListener('change', function() {
    document.getElementById('ocupacionInput').value = this.value;
});

document.getElementById('ingresoSelect').addEventListener('change', function() {
    document.getElementById('ingresoInput').value = this.value;
});

