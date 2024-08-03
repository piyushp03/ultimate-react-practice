export const Aircraft = (props) => {
    return (
        <>
            <p>This is the {props.plane} and it's built by {props.manufacture}</p>
            
        </>
    )
}

// props is just passing an argument to a function so first a prop will be defined and props passed in as parameter then when argument is being passed, first call the component and pass the value to the key which is our property.