// HTML content

const generateHTML = (pageName) => {
  return `

  <h1>Your <b>Work</b> is more important than <b>${pageName}</b></h1>
  <h3>So stop wasting your time on this and focus on your work.</h3>
  <p id="advice">Loading...</p><br/>
  <i>
    Made with ❤️ by Brijen Makwana
  </i>
`;
};

//css styling for the HTML

const generateSTYLES = () => {
  return ` 
    <style>
        html.default{
            background-color: #CFE1B9;        }
        
        body {
            font-family: 'Helvetica Neue', Arial, sans-serif;
            background-color: #CFE1B9;
        }

        h1{
            color: #1B4332;
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
          0%   {color: #e63946;}
          50%  {color: #000;}
          100% {color: #e63946;}
        }

        h3{
            color: #1B4332;
            font-size: 1.5vw;
            font-style: italic; 
            text-align:  center;
        }


        p{
          position: absolute; 
            bottom: 100px;
            right: 20px;
            color: #02383C;
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

// prevent this sites from opening

switch (window.location.hostname) {
  case "m.facebook.com":
    document.head.innerHTML = generateSTYLES();
    document.body.innerHTML = generateHTML("FACEBOOK");
    break;
  case "www.facebook.com":
    document.head.innerHTML = generateSTYLES();
    document.body.innerHTML = generateHTML("FACEBOOK");
    break;
  case "www.netflix.com":
    document.head.innerHTML = generateSTYLES();
    document.body.innerHTML = generateHTML("NETFLIX");
    break;
  case "www.hotstar.com":
    document.head.innerHTML = generateSTYLES();
    document.body.innerHTML = generateHTML("HOTSTAR");
    break;
  case "www.instagram.com":
    document.head.innerHTML = generateSTYLES();
    document.body.innerHTML = generateHTML("INSTAGRAM");
    break;
  case "www.snapchat.com":
    document.head.innerHTML = generateSTYLES();
    document.body.innerHTML = generateHTML("SNAPCHAT");
    break;
  case "www.sonyliv.com":
    document.head.innerHTML = generateSTYLES();
    document.body.innerHTML = generateHTML("SONYLIVE");
    break;
  case "www.zee5.com":
    document.head.innerHTML = generateSTYLES();
    document.body.innerHTML = generateHTML("ZEE5");
    break;
  case "www.altbalaji.com":
    document.head.innerHTML = generateSTYLES();
    document.body.innerHTML = generateHTML("ALTBALAJI");
    break;
  case "www.mxplayer.in":
    document.head.innerHTML = generateSTYLES();
    document.body.innerHTML = generateHTML("MXPLAYER");
    break;
}

// fetch new advice every time website loads

fetch("https://api.adviceslip.com/advice")
  .then((res) => res.json())
  .then((res) => {
    const p = document.getElementById("advice");
    p.innerText = res.slip.advice;
  });
