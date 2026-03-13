"use client";

import { useState, useEffect } from "react";
import { encryptData, decryptData } from "@/lib/crypto";

export function useLocalStorage<T>(key: string, initialValue: T) {
    const [storedValue, setStoredValue] = useState<T>(initialValue);

    // Get the vault key (PIN) from global memory if it exists
    const getVaultKey = () => (window as any).__vault_key as string | undefined;

    // Load and decrypt
    useEffect(() => {
        const loadData = async () => {
            try {
                const item = window.localStorage.getItem(key);
                if (item) {
                    const vaultKey = getVaultKey();

                    if (vaultKey && (key === "forgive-history" || key === "forgive-letters")) {
                        try {
                            const decrypted = await decryptData(item, vaultKey);
                            setStoredValue(JSON.parse(decrypted));
                        } catch (e) {
                            console.error("Encryption error - data might be locked or corrupted", e);
                            // If decryption fails, we don't overwrite to avoid data loss
                        }
                    } else {
                        setStoredValue(JSON.parse(item));
                    }
                } else {
                    window.localStorage.setItem(key, JSON.stringify(initialValue));
                }
            } catch (error) {
                console.warn(`Error reading localStorage key "${key}":`, error);
            }
        };

        loadData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [key]);

    // Save and encrypt
    const setValue = async (value: T | ((val: T) => T)) => {
        try {
            const valueToStore = value instanceof Function ? value(storedValue) : value;
            setStoredValue(valueToStore);

            if (typeof window !== "undefined") {
                const jsonValue = JSON.stringify(valueToStore);
                const vaultKey = getVaultKey();

                if (vaultKey && (key === "forgive-history" || key === "forgive-letters")) {
                    const encrypted = await encryptData(jsonValue, vaultKey);
                    window.localStorage.setItem(key, encrypted);
                } else {
                    window.localStorage.setItem(key, jsonValue);
                }
            }
        } catch (error) {
            console.warn(`Error setting localStorage key "${key}":`, error);
        }
    };

    return [storedValue, setValue] as const;
}
