const comentarios = [
    {
      nombre: 'Usuario 1',
      comentario: 'Este es el comentario número 1.',
    },
    {
      nombre: 'Usuario 2',
      comentario: 'Me encanta este sitio web.',
    },
    {
      nombre: 'Usuario 3',
      comentario: '¡Los contenidos son geniales!',
    },
    {
      nombre: 'Usuario 4',
      comentario: 'No puedo esperar para ver más.',
    },
    {
      nombre: 'Usuario 5',
      comentario: '¡Excelente trabajo!',
    },
    {
      nombre: 'Usuario 6',
      comentario: '¿Cuándo estará disponible la próxima actualización?',
    },
    {
      nombre: 'Usuario 7',
      comentario: 'Los colores son muy atractivos.',
    },
    {
      nombre: 'Usuario 8',
      comentario: 'Gracias por compartir esto con nosotros.',
    },
    {
      nombre: 'Usuario 9',
      comentario: '¿Hay una versión móvil de este sitio?',
    },
    {
      nombre: 'Usuario 10',
      comentario: 'Estoy emocionado por lo que viene.',
    },
  ];
  function mostrarComentarios() {
    const contenedorComentarios = document.getElementById('comentarios'); 
    
    comentarios.forEach((comentario) => {
      const divComentario = document.createElement('div');
      const h1Nombre = document.createElement('h1');
      const h2Comentario = document.createElement('h2');

      h1Nombre.textContent = comentario.nombre;
      h2Comentario.textContent = comentario.comentario;

      divComentario.appendChild(h1Nombre);
      divComentario.appendChild(h2Comentario);
      contenedorComentarios.appendChild(divComentario);
    });
  }

  mostrarComentarios();
