import PropTypes from 'prop-types'
import {getBlockData} from '@/lib/api'

const FiftyFifty = (props) => {
  const blockData = getBlockData(
    props.data.acf.content_blocks,
    'full_width_fiftyfifty'
  )

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2">
      <div
        className="space-y-10 p-10 text-white"
        style={{backgroundColor: `#40403f`}}
      >
        <p className="uppercase font-bold text-lg" style={{color: `#f3713c`}}>
          {blockData['pre-title_text']}
        </p>
        <h2 className="capitalize text-5xl text-white leading-tight">
          {blockData.block_options.section_title}
        </h2>
        <div
          className="space-y-8"
          dangerouslySetInnerHTML={{__html: blockData.text_primary}}
        />
        {
          // Map over Case Studies
          blockData.case_study_button.map((study) => (
            <div
              key={study.case_study_logo.ID}
              className="w-100 lg:w-2/3 p-8 bg-gray-800"
            >
              <a
                className="flex items-center justify-center lg:justify-start space-x-8"
                href={study.case_study_link}
              >
                <img
                  src={study.case_study_logo.url}
                  alt={study.case_study_logo.title}
                  width={`125`}
                />
                <span>View Case Study &rarr;</span>
              </a>
            </div>
          ))
        }
      </div>
      <div
        className="bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${blockData.media_right.sizes['fifty-fifty-media']})`
        }}
      ></div>
    </section>
  )
}

FiftyFifty.propTypes = {
  data: PropTypes.object
}

export default FiftyFifty
