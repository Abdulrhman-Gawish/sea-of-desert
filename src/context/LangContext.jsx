import { createContext, useContext, useState, useEffect } from 'react'
const LangContext = createContext({
  lang: 'en',
  toggleLang: () => {},
  t: (en) => en,
  dir: 'ltr',
})

export function LangProvider({ children }) {
  const [lang, setLang] = useState('en')

  const toggleLang = () => setLang(l => l === 'en' ? 'ar' : 'en')
  const dir = lang === 'ar' ? 'rtl' : 'ltr'
  const t = (en, ar) => lang === 'en' ? en : ar

  useEffect(() => {
    document.documentElement.dir = dir
    document.documentElement.lang = lang
    document.body.dir = dir
  }, [lang, dir])

  return (
    <LangContext.Provider value={{ lang, toggleLang, t, dir }}>
      {children}
    </LangContext.Provider>
  )
}

export const useLang = () => useContext(LangContext)
