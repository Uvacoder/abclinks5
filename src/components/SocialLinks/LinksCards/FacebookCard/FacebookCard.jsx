import { FaFacebookF } from 'react-icons/fa'
import BaseCard from '../../Base/BaseCard'

export default function FacebookCard({ facebookSocialLink }) {
  const { username, url, description } = facebookSocialLink

  return (
    <BaseCard
      username={username}
      url={url}
      description={description}
      customCardClasses='facebookCard bg-blue-700 dark:bg-blue-700'
      jsxIcon={<FaFacebookF />}
    />
  )
}
