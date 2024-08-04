// pass in objects as props with multiple values


const Sound1 = {
    'Animal_Name': 'Cat',
    'Animal_Sound': 'Meow'
}

const Sound2 = {
    'Animal_Name': 'Fox',
    'Animal_Sound': 'Wahaha'
}

const Sound3 = {
    'Cow_Name': 'Cow',
    'Cow_Sound': 'Moo'
}

const {Cow_Name, Cow_Sound} = Sound3;
// allows direct access of single objects.
// essentially makes a key value pair and the names from the passing to passed in property has to be same 

export const Animal = () => {
    return (
        <>
            <h1>Object passed in as prop</h1>
            <p>What does the {Sound1.Animal_Name} say?: {Sound1.Animal_Sound}</p>
            <p>What does the {Sound2.Animal_Name} say?: {Sound2.Animal_Sound}</p>
            <p>What does the {Cow_Name} say?: {Cow_Sound}</p>
        </>
    )
}