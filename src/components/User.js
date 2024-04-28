import PropTypes from 'prop-types';

function User ({name, surname, age, isLoggedIn, friends, address}) {
    return (
        <>  
            <h1>
                {isLoggedIn ? `Welcome, ${name} ${surname} Age: ${age}` : "Welcome, Guest"}
            </h1>
            {address.title} {address.zip}
            <br />
            <br />
            
            {
                friends && friends.map((friend) => (<div key={friend.id}>{friend.name} {friend.surname}</div>))
            }
        </>
    )
}


// function User (props) {
//     return (
//         <h1>
//             {props.isLoggedIn ? <h1>Welcome, {props.name} {props.surname} </h1> : <h1>Welcome, Guest</h1>}
//         </h1>
//     )
// }

User.propTypes = {
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    isLoggedIn: PropTypes.bool.isRequired,
    age: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    friends: PropTypes.array,
    address: PropTypes.shape({
        title: PropTypes.string,
        zip: PropTypes.number
    })
}

User.defaultProps = {
    isLoggedIn: false
}
export default User;