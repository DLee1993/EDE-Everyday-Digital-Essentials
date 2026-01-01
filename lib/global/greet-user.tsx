// lib/getLocalizedGreeting.ts
import { AiOutlineCoffee, AiOutlineSun, AiOutlineMoon, AiOutlineSmile } from "react-icons/ai";

export function getLocalizedGreeting() {
    const date = new Date();
    const locale = navigator.language;
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const formatter = new Intl.DateTimeFormat(locale, {
        hour: "numeric",
        hour12: false,
        timeZone,
    });
    const hour = parseInt(formatter.format(date), 10);

    if (hour >= 0 && hour < 12) {
        return { message: "Good morning", icon: <AiOutlineCoffee size={18} /> };
    }
    if (hour >= 12 && hour < 17) {
        return { message: "Good afternoon", icon: <AiOutlineSun size={18} /> };
    }
    if (hour >= 17 && hour < 24) {
        return { message: "Good evening", icon: <AiOutlineMoon size={18} /> };
    }

    return { message: "Hello", icon: <AiOutlineSmile size={18} /> };
}
