"use client";

import { useState } from "react";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X, FileText, Trash2 } from "lucide-react";

type Letter = {
    id: string;
    title: string;
    content: string;
    date: string;
};

export default function Letters() {
    const [letters, setLetters] = useLocalStorage<Letter[]>("forgive-letters", []);
    const [isComposing, setIsComposing] = useState(false);
    const [activeLetter, setActiveLetter] = useState<Letter | null>(null);

    const [newTitle, setNewTitle] = useState("");
    const [newContent, setNewContent] = useState("");

    const handleSave = () => {
        if (!newTitle.trim() && !newContent.trim()) return;

        const letter: Letter = {
            id: Date.now().toString(),
            title: newTitle.trim() || "Untitled Entry",
            content: newContent.trim(),
            date: new Date().toLocaleDateString(),
        };

        setLetters([letter, ...letters]);
        setIsComposing(false);
        setNewTitle("");
        setNewContent("");
    };

    const handleDelete = (id: string, e: React.MouseEvent) => {
        e.stopPropagation();
        setLetters(letters.filter(l => l.id !== id));
    };

    return (
        <div className="relative min-h-[90vh] p-6 pb-24 flex flex-col">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-light text-[var(--foreground)]">Unsent Letters</h1>
                    <p className="text-sm text-[var(--nav-inactive)] mt-1">Words that need a place to softly land.</p>
                </div>

                {!isComposing && !activeLetter && (
                    <button
                        onClick={() => setIsComposing(true)}
                        className="w-10 h-10 bg-[var(--primary)] text-[var(--nav-bg)] rounded-full flex items-center justify-center shadow-sm hover:scale-105 transition-transform"
                    >
                        <Plus size={20} />
                    </button>
                )}
            </div>

            <AnimatePresence mode="wait">
                {!isComposing && !activeLetter && (
                    <motion.div
                        key="list"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex-1 flex flex-col gap-4 overflow-y-auto no-scrollbar"
                    >
                        {letters.length === 0 ? (
                            <div className="flex-1 flex flex-col items-center justify-center text-[var(--nav-inactive)] opacity-70">
                                <FileText size={48} className="mb-4 font-light" strokeWidth={1} />
                                <p>No letters written yet.</p>
                            </div>
                        ) : (
                            letters.map((letter, i) => (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                    key={letter.id}
                                    onClick={() => setActiveLetter(letter)}
                                    className="bg-white p-4 rounded-xl border border-[var(--accent)] shadow-sm cursor-pointer hover:shadow-md transition-shadow group relative"
                                >
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="font-medium text-[var(--foreground)] pr-8">{letter.title}</h3>
                                        <span className="text-xs text-[var(--nav-inactive)]">{letter.date}</span>
                                    </div>
                                    <p className="text-sm text-[var(--nav-inactive)] line-clamp-2">
                                        {letter.content}
                                    </p>

                                    <button
                                        onClick={(e) => handleDelete(letter.id, e)}
                                        className="absolute top-4 right-4 text-[var(--accent)] hover:text-red-400 opacity-0 group-hover:opacity-100 transition-opacity"
                                    >
                                        <Trash2 size={16} />
                                    </button>
                                </motion.div>
                            ))
                        )}
                    </motion.div>
                )}

                {isComposing && (
                    <motion.div
                        key="compose"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="flex-1 flex flex-col bg-white rounded-2xl shadow-lg border border-[var(--accent)] overflow-hidden"
                    >
                        <div className="flex justify-between items-center p-4 border-b border-[var(--accent)]">
                            <span className="text-sm font-medium text-[var(--nav-inactive)]">New Letter</span>
                            <button onClick={() => setIsComposing(false)} className="text-[var(--nav-inactive)] hover:text-[var(--foreground)]">
                                <X size={20} />
                            </button>
                        </div>

                        <input
                            className="w-full text-xl font-medium px-6 py-4 outline-none text-[var(--foreground)]"
                            placeholder="Title or Recipient..."
                            value={newTitle}
                            onChange={(e) => setNewTitle(e.target.value)}
                        />

                        <textarea
                            className="w-full flex-1 px-6 py-2 outline-none resize-none text-[var(--foreground)] text-sm leading-relaxed"
                            placeholder="Write everything you are feeling. This stays on your device."
                            value={newContent}
                            onChange={(e) => setNewContent(e.target.value)}
                        />

                        <div className="p-4 border-t border-[var(--accent)] flex justify-end">
                            <button
                                onClick={handleSave}
                                disabled={!newTitle && !newContent}
                                className="px-6 py-2 bg-[var(--foreground)] text-[var(--nav-bg)] rounded-full text-sm font-medium disabled:opacity-50"
                            >
                                Save Draft
                            </button>
                        </div>
                    </motion.div>
                )}

                {activeLetter && (
                    <motion.div
                        key="view"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="flex-1 flex flex-col bg-white rounded-2xl shadow-lg border border-[var(--accent)] overflow-hidden"
                    >
                        <div className="flex justify-between items-center p-4 border-b border-[var(--accent)]">
                            <span className="text-xs text-[var(--nav-inactive)]">{activeLetter.date}</span>
                            <button onClick={() => setActiveLetter(null)} className="text-[var(--nav-inactive)] hover:text-[var(--foreground)]">
                                <X size={20} />
                            </button>
                        </div>

                        <div className="p-6 overflow-y-auto w-full no-scrollbar flex-1 whitespace-pre-wrap breaks-words">
                            <h2 className="text-2xl font-light text-[var(--foreground)] mb-6">{activeLetter.title}</h2>
                            <p className="text-[var(--foreground)] leading-loose opacity-90 text-sm">
                                {activeLetter.content}
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
