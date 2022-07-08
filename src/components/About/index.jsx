import { useState } from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import { userConfig } from '../../apiData/userConfig'
import { useLangContext } from '../../hooks/useLangContext'
import { motion } from 'framer-motion'

export default function About() {
  const [showDescription, setShowDescription] = useState(false)
  const { language } = useLangContext()

  const handleShowDescription = () => {
    setShowDescription((prevState) => !prevState)
  }

  const LANGS = {
    es: 'Acerca de',
    en: 'About'
  }
  const about = userConfig.about[language]

  return (
    <section
      className={`w-60 bg-gray-300 dark:bg-gray-900 rounded-lg mx-auto shadow-sm hover:shadow mb:w-72 sm:w-80 md:w-96 transition-all filter hover:brightness-105 border-2 border-transparent  ${
        showDescription && 'dark:border-blue-700 border-green-400'
      }`}
      title={`${LANGS[language]} ${userConfig.username}`}
    >
      <div
        className='userNoSelect flex justify-between items-center h-auto cursor-pointer py-3 px-4'
        onClick={handleShowDescription}
      >
        <p className='font-semibold opacity-80'>
          {LANGS[language]} {userConfig.firstName}
        </p>
        <IoIosArrowForward
          className={`transform transition-transform ${
            showDescription
              ? 'rotate-90'
              : 'rotate-0 hover:rotate-45 animate-pulse'
          }`}
        />
      </div>
      {showDescription && about.length > 5 && (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1}}
          exit={{ y: 20, opacity: 0 }}
          layout
          className='text-center p-3 mb:px-4 pt-0'
        >
          <p className='text-sm mb:text-base'>{about}</p>
        </motion.div>
      )}
    </section>
  )
}
