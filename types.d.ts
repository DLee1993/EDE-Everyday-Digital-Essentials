/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch, SetStateAction } from "react";

//NOTE - Header & sidebar Props

type Greeting = {
    message: string;
    icon: React.ReactNode;
};

//NOTE - Link in bio Props

type LinkInBioValues = {
    name?: string;
    email?: string;
    description?: string;
    photo?: string;
    portfolio?: string;
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    instagram?: string;
    github?: string;
    telegram?: string;
    youtube?: string;
    whatsApp?: string;
    [key: string]: string;
};

//NOTE - Notepad Props

type NotepadNoteValues = {
    title: string;
    content?: string;
    category?: string;
    completedBy: Date | undefined;
    id: string;
    createdAt: string;
    completed: boolean;
};

//NOTE - Timezone Props

type FormattedTimezone = {
    date: string;
    time: string;
    location: string;
    offset: string;
    timezone: string;
    name: string;
};

//NOTE - Select currency Props

type SelectCurrenyProps = {
    type: "from" | "to";
    selectedValue: { from: string; to: string };
    countryCodes: Record<string, number>;
    setSelectedValue: React.Dispatch<React.SetStateAction<{ from: string; to: string }>>;
    loading?: boolean;
};

//NOTE - Focus timer Props

type FocusTimerAlarmProps = {
    isBreak: boolean;
    breakTime: number;
    alarm: boolean;
    shouldPlaySound: boolean;
    replaySound: number;
    onAlarmEnded: () => void;
    cancelBreak: () => void;
};

type FocusTimerOptionsProps = {
    alarm: boolean;
    sound: boolean;
    toggleAlarm: () => void;
    toggleSound: () => void;

    sessionPresets: { label: string; value: number }[];
    selectedPreset: number;
    selectPreset: (minutes: number) => void;
    updatePreset: (label: string, minutes: number) => void;

    breakTime: number;
    setBreakMinutes: (minutes: number) => void;

    time: number;
};

type FocusTimerPreset = {
    label: string;
    value: number; // minutes
};

type FocusTimerSessionSelectorProps = {
    presets: FocusTimerPreset[];
    selected: number;
    onSelect: (minutes: number) => void;
    onEditPreset: (label: string, minutes: number) => void;
};

//NOTE - File Converter Props

type Action = {
    file: File;
    file_name: string;
    file_size: number;
    from: string;
    to: string | null;
    file_type: string;
    is_converting?: boolean;
    is_converted?: boolean;
    is_error?: boolean;
    url?: string;
    output?: string;
};

type FileConverterTableProps = {
    actions: Action[];
    updateAction: (fileName: string, patch: Partial<Action>) => void;
    deleteAction: (fileName: string) => void;
};

type FileConverterAudioSelectProps = {
    action: Action;
    updateAction: (to: string) => void;
};

type FileConverterImageSelectProps = {
    action: Action;
    updateAction: (to: string) => void;
};

type FileConverterVideoSelectProps = {
    action: Action;
    updateAction: (to: string) => void;
};

type FileConverterToolbarProps = {
    isReady: boolean;
    isDone: boolean;
    isConverting: boolean;

    onConvert: () => void;
    onDownloadAll: () => void;
    onClear: () => void;

    // Pagination
    pageIndex: number;
    pageCount: number;
    canPrev: boolean;
    canNext: boolean;
    onPrev: () => void;
    onNext: () => void;
};

type FileConverterDropzoneProps = {
    isHover: boolean;
    onHover: () => void;
    onExitHover: () => void;
    onUpload: (files: File[]) => void;
};

//NOTE - Lorum Ipsum Props

type LorumIpsumOptionsProps = {
    paragraphs: number;
    sentences: number;
    minWords: number;
    maxWords: number;

    setParagraphs: (n: number) => void;
    setSentences: (n: number) => void;
    setMinWords: (n: number) => void;
    setMaxWords: (n: number) => void;
};

type LorumIpsumOutputProps = {
    output: string;
    onGenerate: () => void;
    onClear: () => void;
};

type QRCodeSettingsProps = {
    qrProps: { [key: string]: any };
    handleChange: Dispatch<SetStateAction<{ [key: string]: any }>>;
};

//NOTE - Unit Converter Props

type SelectUnitProps = {
    type: "from" | "to";
    selectedValue: {
        from: Unit | "";
        to: Unit | "";
    };
    setSelectedValue: React.Dispatch<
        React.SetStateAction<{
            from: Unit | "";
            to: Unit | "";
        }>
    >;
};

type ConvertUnitsProps = {
    amount: string;
    from: Unit | "";
    to: Unit | "";
    setResult: (result: number) => void;
    setError: (error: string) => void;
};

//NOTE - UUID Props

type UuidActionsProps = {
    uuids: UuidObject[];
    generate: () => void;
    deleteAll: () => void;
    downloadAll: () => void;
};

type UuidOptionsProps = {
    count: number;
    length: number;
    hyphens: boolean;
    uppercase: boolean;
    prefix: string;
    suffix: string;
    format: string;

    setCount: (value: number) => void;
    setLength: (value: number) => void;
    setHyphens: (value: boolean) => void;
    setUppercase: (value: boolean) => void;
    setPrefix: (value: string) => void;
    setSuffix: (value: string) => void;
    setFormat: (value: string) => void;
};

type UuidTableProps = {
    uuids: UuidObject[];
    regenerateOne: (index: number) => void;
    deleteOne: (index: number) => void;
};

type UuidObject = {
    full: string;
    prefix: string;
    id: string;
    suffix: string;
};

//NOTE - Credentials Props

type CredentialType = "password" | "pin";

type UseCredentialsOptions = {
    defaultType?: CredentialType;
    defaultPasswordLength?: number;
    defaultPinLength?: number;
};

//NOTE - Word Counter

type TextAnalysis = {
    words: number;
    characters: number;
    charactersNoSpaces: number;
    lines: number;
    paragraphs: number;
    readingTime: {
        slow: string;
        average: string;
        fast: string;
    };
    speakingTime: {
        slow: string;
        average: string;
        fast: string;
    };
}
