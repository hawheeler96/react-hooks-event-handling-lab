// Code Keypad Component Here

function HandleChange() {
    return <input type = {'password'} onChange={handleChange}></input>
}

function handleChange() {
    console.log('Entering password...')
}

function Keypad (){
    return (
        <div>
           <HandleChange />
        </div>
    )
}

export default Keypad;