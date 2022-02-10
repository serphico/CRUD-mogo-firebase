
function openUpdate(id) {
    let formUpdate= document.querySelector('#form-update'+id);
    let closeUpdate = document.querySelector('#close-update'+id);

    formUpdate.style.display="flex";
    closeUpdate.style.display="flex";

}

function closeUpdate(id) {
    let formUpdate= document.querySelector('#form-update'+id);
    let closeUpdate = document.querySelector('#close-update'+id);

    formUpdate.style.display='none';
    closeUpdate.style.display='none';
}

function deleteProd(id) {

    console.log(id)

    fetch('http://localhost:8080/productos/'+id, {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
        },
        body: ''
        
 })

 window.location.href = "/productos";
    
}

function addCart(id) {
    console.log(id)
    fetch(`http://localhost:8080/carrito/agregar/${id}`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
        }
        
 })
 .then(res => res.json())
.then(res=> {
      console.log(res);
})
.catch(err => { console.log(err)})
}