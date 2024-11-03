import './Main.css'

const Main = () =>{
    const user = {
        name : "aaa",
        isLogin: true,
    };
    if(user.isLogin){
        return <div className="logout">LogOut</div>
    }else{
        return <div className="login">LogIn</div>
    }
};

export default Main;



// return (
//     <>
//         {user.isLogin ? (
//             <div>logOut</div>
//         ) : (
//             <div>Login</div>
//         )}
//     </>
// );