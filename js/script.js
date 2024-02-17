// Get the SVG element
const svg = document.getElementById("svg");
const giftBox = document.getElementById("giftbox");
const cap = document.getElementById("cap");
const circles = document.getElementById("circles");
circles.style.display = "none";
const triangle = document.getElementById("triangle");
const stars_light = document.getElementById("stars_light");
stars_light.style.display = "none";
const light = document.getElementById("light");
light.style.display = "none";
const glowLight = document.getElementById("glowLight");
glowLight.style.display = "none";
const glowlight = document.getElementById("glowlight");
const btnStart = document.getElementById("btnStart");
const card_gift = document.getElementById("card_gift");

// Create an animation
const AnimateFunc = () => {
  svg.style.display = "block";
  giftBox.style.display = "block";
  btnStart.style.display = "none";
  cap.style.display = "block";
  glowlight.style.display = "none";

  // Create a shaking animation
  const shakeAnimation = giftBox.animate(
    [
      { transform: "rotate(0deg)" },
      { transform: "rotate(-5deg)" },
      { transform: "rotate(5deg)" },
      { transform: "rotate(-5deg)" },
      { transform: "rotate(5deg)" },
      { transform: "rotate(0deg)" },
    ],
    {
      duration: 1000,
      iterations: 1,
    }
  );
  giftBox.style.transformOrigin = "center center";

  shakeAnimation.onfinish = () => {
    const giftBoxAnimation = giftBox.animate(
      [
        { transform: "translate(0%, 0%) scale(1)" },
        { transform: "translate(0%, 0%) scale(.7)" },
        { transform: "translate(0%, 0%) scale(0.5)" },
        { transform: "translate(0%, 0%) scale(1) " },
      ],
      {
        duration: 1000,
        iterations: 1,
        easing: "ease-in-out",
        composite: "add",
      }
    );
    giftBox.style.transformOrigin = "center center";

    // Start both animations simultaneously
    Promise.race([giftBoxAnimation.finished]).then(
      () => {
        // Continue with the rest of your animations
        // Display the background before starting the cap animation
        circles.style.display = "block";
        triangle.style.display = "block";
        stars_light.style.display = "block";
        glowlight.style.display = "block";  
        light.style.display = "block";
        
        const glowlightAnimation = glowlight.animate(
          [
            { transform: "translate(0%, 0%) scale(0.7)" },
            { transform: "translate(0%, 0%) scale(1)" },
          ],
          {
            duration: 700,
            iterations: 1,
            easing: "ease-in-out",
          }
        );
        glowlight.style.transformOrigin = "center center";
        
        const capAnimation = cap.animate(
          [
            { transform: "translate(0%, 0%) scale(1) rotate(0deg)" },
            { transform: "translate(40%, -100%) scaleY(0) rotate(-30deg)" },
          ],
          {
            duration: 800,
            iterations: 1,
            easing: "ease-in-out",
          }
        );
        giftBox.style.transformOrigin = "bottom left";

        const lightAnimation = light.animate(
          [
            { transform: "translate(0%, 0%) scale(0.2)" },
            { transform: "translate(0%, 0%) scale(.4)" },
            { transform: "translate(0%, 0%) scale(0.6)" },
            { transform: "translate(0%, 0%) scale(0.8)" },
            { transform: "translate(0%, 0%) scale(.9)" },
            { transform: "translate(0%, 0%) scale(1)" },
          ],
          {
            duration: 1000,
            iterations: 1,
            easing: "ease-in-out",
            composite: "add",
          }
        );
        light.style.transformOrigin = "center center";

        const circlesAnimation = circles.animate(
          [
            { transform: "translate(0%, 0%) scale(0.5) rotate(0deg)" },
            { transform: "translate(0%, 0%) scale(.6) rotate(45deg)" },
            { transform: "translate(0%, 0%) scale(0.7) rotate(90deg)" },
            { transform: "translate(0%, 0%) scale(0.8) rotate(180deg)" },
            { transform: "translate(0%, 0%) scale(.9) rotate(280deg)" },
            { transform: "translate(0%, 0%) scale(1) rotate(360deg)" },
          ],
          {
            duration: 800,
            iterations: 1,
            easing: "ease-in-out",
          }
        );
  
        circles.style.transformOrigin = "center center";
  
        const triangleAnimation = triangle.animate(
          [
            { transform: "translate(0%, 0%) scale(0.8)" },
            { transform: "translate(0%, 0%) scale(.9)" },
            { transform: "translate(0%, 0%) scale(1)" },
          ],
          {
            duration: 500,
            iterations: 1,
            easing: "ease-in-out",
          }
        );
  
        triangle.style.transformOrigin = "center center";
  
        const stars_lightAnimation = stars_light.animate(
          [
            { transform: "translate(0%, 0%) scale(0.2)" },
            { transform: "translate(0%, 0%) scale(.4)" },
            { transform: "translate(0%, 0%) scale(0.6)" },
            { transform: "translate(0%, 0%) scale(0.8)" },
            { transform: "translate(0%, 0%) scale(.9)" },
            { transform: "translate(0%, 0%) scale(1)" },
          ],
          {
            duration: 600,
            iterations: 3,
            easing: "ease-in-out",
            // composite: "add",
          }
        );
        stars_light.style.transformOrigin = "center center";
  
        capAnimation.onfinish = () => {
          giftBox.style.display = "none";
          card_gift.style.display = "block";
          light.style.display = "block";

          circles.style.display = "none";
          triangle.style.display = "none";
          // stars_light.style.display = "none";
          glowlight.style.display = "none"; 
  
          const lightAnimation = light.animate(
            [
              { transform: "translate(0%, 0%) scale(0.2)" },
              { transform: "translate(0%, 0%) scale(.4)" },
              { transform: "translate(0%, 0%) scale(0.6)" },
              { transform: "translate(0%, 0%) scale(0.8)" },
              { transform: "translate(0%, 0%) scale(.9)" },
              { transform: "translate(0%, 0%) scale(1)" },
            ],
            {
              duration: 800,
              iterations: 1,
              easing: "ease-in-out",
              composite: "add",
            }
          );
          light.style.transformOrigin = "center center";
  
          const CardAnimation = card_gift.animate(
            [
              { transform: "translate(0%, 0%) scale(0.3)" },
              { transform: "translate(0%, 0%) scale(.5)" },
              { transform: "translate(0%, 0%) scale(1)" },
            ],
            {
              duration: 600,
              iterations: 1,
              easing: "ease-in-out",
            }
          );
          
          
          CardAnimation.onfinish = () => {
           light.style.display = "none"
          };
          
        };
      }
    );
  };

};

const finishAll = () => {
  if (svg.style.display === "block") {
    btnStart.style.display = "flex";
    svg.style.display = "none";
    giftBox.style.display = "none";
    circles.style.display = "none";
    stars_light.style.display = "none";
    cap.style.display = "none";
    triangle.style.display = "none";
    light.style.display = "none";
    glowLight.style.display = "none";
    card_gift.style.display = "none";
  }
};
