/* eslint-disable max-len */
/* eslint-disable no-console */
import {
  saveTask, onGetPost, deletePost, getPost, updatePost,
} from '../helpers/lib/Auth';

function home(/* navigateTo */) {
  const section = document.createElement('section');
  const menuAr = document.createElement('article');
  const contenedorIconos = document.createElement('div');
  const divInicio = document.createElement('div');
  const iconInicio = document.createElement('img');
  const labelInicio = document.createElement('label');
  const divCrear = document.createElement('div');
  const iconCrear = document.createElement('img');
  const labelCrear = document.createElement('label');
  const divPerfil = document.createElement('div');
  const iconPerfil = document.createElement('img');
  const labelPerfil = document.createElement('label');
  const divAlerts = document.createElement('div');
  const iconAlerts = document.createElement('img'); /* notificaciones */
  const labelAlerts = document.createElement('label');
  const divHuellasImg = document.createElement('div');
  const huellasImg = document.createElement('img');
  const postAndFooter = document.createElement('div');
  const postAr = document.createElement('article'); /* toda la sección */
  const divLogo = document.createElement('div');
  const logoPost = document.createElement('img');
  const divIconosLogo = document.createElement('div');
  const search = document.createElement('img');
  const comment = document.createElement('img');
  const formPost = document.createElement('form');
  const usuario = document.createElement('input');
  const inputPost = document.createElement('textarea');
  const buttonSend = document.createElement('button');
  const iconSend = document.createElement('img');
  const divPosts = document.createElement('div');
  const divInferior = document.createElement('div');
  const divIconosInferior = document.createElement('div');
  const iconoHomeInf = document.createElement('img');
  const iconoCreateInf = document.createElement('img');
  const iconoPerfilInf = document.createElement('img');
  const perroAr = document.createElement('article');
  const perroImg = document.createElement('img');
  const footerHome = document.createElement('footer');

  const userid = sessionStorage.getItem('user');
  const email = sessionStorage.getItem('email');

  let editStatus = false;
  let editStatus = false;
  let id = '';
  window.addEventListener('load', () => {
    const renderPost = (posts) => { // Se ejecuta una función con argumento Posts que es el array de objetos que representa los datos de los Posts en la colección de Firestore
  window.addEventListener('load', () => {
    const renderPost = (posts) => { // Se ejecuta una función con argumento Posts que es el array de objetos que representa los datos de los Posts en la colección de Firestore
      divPosts.innerHTML = '';
      posts.forEach((post) => { // recorro el array de objetos y en cada uno de los Post creo un nuevo elemento P para luego pintarlo en el HTML
      posts.forEach((post) => { // recorro el array de objetos y en cada uno de los Post creo un nuevo elemento P para luego pintarlo en el HTML
        console.log(post.id);

        const deleteButton = (user === post.usuarioPost) ? `<button class = 'btn-delete' data-id= '${post.id}'>Borrar Post</button>` : '';
        const editarButton = (user === post.usuarioPost) ? `<button class = 'btn-edit' data-id = '${post.id}'> Edit</button>` : '';

        divPosts.innerHTML += `
      <div>
      <h3>${post.displayName}</h3>    
      <div class= "comentarios">${post.description}</div>

      <section class= "botones-post">
      <div class= "div-likes">
      <p class= "conteo-likes">${post.likeCount}</p>
      ${likeButton}
      </div>
      <div class= "div-edit-delete">
      ${deleteButton}
      ${editarButton}
      </div>
      </section>
      </div>
      `;
      });
      /*  <button class = 'btn-delete' data-id= '${post.id}'>Borrar Post</button> */


      const btnDeletePost = document.querySelectorAll('.btn-delete');
      btnDeletePost.forEach((btn) => {
        btn.addEventListener('click', (e) => {
      btnDeletePost.forEach((btn) => {
        btn.addEventListener('click', (e) => {
          deletePost(e.target.dataset.id);
        });
      });
        });
      });

      const btnEdit = document.querySelectorAll('.btn-edit');
      btnEdit.forEach((btn) => {
        btn.addEventListener('click', async (e) => {
      const btnEdit = document.querySelectorAll('.btn-edit');
      btnEdit.forEach((btn) => {
        btn.addEventListener('click', async (e) => {
          const doc = await getPost(e.target.dataset.id);
          const postEdit = doc.data();
          formPost['task-description'].value = postEdit.description;

          formPost['task-description'].value = postEdit.description;

          editStatus = true;
          id = doc.id;
          //  formPost['btn-savePost'].innerText = 'Actualizar'
        });
      });
    };
    onGetPost(renderPost);
  });

  iconInicio.setAttribute('src', '../assets/iconHome.png');
  labelInicio.classList.add('text-label');
  labelInicio.textContent = 'Inicio';
  divInicio.classList.add('menu-iconos');
  divInicio.append(iconInicio, labelInicio);

  iconCrear.setAttribute('src', '../assets/iconCrear.png');
  labelCrear.classList.add('text-label');
  labelCrear.textContent = 'Crear';
  divCrear.classList.add('menu-iconos');
  divCrear.append(iconCrear, labelCrear);

  iconPerfil.setAttribute('src', '../assets/iconPerfil.png');
  labelPerfil.classList.add('text-label');
  labelPerfil.textContent = 'Perfil';
  divPerfil.classList.add('menu-iconos');
  divPerfil.append(iconPerfil, labelPerfil);

  iconAlerts.setAttribute('src', '../assets/iconHuella.png');
  labelAlerts.classList.add('text-label');
  labelAlerts.textContent = 'Notificaciones';
  divAlerts.classList.add('menu-iconos');
  divAlerts.append(iconAlerts, labelAlerts);
  contenedorIconos.classList.add('contenedor-icons');
  contenedorIconos.append(divInicio, divCrear, divPerfil, divAlerts);

  huellasImg.setAttribute('src', '../assets/huellasDiv.png');
  divHuellasImg.classList.add('div-huellas');
  divHuellasImg.append(huellasImg);
  menuAr.classList.add('menu');
  menuAr.append(contenedorIconos, divHuellasImg);

  logoPost.setAttribute('src', '../assets/logo-barra.png');
  search.classList.add('search-lupa');
  search.setAttribute('src', '../assets/iconSearch.png');
  comment.classList.add('comment-img');
  comment.setAttribute('src', '../assets/iconComment.png');
  divIconosLogo.classList.add('div-icons-logo');
  divIconosLogo.append(search, comment);
  divLogo.classList.add('div-logo');
  divLogo.append(logoPost, divIconosLogo); /* TODO */

  usuario.classList.add('usuario-post');
  usuario.setAttribute('id', 'task-user'); /* usuario */
  usuario.placeholder = 'Usuario';

  inputPost.classList.add('new-post');
  inputPost.setAttribute('id', 'task-description'); /* editar-post */
  inputPost.placeholder = '¿Qué deseas compartir hoy?';

  iconSend.classList.add('icon-send');
  iconSend.setAttribute('id', 'btn-task'); /* send-post */
  iconSend.setAttribute('src', '../assets/iconSend.png');
  buttonSend.classList.add('button-send');
  buttonSend.append(iconSend); /* todo */

  formPost.classList.add('form-post');
  formPost.setAttribute('id', 'task-form');
  formPost.append(usuario, inputPost, buttonSend); /* todo */

  divPosts.classList.add('container-post'); /* comentarios pasados */
  postAr.classList.add('post-container');
  iconoHomeInf.classList.add('icono-home-inf');
  iconoHomeInf.setAttribute('src', '../assets/iconHome.png');
  iconoCreateInf.classList.add('icono-create-inf');
  iconoCreateInf.setAttribute('src', '../assets/iconCrear.png');
  iconoPerfilInf.classList.add('icono-perfil-inf');
  iconoPerfilInf.setAttribute('src', '../assets/iconPerfil.png');
  divIconosInferior.classList.add('iconos-inferior-img');
  divIconosInferior.append(iconoHomeInf, iconoCreateInf, iconoPerfilInf);
  divInferior.classList.add('inferior');
  divInferior.append(divIconosInferior);
  postAr.append(divLogo, formPost, divPosts, divInferior); /* TODO */

  postAndFooter.classList.add('postAndFooter');
  postAndFooter.append(postAr, footerHome); /* todo */

  footerHome.classList.add('footer-home');
  footerHome.textContent = '@WebDulValLeo';

  perroImg.classList.add('perro-img');
  perroImg.setAttribute('src', '../assets/Perrito.png');
  perroAr.append(perroImg); /* todo */

  section.classList.add('section-home');
  section.append(menuAr, postAndFooter, perroAr);

  formPost.addEventListener('submit', (e) => {
  formPost.addEventListener('submit', (e) => {
    e.preventDefault();
    const description = formPost['task-description'];
    if (editStatus) {
      updatePost(id, { description: description.value }).then(() => {
    if (editStatus) {
      updatePost(id, { description: description.value }).then(() => {
        editStatus = false;
      }).catch((error) => {
        console.log(error);
      });
    } else {
      saveTask(description.value, user).then(() => {
        formPost.reset();
      }).catch((error) => {
        console.log(error);
      });
      }).catch((error) => {
        console.log(error);
      });
    }

    // const description = formPost['task-description'];
    // if(editStatus) {
    //   const postPromise = saveTask(description.value, user)
    //   postPromise.then(() => {
    //  updatePost(id, {description: description.value});
    //   editStatus = false
    //   }).catch((error)=>{
    //   console.log(error);
    //   })
    //   } else {
    //     const postPromise = saveTask(description.value, user)
    //     postPromise.then(()=> {
    //       saveTask(description.value, user)
    //     }).catch((error)=>{
    //       console.log(error);
    //     })
    // }
    formPost.reset();
  });

  return section;
}

export default home;
