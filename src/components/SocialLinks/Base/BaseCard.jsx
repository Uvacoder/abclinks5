import { AiFillHeart } from 'react-icons/ai'
import { HiOutlineExternalLink } from 'react-icons/hi'
import AnchorTag from '../../AnchorTag/AnchorTag'

/**
 *
 * @param {String} username
 * @param {String} url
 * @param {String} description
 * @param {JSX.Element} jsxIcon AiFillHeart
 * @param {String} customUsernameClasses
 * @param {String} customIconClasses
 * @param {String} customCardClasses
 * @param {String} customUrlIconClasses
 * @returns JSX.Element
 */
export default function BaseCard({
  username = '',
  url = '',
  description = '',
  jsxIcon = <AiFillHeart />,
  customUsernameClasses = '',
  customIconClasses = '',
  customCardClasses = '',
  customUrlIconClasses = ''
}) {
  return (
    <>
      {username.length > 0 && (
        <div
          className={`
              bg-gray-200 dark:bg-gray-700 p-4 rounded-lg my-6 sm:my-8 md:my-12 transition-shadow hover:shadow-md removeBlueHighlight ${customCardClasses}
              relative top-0 left-0 hover:-top-1.5 hover:-left-1.5  w-64 mb:w-10/12 sm:w-full mx-auto
              focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 group filter hover:brightness-105
            `}
        >
          <AnchorTag hrefUrl={url}>
            <div className='flex gap-x-4'>
              <div
                draggable='false'
                className={`text-4xl md:text-5xl h-full my-auto mx-0 transform hover:scale-110 text-white ${customIconClasses}`}
              >
                {jsxIcon}
              </div>
              <div className='w-full'>
                <div
                  className={`flex justify-between items-center ${!description.length > 5 && 'h-full'
                    }`}
                >
                  <h1
                    className={`font-semibold text-lg text-black dark:text-white ${customUsernameClasses} group-hover:underline`}
                  >
                    {username.length > 0 ? username : 'Username'}
                  </h1>
                  <HiOutlineExternalLink
                    className={`text-xl sm:text-2xl transform hover:scale-110 cursor-pointer ${customUrlIconClasses}`}
                  />
                </div>
                {description.length > 5 && (
                  <p className='text-sm'>{description}</p>
                )}
              </div>
            </div>
          </AnchorTag>
        </div>
      )}
    </>
  )
}
