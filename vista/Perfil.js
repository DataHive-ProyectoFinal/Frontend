document.addEventListener("DOMContentLoaded", () => {
  fetch("/prueba proyecto/api_usuarios/VerPerfil.php")
    .then(resp => {
      if (!resp.ok) throw new Error("No autorizado o error de servidor");
      return resp.json();
    })
    .then(data => {
      if (data.error) {
        document.getElementById("nombre").textContent = "Usuario no autenticado";
      } else {
        document.getElementById("nombre").textContent = data.nombre_completo;
        document.getElementById("correo").textContent = data.gmail;
      }
    })
    .catch(err => {
      document.getElementById("nombre").textContent = "Error al cargar datos";
      console.error(err);
    });
});
