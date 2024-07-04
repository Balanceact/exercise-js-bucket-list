// 1
const secondP = document.createElement("p");
secondP.innerText = "Create and publish a PC game";
const section = document.querySelector(".list");
section.appendChild(secondP);

// 2
const thirdP = document.createElement("p");
thirdP.innerText = "Write and publish a tabletop roleplaying system";
section.insertAdjacentElement("beforeend", thirdP);

// 3
console.log(section.innerHTML);

// 4
const fourthP = "<p>Start my own streaming studio for tabletop roleplaying</p>";

// 5 & 6
//section.innerHTML = fourthP;
section.insertAdjacentHTML("afterbegin", fourthP);

// 7 (& prep work for 11)
let loopParagraph = "";
for (let i = 0; i < 3; i++) {
    loopParagraph = `<p class ="looped` + i + `">Stop repeating myself</p>`;
    section.insertAdjacentHTML("beforeend", loopParagraph);
}

// 8
console.log(section.children.length);

// 9
const owner = document.querySelector(".owner");
owner.innerText = "Tobias'";

// 10
const firstP = document.createElement("p");
firstP.innerText = "Have several great ideas for games";
section.replaceChild(firstP, section.firstChild);

// 11
const toReplace = section.querySelector(".looped1");
const fifthP = document.createElement("p");
fifthP.innerText = "Start my own streaming studio for tabletop roleplaying"
section.replaceChild(fifthP, toReplace);

// 12
section.removeChild(section.lastChild);