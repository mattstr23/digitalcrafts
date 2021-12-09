const users = [
{
    user: "matt",
    state: "TX",
},
{
    user: "bob",
    state: "TX",
},
{
    user: "zac",
    state: "SC",
},
{
    user: "don",
    state: "NC",
},
]
function getState() {
    users.state = singleState
    console.log(singleState)
}
console.log(users)
getState()