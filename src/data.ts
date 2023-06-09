import type { ICardData } from './types'
import { v4 as uuidv4 } from 'uuid'

const generateId = (): string => {
  return uuidv4()
}

const data: ICardData[] = [
  {
    id: generateId(),
    type: 'twitter',
    url: 'https://twitter.com/VaLandscapes',
    title: 'Twitter',
    thumbnail: '/assets/thumbnails/twitter.png',
    customUrl: 'twitter.com/VaLandscapes',
    className: 'bg-[rgba(0,172,238,0.2)] dark:text-white',
    iconImg: '/assets/cards/twitterIcon.svg',
    urlBaseDomain: 'twitter.com',
    description: 'Opinions and random things'
  },
  {
    id: generateId(),
    type: 'instagram',
    url: 'https://www.instagram.com/mrluisfer_/',
    title: 'Personal Photos',
    customUrl: 'instagram.com/mrluisfer_',
    description: 'Personal account',
    className: 'bg-pink-50',
    iconImg: '/assets/cards/instagramIcon.svg'
  },
  {
    id: '1634701418354421761',
    type: 'tweet',
    url: '',
    title: 'Twitter'
  },
  {
    id: generateId(),
    type: 'linkedin',
    url: 'https://www.linkedin.com/in/alecbcampbell/',
    title: 'LinkedIn',
    thumbnail: '/assets/thumbnails/linkedin.avif',
    description: 'Image by Grabriel Varaljay',
    className: 'bg-blue-100',
    iconImg: '/assets/cards/linkedinIcon.svg',
    urlBaseDomain: 'linkedIn.com/alecbcampbell'
  },
  {
    id: generateId(),
    type: 'github',
    url: 'https://github.com/uvacoder',
    title: 'GitHub',
    thumbnail: '/assets/thumbnails/github.png',
    customUrl: 'github.com/uvacoder',
    description: '71 public repositories',
    className:
      'bg-[rgba(0,0,0,0.20)] hover:bg-[rgba(0,0,0,0.1)] transition dark:text-white',
    iconImg: '/assets/cards/githubIcon.svg',
    urlBaseDomain: 'github.com'
  },
  {
    id: generateId(),
    type: 'behance',
    url: 'https://www.behance.net/luisalvarez28',
    title: 'Behance Portfolio',
    description: 'Custom design projects',
    className: 'bg-blue-50',
    iconImg: '/assets/cards/behanceIcon.svg',
    urlBaseDomain: 'behance.com'
  },
  {
    id: generateId(),
    type: 'spotify',
    url: 'https://open.spotify.com/user/lolesuncrak',
    title: 'Spotify',
    thumbnail: '/assets/thumbnails/spotify.png',
    customUrl: 'open.spotify/lolesuncrak'
  },
  {
    id: generateId(),
    type: 'dribbble',
    url: 'https://dribbble.com/uvacoder',
    title: 'Dribbble',
    thumbnail: '/assets/thumbnails/dribbble.jpg',
    description: 'Image by Med Badr Chemmaoui ',
    customUrl: 'dribbble.com/uvacoder',
    className: 'bg-[rgba(234,76,137,0.20)] dark:text-white',
    iconImg: '/assets/cards/dribbleIcon.svg'
  },
  {
    id: generateId(),
    type: 'twitch',
    url: 'https://www.twitch.tv/uvacoder',
    title: 'Twitch',
    thumbnail: '/assets/thumbnails/twitch.png',
    customUrl: 'twitch.tv/uvacoder',
    iconImg: '/assets/cards/twitchIcon.svg',
    className: 'bg-purple-200'
  },
  {
    id: generateId(),
    type: 'portfolio',
    url: 'https://uvacoder.vercel.app/',
    title: 'Professional Portfolio',
    iconImg: '/assets/cards/portfolioIcon.svg',
    className: 'bg-cyan-50',
    description: 'Personal portfolio made with React and Nextjs',
    thumbnail: '/assets/thumbnails/portfolio.png'
  },
  {
    id: '1599617558205804545',
    type: 'tweet',
    url: '',
    title: 'Twitter'
  },

  {
    id: generateId(),
    type: 'devto',
    url: 'https://dev.to/uvacoder',
    title: 'Dev.to Posts',
    iconImg: '/assets/cards/devtoIcon.svg',
    className: 'bg-gray-800 text-white',
    description: 'Posts about web development'
  },
  {
    id: generateId(),
    type: 'instagramCard',
    url: 'https://www.instagram.com/p/CkWo1xUrbFc/',
    title: 'Personal Photos'
  },
  {
    id: generateId(),
    type: 'youtube',
    url: 'https://www.youtube.com/watch?v=rR4n-0KYeKQ',
    title: 'how we write/review code in big tech companies'
  }
]

export default data
