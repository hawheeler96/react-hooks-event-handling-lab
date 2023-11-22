// Code EyesOnMe Component Here
function HandleBtn () {
    return <button onFocus={handleFocus} onBlur={handleBlur}>Eyes on me</button>
}

function handleFocus () {
    console.log('Good!')
}

function handleBlur () {
    console.log('Hey! Eyes on me!')
}



function EyesOnMe () {
    return (
        <HandleBtn />
    )
}

export default EyesOnMe