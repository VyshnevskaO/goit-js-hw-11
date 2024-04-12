import{S as m,i as f}from"./assets/vendor-865f83d1.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function p(s){return s.map(({webformatURL:o,largeImageURL:r,tags:i,likes:e,views:t,comments:a,downloads:u})=>`<li class="gallery-item">
	<a class="gallery-link" href="${r}">
		<img 
			class="gallery-image" 
			src="${o}"
			alt="${i}"
			width="360px"
            height="152px" />
	</a>
    <ul class="image-text"> 
    <li class="value">Likes<p class="amount">${e}</p></li>
    <li class="value">Views<p class="amount">${t}</p></li>
    <li class="value">Comments<p class="amount">${a}</p></li>
    <li class="value">Downloads<p class="amount">${u}</p></li>
    </ul>
   </li>`).join("")}const d="43347579-3d95162bcb8db799a52fc5fc5";function g(s){const o=new URLSearchParams({key:d,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:99});return fetch(`https://pixabay.com/api/?${o}`).then(r=>{if(!r.ok)throw new Error(r.statusText);return r.json()})}const h=new m(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250}),c=document.querySelector("form"),l=document.querySelector(".gallery"),n=document.querySelector("#animation");c.addEventListener("submit",y);function y(s){s.preventDefault(),n.classList.toggle("loader"),l.innerHTML="";const o=s.target.elements.text.value.trim();o&&g(o).then(r=>{r.total===0?f.error({message:"Sorry, there are no images matching your search query. Please try again!"}):(l.innerHTML=p(r.hits),h.refresh()),n.classList.toggle("loader"),c.reset()}).catch(r=>console.log(r))}
//# sourceMappingURL=commonHelpers.js.map
