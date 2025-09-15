 const form = document.getElementById('form-registro');

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const datos = Object.fromEntries(new FormData(form));

      fetch('http://localhost:8080/Proyecto-DataHive-primeraEntrega/registro.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    })
        .then(res => res.json())
        .then(data => {
          alert(data.mensaje || 'Registro completado');
        })
        .catch(err => {
          alert('Error al registrar usuario');
          console.error(err);
        });
    });