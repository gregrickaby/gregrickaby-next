import Button from '../common/Button'
import Link from 'next/link'
import PropTypes from 'prop-types'
import {getBlockData} from '../../lib/api'

const HomepageFold = (props) => {
  const blockData = getBlockData(props.data.acf.content_blocks, 'homepage_fold')

  return (
    <section
      className="mb-16 bg-no-repeat bg-bottom text-white text-center"
      style={{
        backgroundImage: `url(${blockData.background_media.url})`,
        minHeight: `800px`
      }}
    >
      <div className="container flex flex-col items-center text-black mx-auto py-12 px-16 lg:py-24 lg:px-32">
        <h1 className="pt-7 text-4xl">
          {blockData.block_options.section_title}
        </h1>
        <div dangerouslySetInnerHTML={{__html: blockData.description}} />
        <Button text={blockData.button_text} url="/contact" />
        <Link href="/services">
          <a>{blockData.secondary_cta_text}</a>
        </Link>
      </div>
    </section>
  )
}

HomepageFold.propTypes = {
  data: PropTypes.object
}

export default HomepageFold
