import { createContext, useContext, useState, useEffect } from 'react'
import { translations } from '../data/translations'

const LangContext = createContext({
  lang: 'ar',
  toggleLang: () => {},
  t: (key) => key,
  dir: 'rtl',
})

export function LangProvider({ children }) {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('language') || 'ar'
  })

  const toggleLang = () => {
    setLang(l => {
      const newLang = l === 'en' ? 'ar' : 'en'
      localStorage.setItem('language', newLang)
      return newLang
    })
  }

  const dir = lang === 'ar' ? 'rtl' : 'ltr'
  
  const t = (key, fallbackEn, fallbackAr) => {
    const item = translations[key]
    if (item) return item[lang]
    if (fallbackEn && fallbackAr) return lang === 'en' ? fallbackEn : fallbackAr
    return key
  }

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
