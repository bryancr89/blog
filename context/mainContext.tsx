import {createContext }from 'react'
import { Content, Language } from '../types/global';

type Context = {
    lang: Language,
    changeLanguage: (lang: Language) => void,
    content: Content
}

export const MainContext = createContext<Context>({} as Context);

