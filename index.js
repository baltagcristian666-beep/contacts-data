/*
Challenge:
1. Wire up this search pattern app so that inputting 
   a full or partial name brings up the matching     
   contact or contacts.
*/
import {contactsArr} from "./contactsData.js"

const patternSearchInput = document.getElementById('pattern-search-input')
const patternSearchSubmit = document.getElementById('pattern-search-submit')
const contactDisplay = document.getElementById('contact-display')


//let p = []

function renderContact(contactObj) {
    //console.log(contactObj)
    // const frag = document.createDocumentFragment()
    // for(let i=0; i<contactObj.length; i++){
    //     const contactCard = document.createElement('aside')
    //     contactCard.classList.add('contact-card')
    //     const parOne = document.createElement('p')
    //     parOne.textContent = contactObj[i].name
    //    // console.log(parOne.innerHTML)
    //     const parTwo = document.createElement('p')
    //     parTwo.textContent = contactObj[i].email
    //    // console.log(parTwo.innerHTML)
    //     const parThree = document.createElement('p')
    //     parThree.textContent = contactObj[i].phone
    //   //  console.log(parThree.innerHTML)
    //    // p.push(parOne, parTwo, parThree)
    //    // console.log(p)
    //     contactCard.append(parOne, parTwo, parThree)
    //     //console.log(contactCard.innerHTML)
    //     frag.appendChild(contactCard)
    // }
    // contactDisplay.replaceChildren(frag)
    
    
    const html = contactObj
    .map(c => `
      <aside class="contact-card">
        <p>${c.name}</p>
        <p>${c.email}</p>
        <p>${c.phone}</p>
      </aside>
    `)
    .join("");

  contactDisplay.innerHTML = html;
    
   // console.log(p)
    //contactCard.append(p)
    
/*
    The CSS for contact-card has been done for you. 
    The name, email and phone details can be placed in
    'p' elements and placed inside contact-card. 
*/
}

function search(){
    const inp = patternSearchInput.value.trim();
    //const x = []
    
// for(let i=0; i<contactsArr.length; i++){
//     if(inp === ""){
//         break
//     }else if(contactsArr[i].name.includes(inp)){
//         //console.log(contactsArr[i])
//         x.push(contactsArr[i])
//     }

// }
const o = contactsArr.filter(function(i){
        return i.name.includes(inp)
})  
    
    renderContact(o)
}










patternSearchSubmit.addEventListener('click', search)


