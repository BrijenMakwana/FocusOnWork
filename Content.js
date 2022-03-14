// HTML content

const generateHTML = (pageName) => {
  return `<div>

  <h1>Your <b>Work</b> is more important than <b>${pageName}</b></h1>
  <h3>So stop wasting your time on this and focus on your work.</h3>
  <i id="advice">Loading...</i><br/>
  <p>
    Made with ❤️ by Brijen Makwana
  </p>
</div>`;
};

//css styling for the HTML

const generateSTYLES = () => {
  return ` 
    <style>
        html.default{
            background-color: #fff;
        }
        
        body {
            font-family: 'Helvetica Neue', Arial, sans-serif;
            background-image: url('https://images.unsplash.com/photo-1472289065668-ce650ac443d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80');
            background-repeat: no-repeat;
            background-attachment: fixed; 
            background-size: cover;
            background-color: #fff;
        }

        h1{
            color: #E63E6D;
            font-size: 3vw;
            font-style: italic;
        }

        b{
            color: #000;
            font-size: 4vw;
            animation-name: example;
            animation-duration: 2s;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
            animation-direction: alternate;
            
        }

        @keyframes example {
          0%   {color: #000;}
          50%  {color: #14FFEC;}
          100% {color: #000;}
        }

        h3{
            color: #000;
            font-size: 1.5vw;
            font-style: italic;
            width: 20%;
            
        }


        p{
            position: absolute; 
            bottom: 5px;
            right: 20px;
            font-size: 1.2vw;
            font-style: italic;
            color: #000
        }

        i{
            position: absolute; 
            bottom: 100px;
            right: 20px;
            color: #02383C;
            font-size: 1.4vw;
            width: 20%;
        }
  
    </style>`;
};

// fetch new advice every time website loads

fetch("https://api.adviceslip.com/advice")
  .then((res) => res.json())
  .then((res) => {
    console.log(res.slip.advice);
    const h = document.getElementById("advice");
    h.innerText = res.slip.advice;
  });

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
}
