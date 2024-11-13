(function() {
  // Wait until the DOM is fully loaded
  document.addEventListener('DOMContentLoaded', function() {
    
    // Insert custom cursor, font, and galaxy effect styles
    const styles = `#background,.star{position:absolute}.star,.star.color1{background-color:rgba(255,255,255,.8)}body,html{cursor:url("./cursors/carebearstarpurple.ani"),auto}@font-face{font-family:Starborn;src:url('./fonts/Starborn.ttf') format('truetype');font-weight:400;font-style:normal}*{font-family:Starborn,sans-serif}#background{inset:0;background:linear-gradient(to bottom right,#0d0b1f,#2e0055,#0d0b1f);overflow:hidden;z-index:-1}@keyframes sparkle{0%,100%{opacity:0;transform:scale(.5)}50%{opacity:1;transform:scale(1.2)}}@keyframes drift{0%,100%{transform:translate(0,0)}50%{transform:translate(40px,-40px)}}.star{border-radius:50%}.star.color2{background-color:rgba(180,210,255,.8)}.star.color3{background-color:rgba(255,200,200,.8)}`;

    // Create style element and append CSS to head
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);

    // Create and append the background div
    const background = document.createElement('div');
    background.id = 'background';
    document.body.appendChild(background);

    // Generate stars
    const numStars = 300;
    const colors = ['color1', 'color2', 'color3'];

    for (let i = 0; i < numStars; i++) {
      const star = document.createElement('div');
      const size = Math.random() * 3 + 'px';
      
      star.classList.add('star', colors[Math.floor(Math.random() * colors.length)]);
      star.style.width = size;
      star.style.height = size;
      star.style.left = `${Math.random() * 100}vw`;
      star.style.top = `${Math.random() * 100}vh`;
      star.style.animation = `sparkle 2s infinite ease-in-out, drift ${Math.random() * 5 + 3}s linear infinite`;
      background.appendChild(star);
    }
  });
})();
