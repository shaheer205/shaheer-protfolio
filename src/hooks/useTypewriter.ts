import { useEffect, useState } from "react";

const TYPED = [
  "Python Developer.",
  "Automation Engineer.",
  "AI Enthusiast.",
  "Trading Bot Builder.",
];

export const useTypewriter = (
  words: string[] = TYPED,
  typeSpeed = 80,
  deleteSpeed = 40,
  pause = 1400,
) => {
  const [text, setText] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx % words.length];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          setText(current.slice(0, text.length + 1));
          if (text.length + 1 === current.length) {
            setTimeout(() => setDeleting(true), pause);
          }
        } else {
          setText(current.slice(0, text.length - 1));
          if (text.length - 1 === 0) {
            setDeleting(false);
            setWordIdx((i) => i + 1);
          }
        }
      },
      deleting ? deleteSpeed : typeSpeed,
    );
    return () => clearTimeout(timeout);
  }, [text, deleting, wordIdx, words, typeSpeed, deleteSpeed, pause]);

  return text;
};
