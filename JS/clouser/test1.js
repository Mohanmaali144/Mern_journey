
function main() {
    let name = "mozila";

    function display() {
        console.log(name);
    }
    display();
    name = "chrome";
    return display;
}

let c = main();
c();