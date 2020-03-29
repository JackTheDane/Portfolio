import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <Link
        //href="/blog/[slug]" as={`/blog/${slug}`}
        href="/blog/faq"
      >
        <a>
          Read FAQ
        </a>
      </Link>
    </div>
  )
}


export default Home;
