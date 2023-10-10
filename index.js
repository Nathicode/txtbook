let subject = [
    {name: 'economics', Type: 'New Curriculum', Link: '', png: 'images (4).png'},
    {name: 'geography', Type: 'New Curriculum', Link: '', png: 'images (29).jpeg'},
    {name: 'maths', Type: 'New Curriculum', Link: '', png: 'images (30).jpeg'},
    {name: 'history', Type: 'New Curriculum', Link: '', png: 'images (31).jpeg'},
];
for(i = 0; i < subject.length; i++){
    let cards = `<div class="card"><img src='${subject[i].png}'<p>Title</p> <p id="title">${subject[i].name}</p> <p>Type</p> <p id="carriculum">${subject[i].Type}</p><p>Download Link</p>  <a href="${subject[i].Link}" id="link">www.google.com</a></div>`;
    document.querySelector('.cards').innerHTML += cards;
}
function search(){
  //  let cards = `<div class="card"><img src='${subject[i].png}'<p>Title</p> <p id="title">${subject[i].name}</p> <p>Type</p> <p id="carriculum">${subject[i].Type}</p><p>Download Link</p>  <a href="${subject[i].Link}" id="link">www.google.com</a></div>`;
    let input = document.querySelector('input').value;
   
    let div = document.querySelectorAll('.card');
    console.log(div);
    for(i = 0; i < div.length; i++){
        let title = document.querySelectorAll('#title');
        if (!div[i].textContent.toLowerCase().includes(input.toLowerCase())) {
            div[i].style.display = 'none';
        }
        else{
            div[i].style.display = 'flex';
        }
      console.log(div[i].innerHTML);
    }
    
}
let link
