import { useCallback, useEffect, useState } from 'react';

let _voiceCache = null;

function getBestEnglishVoice() {
  if (_voiceCache) return _voiceCache;
  const voices = window.speechSynthesis?.getVoices() || [];
  _voiceCache =
    voices.find(v => v.name === 'Google US English') ||
    voices.find(v => v.name.includes('Samantha')) ||
    voices.find(v => v.lang === 'en-US' && v.localService) ||
    voices.find(v => v.lang.startsWith('en-US')) ||
    voices.find(v => v.lang.startsWith('en')) ||
    null;
  return _voiceCache;
}

export function useTextToSpeech() {
  const supported = typeof window !== 'undefined' && 'speechSynthesis' in window;
  const [speaking, setSpeaking] = useState(false);

  useEffect(() => {
    if (!supported) return;
    const reload = () => { _voiceCache = null; getBestEnglishVoice(); };
    window.speechSynthesis.addEventListener('voiceschanged', reload);
    reload();
    return () => window.speechSynthesis.removeEventListener('voiceschanged', reload);
  }, [supported]);

  const speak = useCallback((text, { rate = 0.82, pitch = 1 } = {}) => {
    if (!supported) return;
    window.speechSynthesis.cancel();
    const utt = new SpeechSynthesisUtterance(text);
    utt.lang = 'en-US';
    utt.rate = rate;
    utt.pitch = pitch;
    utt.volume = 1;
    const voice = getBestEnglishVoice();
    if (voice) utt.voice = voice;
    utt.onstart = () => setSpeaking(true);
    utt.onend = () => setSpeaking(false);
    utt.onerror = () => setSpeaking(false);
    setSpeaking(true);
    window.speechSynthesis.speak(utt);
  }, [supported]);

  const stop = useCallback(() => {
    if (!supported) return;
    window.speechSynthesis.cancel();
    setSpeaking(false);
  }, [supported]);

  return { speak, stop, speaking, supported };
}
