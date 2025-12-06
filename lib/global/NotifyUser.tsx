import { toast } from "sonner";

export const NotifyUser = ({
    type,
    title,
    message,
}: {
    type: string;
    title: string;
    message: string;
}) => {
    if (type === "Success") {
        toast.success(title, {
            description: message,
            closeButton: true,
        });
    } else if (type === "Info") {
        toast.info(title, {
            description: message,
            closeButton: true,
        });
    } else if (type === "Warning") {
        toast.warning(title, {
            description: message,
            closeButton: true,
        });
    } else if (type === "Error") {
        toast.error(title, {
            description: message,
            closeButton: true,
        });
    } else if (type === "Description") {
        toast(title, {
            description: message,
            closeButton: true,
        });
    } else if (type === "Action") {
        toast(title, {
            description: message,
            closeButton: true,
            action: {
                label: "Undo",
                onClick: () => console.log("Undo clicked"),
            },
        });
    } else {
        console.warn(`Unknown toast type: ${type}`);
    }
};
