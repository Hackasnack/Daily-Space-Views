//Example fetch using pokemonapi.co


fetch('https://api.nasa.gov/planetary/apod?api_key=p53sfOBSNdNinOEMyuf9ub7XPn1moY0OoltnoaGE&date=2025-06-03')
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        
        if(data.media_type === 'image'){
          document.querySelector('img').src = data.hdurl
        // }else if(data.media_type === 'video'){
        }else {
          document.querySelector('iframe').src = data.url
        }
        
        document.querySelector('p').innerText = data.explanation
        document.querySelector('h2').innerText = data.title
      })
      .catch(err => {
          console.log(`error ${err}`)
      });


document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  const url = `https://api.nasa.gov/planetary/apod?api_key=p53sfOBSNdNinOEMyuf9ub7XPn1moY0OoltnoaGE&date=${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        
        if(data.media_type === 'image'){
          document.querySelector('img').src = data.hdurl
        }else if(data.media_type === 'video'){
          document.querySelector('iframe').src = data.url
        }
        
        document.querySelector('p').innerText = data.explanation
        document.querySelector('h2').innerText = data.title
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

//something weird happens on 8/11/25 it says other for media type

// if(data.media_type === 'image'){
//     document.querySelector('img').src = data.hdurl;
//     document.querySelector('img').style.display = "block";
//     document.querySelector('iframe').style.display = "none";
//   }else if(data.media_type === 'video'){
//     document.querySelector('iframe').src = data.url;
//     document.querySelector('iframe').style.display = "block";
//     document.querySelector('img').style.display = "none";
//   }else{
//     document.querySelector('p').innerText += "\n\nMedia type not supported: " + data.media_type;
//     document.querySelector('img').style.display = "none";
//     document.querySelector('iframe').style.display = "none";
//   }