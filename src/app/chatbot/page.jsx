import ChatbotComponent from "../../components/ChatBot/chatbotComponent";
import Link from "next/link";
import styles from "./page.module.css";

export default function ChatBotPage() {
    return (<>
        <p>Hi</p>
        <div className={styles.card}>
            <Link href="/">From here you may go back to your main PAGE</Link>
        </div>
        <div className={styles.description}>
            <ChatbotComponent/>
        </div>
    </>)
}