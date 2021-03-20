// Code EyesOnMe Component Here
function EyesOnMe() {
    function focus() {
        console.log('Good')
    }

    function blur() {
        console.log('Hey! Eyes on me!')
    }

    return (
        <div>
            <button onFocus={focus} onBlur={blur}>Eyes On Me</button>

        </div>
    )
}



export default EyesOnMe;