const URL = "https://v2.jokeapi.dev/joke/Any";
fetchData();
async function fetchData() {
  try {
    const { joke, setup, delivery } = await (await fetch(URL)).json();
    const [jokeSetup, jokeDelivery] = [
      document.getElementById("setup"),
      document.getElementById("delivery"),
    ];
    jokeSetup.textContent = joke || setup;
    jokeDelivery.textContent = joke ? "" : delivery;
  } catch (error) {
    console.log(error);
  }
}
