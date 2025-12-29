type NotepadNoteValues = {
    title: string;
    content?: string;
    category?: string;
    completedBy: Date | undefined;
    id: string;
    createdAt: string;
    completed: boolean;
};

export default function Notepad() {
  return (
    <div>Notepad</div>
  )
}