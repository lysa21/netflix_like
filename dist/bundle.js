!function(e){var t={};function n(a){if(t[a])return t[a].exports;var o=t[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(a,o,function(t){return e[t]}.bind(null,o));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const a="3a0449720017ece47d0711bc3f199995";async function o(e){const t=`https://api.themoviedb.org/3/movie/${e}?api_key=${a}`;let n=await fetch(t);return await n.json()}async function i(e){const t=`https://api.themoviedb.org/3/tv/${e}?api_key=${a}`;let n=await fetch(t);return await n.json()}async function l(e){const t=`https://api.themoviedb.org/3/discover/movie?api_key=${a}&with_genres=${e}`;let n=await fetch(t);return await n.json()}function r(e){return`\n    <div id="modale">\n        <div role="document" class="c-dialog__box">\n            <h1 class="modaleTitle">${e.original_name||e.original_title}</h1>\n            <div id="modaleContainer">\n                <h2 class="modaleVote">Rated : ${10*e.vote_average}%</h2>\n                <h2 class="modaleDate">Release Date : ${e.release_date||e.first_air_date}</h2>\n            </div>\n            <p class="modaleDescription">${e.overview}</p>\n            <button type="button" class="modaleButton">&#10005;</button>\n            <button class="modaleButtonPlay">&#8227; PLAY</button>\n            <button class="modaleButtonMyList">&#43; MY LIST</button>\n        </div>    \n    </div>`}!async function(){document.querySelector(".navigation__container--left__input").addEventListener("input",async e=>{const t=e.target.value.toLowerCase();let n=(await async function(e){const t=`https://api.themoviedb.org/3/search/movie?api_key=${a}&language=en-US&page=1&include_adult=false&query=${e}`;let n=await fetch(t);return await n.json()}(t)).results,o=document.querySelector(".container"),i=document.querySelector(".search-container");if(i.innerHTML="",t.length>=1){for(let e=0;e<n.length;e++){let t=document.createElement("div");t.className="movies__container--movie-search";let a=document.createElement("img");a.className="movies__container--movie-image",a.src="https://image.tmdb.org/t/p/original/"+n[e].poster_path,i.appendChild(t),t.appendChild(a),null===n[e].poster_path&&(a.style.display="none")}o.style.display="none"}else o.style.display=""})}(),(async()=>{let e=await o(181812);var t;document.getElementById("header").innerHTML=`\n          <div class="header__container">\n            <h1 class="header__container-heading">${(t=e).original_title}</h1>\n            <button class="header__container-btnPlay">\n              Play\n            </button>\n    \n            <button class="header__container-btnFavouriteList">\n              Favourite List\n            </button>\n            <p class="header__container-overview">${t.overview}</p>\n          </div>\n        `,document.getElementById("header").style.backgroundImage=`url(https://image.tmdb.org/t/p/original/${e.backdrop_path})`})(),(async()=>{let e=await async function(){const e=`https://api.themoviedb.org/3/discover/tv?api_key=${a}&with_networks=213`;let t=await fetch(e);return await t.json()}(),t=document.getElementById("movies-container-1"),n=e.results;for(let e=0;e<n.length;e++){let a=document.createElement("div");a.className="movies__container--movie__netflix";let o=document.createElement("img");o.className="movies__container--movie-image",o.src="https://image.tmdb.org/t/p/original/"+n[e].poster_path;let l=n[e].id;t.appendChild(a),a.appendChild(o),null===n[e].poster_path&&(o.style.display="none");let r=await i(l);o.addEventListener("click",e=>{e.preventDefault();let t=document.createElement("div");var n;t.id="modaleNetflixOriginals",document.body.appendChild(t),t.innerHTML=`\n    <div id="modale">\n        <div role="document" class="c-dialog__box">\n            <h1 class="modaleTitle">${(n=r).original_name||n.original_title}</h1>\n            <div id="modaleContainer">\n                <h2 class="modaleVote">Rated : ${10*n.vote_average}%</h2>\n                <h2 class="modaleDate">Release Date : ${n.release_date||n.first_air_date}</h2>\n                <h2 class="modaleEpisode">Nombre d'épisodes : ${n.number_of_episodes}   Nombre de saisons : ${n.number_of_seasons}</h2>\n            </div>\n            <p class="modaleDescription">${n.overview}</p>\n            <button type="button" class="modaleButton">&#10005;</button>\n            <button class="modaleButtonPlay">&#8227; PLAY</button>\n            <button class="modaleButtonMyList">&#43; MY LIST</button>\n        </div>    \n    </div>`,t.style.backgroundImage=`url(https://image.tmdb.org/t/p/original/${r.backdrop_path})`,t.style.backgroundSize="cover",t.querySelector(".modaleButton").addEventListener("click",e=>{e.preventDefault();let n=t.querySelector("#modale");t.removeChild(n),t.remove("backgroundImage")})})}})(),(async()=>{let e=await async function(){let e=await fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=3a0449720017ece47d0711bc3f199995");return await e.json()}(),t=document.getElementById("movies-container-2"),n=e.results;for(let e=0;e<n.length;e++){let a=document.createElement("div");a.className="movies__container--movie";let i=document.createElement("img");i.className="movies__container--movie-image",i.src="https://image.tmdb.org/t/p/original/"+n[e].backdrop_path;let l=n[e].id;t.appendChild(a),a.appendChild(i),null===n[e].backdrop_path&&(i.style.display="none");let d=await o(l);i.addEventListener("click",e=>{e.preventDefault();let t=document.createElement("div");t.id="modaleTrendingNow",document.body.appendChild(t),t.innerHTML=r(d),t.style.backgroundImage=`url(https://image.tmdb.org/t/p/original/${d.backdrop_path})`,t.style.backgroundSize="cover",t.querySelector(".modaleButton").addEventListener("click",e=>{e.preventDefault();let n=t.querySelector("#modale");t.removeChild(n),t.remove("backgroundImage")})})}})(),(async()=>{let e=await async function(){const e=`https://api.themoviedb.org/3/movie/top_rated?api_key=${a}&language=en-US&page=1`;let t=await fetch(e);return await t.json()}(),t=document.getElementById("movies-container-3"),n=e.results;for(let e=0;e<n.length;e++){let a=document.createElement("div");a.className="movies__container--movie";let i=document.createElement("img");i.className="movies__container--movie-image",i.src="https://image.tmdb.org/t/p/original/"+n[e].backdrop_path;let l=n[e].id;t.appendChild(a),a.appendChild(i),null===n[e].backdrop_path&&(i.style.display="none");let d=await o(l);i.addEventListener("click",e=>{e.preventDefault();let t=document.createElement("div");t.id="modaleTopRated",document.body.appendChild(t),t.innerHTML=r(d),t.style.backgroundImage=`url(https://image.tmdb.org/t/p/original/${d.backdrop_path})`,t.style.backgroundSize="cover",t.querySelector(".modaleButton").addEventListener("click",e=>{e.preventDefault();let n=t.querySelector("#modale");t.removeChild(n),t.remove("backgroundImage")})})}})(),(async()=>{let e=await l(28),t=document.getElementById("movies-container-4"),n=e.results;for(let e=0;e<n.length;e++){let a=document.createElement("div");a.className="movies__container--movie";let i=document.createElement("img");i.className="movies__container--movie-image",i.src="https://image.tmdb.org/t/p/original/"+n[e].backdrop_path;let l=n[e].id;t.appendChild(a),a.appendChild(i),null===n[e].backdrop_path&&(i.style.display="none");let d=await o(l);i.addEventListener("click",e=>{e.preventDefault();let t=document.createElement("div");t.id="modaleActionMovies",document.body.appendChild(t),t.innerHTML=r(d),t.style.backgroundImage=`url(https://image.tmdb.org/t/p/original/${d.backdrop_path})`,t.style.backgroundSize="cover",t.querySelector(".modaleButton").addEventListener("click",e=>{e.preventDefault();let n=t.querySelector("#modale");t.removeChild(n),t.remove("backgroundImage")})})}})(),(async()=>{let e=await l(35),t=document.getElementById("movies-container-5"),n=e.results;for(let e=0;e<n.length;e++){let a=document.createElement("div");a.className="movies__container--movie";let i=document.createElement("img");i.className="movies__container--movie-image",i.src="https://image.tmdb.org/t/p/original/"+n[e].backdrop_path;let l=n[e].id;t.appendChild(a),a.appendChild(i),null===n[e].backdrop_path&&(i.style.display="none");let d=await o(l);i.addEventListener("click",e=>{e.preventDefault();let t=document.createElement("div");t.id="modaleComedies",document.body.appendChild(t),t.innerHTML=r(d),t.style.backgroundImage=`url(https://image.tmdb.org/t/p/original/${d.backdrop_path})`,t.style.backgroundSize="cover",t.querySelector(".modaleButton").addEventListener("click",e=>{e.preventDefault();let n=t.querySelector("#modale");t.removeChild(n),t.remove("backgroundImage")})})}})(),(async()=>{let e=await l(99),t=document.getElementById("movies-container-6"),n=e.results;for(let e=0;e<n.length;e++){let a=document.createElement("div");a.className="movies__container--movie";let i=document.createElement("img");i.className="movies__container--movie-image",i.src="https://image.tmdb.org/t/p/original/"+n[e].backdrop_path;let l=n[e].id;t.appendChild(a),a.appendChild(i),null===n[e].backdrop_path&&(i.style.display="none");let d=await o(l);i.addEventListener("click",e=>{e.preventDefault();let t=document.createElement("div");t.id="modaleDocumentaries",document.body.appendChild(t),t.innerHTML=r(d),t.style.backgroundImage=`url(https://image.tmdb.org/t/p/original/${d.backdrop_path})`,t.style.backgroundSize="cover",t.querySelector(".modaleButton").addEventListener("click",e=>{e.preventDefault();let n=t.querySelector("#modale");t.removeChild(n),t.remove("backgroundImage")})})}})()}]);