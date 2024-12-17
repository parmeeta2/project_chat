/*const userMessage = [
    ["what is optics", "tell me about optics", "what is optical science", "optics"],
    ["how do lenses work", "how do concave and convex lenses differ", "what is a lens", "refraction in lenses", "lens"],
    ["what is light", "what is the speed of light", "how fast does light travel", "tell me about light", "light speed"],
    ["what is refraction", "define refraction", "how does light refract", "what causes refraction", "refraction"],
    ["what is diffraction", "explain diffraction", "how does diffraction work", "diffraction"],
    ["what is interference", "tell me about interference", "explain interference in light", "interference"],
    ["what is polarization", "what is light polarization", "how does polarization work", "polarization"],
    ["what is a prism", "how does a prism work", "what is the use of a prism", "explain how a prism splits light", "prism"],
    ["what is total internal reflection", "explain total internal reflection", "how does total internal reflection work", "total internal reflection"],
    ["what is the refractive index", "define refractive index", "how to calculate refractive index", "refractive index"],
    ["what is the optical fiber", "how does optical fiber work", "what is the principle of optical fiber", "optical fiber"],
    ["what is a microscope", "how does a microscope work", "explain how a microscope works", "microscope"],
    ["what is a telescope", "tell me about telescopes", "how does a telescope work", "telescope"],
    ["what is chromatic aberration", "define chromatic aberration", "how does chromatic aberration occur", "chromatic aberration"],
    ["what is spherical aberration", "explain spherical aberration", "how does spherical aberration occur", "spherical aberration"],
    ["what is focal length", "how do you measure focal length", "define focal length", "focal length"],
    ["how do mirrors work", "what is the difference between concave and convex mirrors", "explain reflection in mirrors", "mirrors"],
    ["what is the electromagnetic spectrum", "explain the electromagnetic spectrum", "how does light fit in the electromagnetic spectrum", "electromagnetic spectrum"],
    ["what is the Doppler effect", "explain Doppler effect in light", "how does Doppler effect work in optics", "Doppler effect"],
    ["how do cameras work", "how do cameras capture images", "tell me about camera optics", "camera optics"],
    ["what is magnification", "define magnification", "how is magnification calculated", "magnification"],
    ["what are optical illusions", "explain optical illusions", "how do optical illusions work", "optical illusions"],
    ["what is laser", "tell me about laser", "how does laser work", "laser"],
    ["what is fiber optics", "how does fiber optics work", "explain fiber optics technology", "fiber optics"]
  ];
  
  const botReply = [
    ["Optics is the study of light and its interaction with matter. It involves the behavior of light as it passes through different mediums."],
    ["Lenses bend light due to refraction. Concave lenses focus light, while convex lenses spread it out."],
    ["Light is electromagnetic radiation that travels in waves. Its speed in a vacuum is approximately 3×10^8 meters per second."],
    ["Refraction is the bending of light as it passes from one medium to another due to a change in its speed."],
    ["Diffraction is the bending of light around obstacles and the spreading of light waves when they pass through small openings."],
    ["Interference occurs when two or more light waves overlap and combine to form a new wave pattern, either amplifying or canceling out."],
    ["Polarization is the process by which light waves oscillate in a single direction, typically achieved through filters or reflection."],
    ["A prism is a transparent optical element that refracts light and can separate it into its component colors."],
    ["Total internal reflection happens when light strikes a surface at an angle greater than the critical angle, causing it to reflect entirely within the medium."],
    ["The refractive index is a measure of how much light slows down when passing through a medium. It's calculated by dividing the speed of light in a vacuum by the speed in the medium."],
    ["Optical fiber uses light to transmit data over long distances through total internal reflection, allowing for high-speed communication."],
    ["A microscope is an optical instrument used to magnify small objects, using lenses to focus light on the sample."],
    ["A telescope is an instrument that gathers and magnifies light to observe distant objects, commonly used in astronomy."],
    ["Chromatic aberration occurs when different wavelengths of light are focused at different points, leading to color fringing in images."],
    ["Spherical aberration is a defect where light rays passing through the edges of a lens or mirror do not converge at the same point as rays passing through the center."],
    ["Focal length is the distance between the lens or mirror's surface and its focal point, where light converges."],
    ["Mirrors reflect light. Concave mirrors focus light inward, while convex mirrors spread light outward."],
    ["The electromagnetic spectrum encompasses all types of electromagnetic radiation, with light occupying a small portion of it."],
    ["The Doppler effect is the change in frequency or wavelength of light due to the motion of the light source relative to the observer."],
    ["Cameras use lenses to focus light onto a sensor, capturing an image based on the intensity and color of the light."],
    ["Magnification refers to the process of enlarging the appearance of an object, usually through optical instruments like microscopes or telescopes."],
    ["Optical illusions are images or visual phenomena that deceive the brain into perceiving something differently from reality."],
    ["Laser stands for Light Amplification by Stimulated Emission of Radiation. It produces a focused beam of coherent light."],
    ["Fiber optics transmit light signals through thin, flexible fibers, used for high-speed internet and telecommunications."]
  ];
  
  const alternative = [
    "Interesting, right?",
    "That's cool! Keep asking!",
    "Let me know if you need more details!",
    "Hmm, that's a good question!",
    "What else do you want to know?"
  ];
  
  
  
  const synth = window.speechSynthesis;
  
  function voiceControl(string) {
    let u = new SpeechSynthesisUtterance(string);
    u.text = string;
    u.lang = "en-aus";
    u.volume = 1;
    u.rate = 1;
    u.pitch = 1;
    synth.speak(u);
  }
  
  function sendMessage() {
    const inputField = document.getElementById("input");
    let input = inputField.value.trim();
    input != "" && output(input);
    inputField.value = "";
  }
  document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("input");
    inputField.addEventListener("keydown", function (e) {
      if (e.code === "Enter") {
        let input = inputField.value.trim();
        input != "" && output(input);
        inputField.value = "";
      }
    });
  });
  
  function output(input) {
    let product;
  
    let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");
  
    text = text
      .replace(/[\W_]/g, " ")
      .replace(/ a /g, " ")
      .replace(/i feel /g, "")
      .replace(/whats/g, "what is")
      .replace(/please /g, "")
      .replace(/ please/g, "")
      .trim();
  
    let comparedText = compare(userMessage, botReply, text);
  
    product = comparedText
      ? comparedText
      : alternative[Math.floor(Math.random() * alternative.length)];
    addChat(input, product);
  }
  
  function compare(triggerArray, replyArray, string) {
    let item;
    for (let x = 0; x < triggerArray.length; x++) {
      for (let y = 0; y < replyArray.length; y++) {
        if (triggerArray[x][y] == string) {
          items = replyArray[x];
          item = items[Math.floor(Math.random() * items.length)];
        }
      }
    }
    //containMessageCheck(string);
    if (item) return item;
    else return containMessageCheck(string);
  }
  
  function containMessageCheck(string) {
    let expectedReply = [
      [
        "Good Bye, dude",
        "Bye, See you!",
        "Dude, Bye. Take care of your health in this situation."
      ],
      ["Good Night, dude", "Have a sound sleep", "Sweet dreams"],
      ["Have a pleasant evening!", "Good evening too", "Evening!"],
      ["Good morning, Have a great day!", "Morning, dude!"],
      ["Good Afternoon", "Noon, dude!", "Afternoon, dude!"]
    ];
    let expectedMessage = [
      ["bye", "tc", "take care"],
      ["night", "good night"],
      ["evening", "good evening"],
      ["morning", "good morning"],
      ["noon"]
    ];
    let item;
    for (let x = 0; x < expectedMessage.length; x++) {
      if (expectedMessage[x].includes(string)) {
        items = expectedReply[x];
        item = items[Math.floor(Math.random() * items.length)];
      }
    }
    return item;
  }
  function addChat(input, product) {
    const mainDiv = document.getElementById("message-section");
    let userDiv = document.createElement("div");
    userDiv.id = "user";
    userDiv.classList.add("message");
    userDiv.innerHTML = `<span id="user-response">${input}</span>`;
    mainDiv.appendChild(userDiv);
  
    let botDiv = document.createElement("div");
    botDiv.id = "bot";
    botDiv.classList.add("message");
    botDiv.innerHTML = `<span id="bot-response">${product}</span>`;
    mainDiv.appendChild(botDiv);
    var scroll = document.getElementById("message-section");
    scroll.scrollTop = scroll.scrollHeight;
    voiceControl(product);
  }*/