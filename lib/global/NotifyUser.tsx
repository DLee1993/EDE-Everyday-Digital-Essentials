import { toast } from "sonner";

export const NotifyUser = ({
    type,
    title,
}: {
    type: string;
    title: string;
}) => {
    if (type === "Success") {
        toast.success(title, {
            closeButton: true,
        });
    } else if (type === "Info") {
        toast.info(title, {
            closeButton: true,
        });
    } else if (type === "Warning") {
        toast.warning(title, {
            closeButton: true,
        });
    } else if (type === "Error") {
        toast.error(title, {
            closeButton: true,
        });
    } else if (type === "Description") {
        toast(title, {
            closeButton: true,
        });
    } else if (type === "Action") {
        toast(title, {
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
