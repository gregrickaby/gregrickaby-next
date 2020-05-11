import PropTypes from 'prop-types'
import {getBlockData} from '../../lib/api'

const FiftyFifty = (props) => {
  const blockData = getBlockData(
    props.data.acf.content_blocks,
    'full_width_fiftyfifty'
  )

  return (
    <section className="">
      <p className="">{blockData['pre-title_text']}</p>
      <h2 className="">{blockData.block_options.section_title}</h2>
      <div
        className="left"
        dangerouslySetInnerHTML={{__html: blockData.text_primary}}
      ></div>
      {
        // Map over Case Studies
        blockData.case_study_button.map((study) => (
          <div key={study.case_study_logo.ID} className="bg-gray-600">
            <a href={study.case_study_link}>
              <img
                src={study.case_study_logo.url}
                alt={study.case_study_logo.title}
              />
            </a>
            <a href={study.case_study_link}>
              <p>View Case Study</p>
            </a>
          </div>
        ))
      }
      <div
        className="right"
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
