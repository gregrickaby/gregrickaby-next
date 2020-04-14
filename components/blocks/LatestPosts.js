import Link from 'next/link'

const LatestPosts = ({posts}) => (
  <section>
    <h3>Latest from the blog</h3>
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Link href="/blog/[...all]" as={`/blog/${post.id}/${post.slug}`}>
            <a dangerouslySetInnerHTML={{__html: post.title.rendered}} />
          </Link>
        </li>
      ))}
    </ul>
  </section>
)

export default LatestPosts
