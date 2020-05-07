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
        backgroundSize: `100%`
      }}
    >
      <div
        className="container flex flex-col items-center max-w-6xl text-black mx-auto pt-12 px-16 overflow-x-hidden"
        style={{paddingBottom: '30%'}}
      >
        <h1 className="my-8 text-5xl">
          {blockData.block_options.section_title}
        </h1>
        <div
          className="text-xl"
          dangerouslySetInnerHTML={{__html: blockData.description}}
        />
        <div className="w-auto my-8">
          <Button text={blockData.button_text} url="/contact" />
          <Link href="/services">
            <a className="ml-2 underline">{blockData.secondary_cta_text}</a>
          </Link>
        </div>
      </div>
    </section>
  )
}

HomepageFold.propTypes = {
  data: PropTypes.object
}

export default HomepageFold
