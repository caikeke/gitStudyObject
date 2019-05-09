// profile.js
let firstName = 'Michael';
let lastName = 'Jackson';
let year = 1958;

function v1() {
    console.log("export Function")
}
export let foo = 'bar';
setTimeout(() => foo = 'baz', 500);
export {firstName, lastName, year};
export default v1;