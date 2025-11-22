import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../firebase";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function saveMessageToFirestore({ email, message }: { email: string; message: string }) {
  try {
    await addDoc(collection(db, "messages"), {
      email,
      message,
      createdAt: new Date().toISOString(),
    });
    return { success: true };
  } catch (error) {
    return { success: false, error };
  }
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
