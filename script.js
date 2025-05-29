const facts = [
    "venus is hotter then mercury!",
    "Jupiter has 79 moons!",
    "the moon is slowly drifting away!",
    "mars has the tallest volcano!",
    "neutron stars are super heavy!"

];
 function showfact() {
    const index = Math.floor(Math.random() * facts.length);
    const randomfact = facts[index];
    document.getElementById("fact").innerText = randomfact;
 }