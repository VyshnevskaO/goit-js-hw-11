import 'normalize.css';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { createMarkup } from './js/render-functions';
import { fetchRequest } from './js/pixabay-api';





const form = document.querySelector("form");
const gallery = document.querySelector(".gallery");
const loader = document.querySelector("#animation");


form.addEventListener("submit", handleSubmit)




function handleSubmit(event) {
    
    event.preventDefault();
    loader.classList.toggle("loader");
    
    const request = event.target.elements.text.value.trim();
    if (!request) {
        return
    }

     fetchRequest(request)
        .then((response) => {
             if (!response.ok) {
            throw new Error (response.statusText)
        }
            return response.json();
        })
        .then(post => { 
                
             if (post.total === 0) {
                 gallery.innerHTML ="";
                iziToast.error({ message: 'Sorry, there are no images matching your search query. Please try again!'});
                
            } else {
                
                gallery.innerHTML = createMarkup(post.hits);
              
                new SimpleLightbox('.gallery a', {
                captionsData: "alt",
                captionPosition: "bottom",
                captionDelay: 250,
                });
                 
             }
            
            // SimpleLightbox.refresh();
            loader.classList.toggle("loader");
            form.reset();
           
        })
        .catch(error => console.log(error));
}







