// addEventListener(type, listener) → listen to events on DOM nodes
// removeEventListener(type, listener) → detach listener

if (typeof document === 'undefined') {
  console.log('DOM not available');
} else {

  // 1. Create the button
  const btn = document.createElement("button");
  btn.textContent = "Click";

  // 2. Add it to the page
  document.body.appendChild(btn);

  // 3. Create event handler
  const handler = () => console.log("clicked");

  // 4. Attach listener
  btn.addEventListener("click", handler);

  // 5. Trigger click manually
  btn.click();

  // 6. Remove listener
  btn.removeEventListener("click", handler);

  // 7. Change another element's text when button clicked
  const say = document.getElementById("say");

  if (say) {
    btn.addEventListener("click", () => {
      say.textContent = "Hello";
    });
  }
}
