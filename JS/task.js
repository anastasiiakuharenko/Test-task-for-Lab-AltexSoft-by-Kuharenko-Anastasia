let five_letters_array = ['', '', '', '', ''];

function make_array(length) {

    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    for (let i = 1; i < length + 1; i++) {
        let unique_letter_is_found = false;
        while (unique_letter_is_found == false) {
            let unique_character = characters.charAt(Math.floor(Math.random() * characters.length));
            if (five_letters_array.includes(unique_character) == false) {
                five_letters_array[i] = unique_character;
                unique_letter_is_found = true;
            }
        }
    }
    return five_letters_array;

}
console.log(make_array(5))


let form = document.createElement('form');
document.body.append(form);
let select = document.createElement('select');
select.style.fontSize = "100px";
form.append(select)

for (let i = 0; i < 6; i++) {
    let option = document.createElement('option');
    option.innerHTML += five_letters_array[i];
    select.append(option);
}

let names = document.createElement('div');
names.style.fontSize = "50px";
document.body.append(names);

select.addEventListener("change", FindNameByFirstLetter);


async function FindNameByFirstLetter() {
    let LETTERS = await (await fetch('list.json')).json();
    names.innerHTML = '';
    for (let i = 0; i < LETTERS.length; i++) {
        if (LETTERS[i].name.charAt(0) == this.value) {
            console.log(LETTERS[i].name);
            let swap = String(LETTERS[i].name);
            LETTERS[i].name = swap;
            names.append(swap);
            let br = document.createElement('br');
            names.append(br);
        }
    }
    if (names.innerHTML == '') {
        let nomatches = document.createElement('div');
        nomatches.style.fontSize = "50px";
        nomatches.innerHTML = 'No matches :(';
        document.body.append(nomatches);
    }
}
