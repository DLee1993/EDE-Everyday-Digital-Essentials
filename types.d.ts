/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch, SetStateAction } from "react";

type Greeting = {
    message: string;
    icon: React.ReactNode;
};

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

type NotepadNoteValues = {
    title: string;
    content?: string;
    category?: string;
    completedBy: Date | undefined;
    id: string;
    createdAt: string;
    completed: boolean;
};

type FormattedTimezone = {
    date: string;
    time: string;
    location: string;
    offset: string;
    timezone: string;
    name: string;
};

type SelectCurrenyProps = {
    type: "from" | "to";
    selectedValue: { from: string; to: string };
    countryCodes: Record<string, number>;
    setSelectedValue: React.Dispatch<React.SetStateAction<{ from: string; to: string }>>;
    loading?: boolean;
};

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

type UuidActionsProps = {
    uuids: string[];
    generate: () => void;
    deleteAll: () => void;
    downloadAll: () => void;
    copyAll: () => void;
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
    uuids: string[];
    regenerateOne: (index: number) => void;
    deleteOne: (index: number) => void;
    copyOne: (id: string) => void;
};
