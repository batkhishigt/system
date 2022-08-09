import { useState } from "react";
import { io } from "socket.io-client";
let socket;
import AdminLayout from "components/Layouts/admin";
export default Index;
import { TailSpin } from 'react-loading-icons'




function Index() {
    const [chat, setChat] = useState([])
    const saveMsg = (msg) => setChat([msg, ...chat])


    socket = io('http://103.50.206.12:8989/')
    socket.on('connect', () => {
    })
    socket.on('ChatData', data => {
        saveMsg({ text: data, type: 0 })
    })


    return (
        <AdminLayout>
            <section className="hero is-fullheight">
                <div className="hero-header">
                    <footer className="section is-small pt-0 pb-0">
                        <Chat saveMsg={saveMsg} />
                    </footer>
                </div>
                <div className="hero-body pt-0 ">
                    <Messages chat={chat} />
                </div>

            </section>
        </AdminLayout >
    );
}
const Chat = ({ saveMsg }) => (
    <form onSubmit={(e) => {
        e.preventDefault();
        socket.emit("chatSendData", e.target.elements.userInput.value)
        saveMsg({ text: e.target.elements.userInput.value, type: 1 });
        e.target.reset();
    }}>
        <div className="field has-addons">
            <div className="control is-expanded">
                <input className="input" name="userInput" type="text" placeholder="Type your message" />
            </div>
            <div className="control">
                <button className="button is-info">
                    Send
                </button>
            </div>
        </div>
    </form>
);

const Messages = ({ chat }) => (
    <div style={{ heigth: '100%', width: '100%' }}>
        {chat.map((m, i) => {
            return (
                <p key={i} style={{ padding: '.0em', marginTop: '0em', textAlign: m.type === 0 ? 'left' : 'right', overflowWrap: 'normal' }}>
                    <span className={`tag is-medium ${m.type === 0 ? 'is-success' : 'is-info'}`}>{m.text}</span>
                </p>
            )
        }
        )}
    </div>
);
