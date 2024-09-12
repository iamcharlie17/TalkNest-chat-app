import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Chat = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
           {user?.displayName}, Please chat here...
        </div>
    );
};

export default Chat;