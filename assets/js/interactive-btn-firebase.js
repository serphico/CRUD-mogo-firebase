
function openUpdate(id) {
    console.log(id);
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

    fetch('http://localhost:8080/productosfb/'+id, {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
        },
        body: ''
        
 })

 setTimeout(() => {
    return location.reload(); 
}, 500);
}

function addCart(id) {

    fetch(`http://localhost:8080/carrito/agregarfb/`+id, {
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

/*setTimeout(() => {
    return window.location.href = "/productos";
}, 500);*/


}

function deleteProdCart(id) {
    console.log(id)
    fetch(`http://localhost:8080/carrito/carrito-fb/`+id, {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
        },
        body: ''

        
    })
    .then(res => res.json())
    .then(res=> {
      console.log(res);
    })
    .catch(err => { console.log(err)})

    /*setTimeout(() => {
        return location.reload(); 
    }, 500);*/
}