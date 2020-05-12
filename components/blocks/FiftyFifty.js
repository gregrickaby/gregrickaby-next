import PropTypes from 'prop-types'
import {getBlockData} from 'lib/api'

const FiftyFifty = (props) => {
  const blockData = getBlockData(
    props.data.acf.content_blocks,
    'full_width_fiftyfifty'
  )

  return (
    <section className="md:grid md:grid-cols-2">
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
            <div key={study.case_study_logo.ID} className="grid bg-gray-800">
              <a className="flex-1 w-1/2 p-4" href={study.case_study_link}>
                <img
                  src={study.case_study_logo.url}
                  alt={study.case_study_logo.title}
                />
              </a>
              <a className="flex-1 w-1/2 p-4" href={study.case_study_link}>
                <p>View Case Study</p>
              </a>
            </div>
          ))
        }
      </div>
      <div
        className=""
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
