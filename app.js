const div_element1 = document.getElementById("element1");
const div_element2 = document.getElementById("element2");
const div_element3 = document.getElementById("element3");
const div_reset = document.getElementById("reset");
const output_p = document.getElementById("output");

div_element1.onclick = function() {
    output_p.innerHTML = `I am a flat Neumorphic box model.`
}
div_element2.onclick = function() {
    output_p.innerHTML = `I am a convex Neumorphic box model.`
}
div_element3.onclick = function() {
    output_p.innerHTML = `I am a concave Neumorphic box model.`
}
div_reset.onclick = function() {
    output_p.innerHTML = ``
}