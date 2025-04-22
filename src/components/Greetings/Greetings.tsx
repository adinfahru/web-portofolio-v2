import { useEffect, useRef } from "react";
import gsap from "gsap";

const greetings = [
    "Hello, ",         // English
    "Halo, ",          // Indonesian
    "Hola, ",          // Spanish
    "你好, ",            // Chinese (Simplified) - Nǐ hǎo
    "こんにちは, ",        // Japanese - Konnichiwa
    "안녕하세요, ",         // Korean - Annyeonghaseyo
    "Ciao, ",          // Italian
    "Olá, ",           // Portuguese
    "Hoi, ",           // Dutch
    "Bonjour, ",       // French
    "Hej, ",           // Swedish / Danish
    "Merhaba, ",       // Turkish
    "Привет, ",        // Russian - Privet
    "नमस्ते, ",         // Hindi - Namaste
    "สวัสดี, ",         // Thai - Sawasdee
    "Xin chào, ",      // Vietnamese
    "Salam, ",         // Arabic-style greeting (used in many cultures)
];
  

export default function Greeting() {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;

    let index = 0;
    const updateText = () => {
      el.innerText = greetings[index];
    };

    const tl = gsap.timeline({
      repeat: -1,
      onRepeat: () => {
        index = (index + 1) % greetings.length;
        updateText();
      },
    });

    updateText(); // Set initial text
    tl.fromTo(
      el,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
      }
    ).to(el, {
      y: -30,
      opacity: 0,
      duration: 0.8,
      delay: 1.2,
      ease: "power2.in",
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="flex items-center gap-3">
      <div
        ref={textRef}
        className="text-2xl font-bold h-10 overflow-hidden bg-gradient-to-r from-white via-indigo-300 to-indigo-500 bg-clip-text text-transparent"
      >
        {/* initial text via JS */}
      </div>
      <p className="text-2xl">
        I'm <strong>Fahru</strong>
      </p>
    </div>
  );  
}
