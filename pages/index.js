import LatestPosts from '../components/blog/LatestPosts'
import Layout from '../components/common/Layout'

const Index = () => (
  <Layout>
    <section className="container">
      <img src={require('../public/images/wdscamp.jpg?resize&size=728')} />
      <LatestPosts />
    </section>
  </Layout>
)

export default Index
