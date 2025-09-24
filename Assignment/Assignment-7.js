let contacts = [
    {name:"John Doe",phone: "122-422-9112",email:"Johndoe@example.com"},
    {name:"Jane Smith",phone: "987-654-3210",email:"Janesmith@example.com"},
    {name:"Robert Brown",phone: "555-111-2222",email:"Robertbrown@example.com"}
]

contacts.push(
    {name:" Maisie Haley",phone: "0913-531-3030",email:"risus.Quisque@urna.ca."},
)
let firstContact = contacts[0]
let lastContact = contacts[contacts.length-1]
console.log("first contact ",`${firstContact.name}/${firstContact.phone} /${firstContact.email}`)
console.log("last contact ",`${lastContact.name}/${lastContact.phone} /${lastContact.email}`)