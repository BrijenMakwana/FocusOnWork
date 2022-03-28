// HTML content

const generateHTML = (pageName) => {
  return `

  <h1>Your <b>Work</b> is more important than <b>${pageName}</b></h1>
  <h3>So stop wasting your time on this and focus on your work.</h3>
  <i>
    Made with ❤️ by Brijen Makwana
  </i>
`;
};

//css styling for the HTML

const generateSTYLES = () => {
  return ` 
    <style>
        body {
            font-family: 'Helvetica Neue', Arial, sans-serif;
            background-image: linear-gradient(to right, #ff1b6b , #45caff) !important;
            height: 100% !important;
        }

        h1{
            color: #000;
            font-size: 3vw;
            font-style: italic;
            text-align: center;
        }

        b{
            color: #000;
            font-size: 4vw;
            animation-name: text;
            animation-duration: 1s;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
            animation-direction: alternate;
            
        }

        @keyframes text {
          0%   {color: #000;}
          50%  {color: #fff;}
          100% {color: #000;}
        }

        h3{
            color: #000;
            font-size: 1.5vw;
            font-style: italic; 
            text-align:  center;
        }


        p{
            position: absolute; 
            bottom: 100px;
            right: 20px;
            color: #fff;
            font-size: 1.4vw;
            width: 20%;  
        }

        i{
            position: absolute; 
            bottom: 30px;
            right: 20px;
            font-size: 1.2vw;
            font-style: italic;
            color: #000
        }
  
    </style>
    `;
};

// fetch new advice every time website loads

function getAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((res) => {
      const p = document.createElement("p");
      p.innerText = res.slip.advice;
      document.body.appendChild(p);
    });
}

// prevent this sites from opening

switch (window.location.hostname) {
  case "m.facebook.com":
    document.head.innerHTML = generateSTYLES();
    document.body.innerHTML = generateHTML("FACEBOOK");
    getAdvice();
    break;
  case "www.facebook.com":
    document.head.innerHTML = generateSTYLES();
    document.body.innerHTML = generateHTML("FACEBOOK");
    getAdvice();
    break;
  case "www.netflix.com":
    document.head.innerHTML = generateSTYLES();
    document.body.innerHTML = generateHTML("NETFLIX");
    getAdvice();
    break;
  case "www.hotstar.com":
    document.head.innerHTML = generateSTYLES();
    document.body.innerHTML = generateHTML("HOTSTAR");
    getAdvice();
    break;
  case "www.instagram.com":
    document.head.innerHTML = generateSTYLES();
    document.body.innerHTML = generateHTML("INSTAGRAM");
    getAdvice();
    break;
  case "www.snapchat.com":
    document.head.innerHTML = generateSTYLES();
    document.body.innerHTML = generateHTML("SNAPCHAT");
    getAdvice();
    break;
  case "www.sonyliv.com":
    document.head.innerHTML = generateSTYLES();
    document.body.innerHTML = generateHTML("SONYLIVE");
    getAdvice();
    break;
  case "www.zee5.com":
    document.head.innerHTML = generateSTYLES();
    document.body.innerHTML = generateHTML("ZEE5");
    getAdvice();
    break;
  case "www.altbalaji.com":
    document.head.innerHTML = generateSTYLES();
    document.body.innerHTML = generateHTML("ALTBALAJI");
    getAdvice();
    break;
  case "www.mxplayer.in":
    document.head.innerHTML = generateSTYLES();
    document.body.innerHTML = generateHTML("MXPLAYER");
    getAdvice();
    break;
}
