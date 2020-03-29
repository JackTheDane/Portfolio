import Link from 'next/link';
import fs from "fs";
import matter from 'gray-matter';
import { GetStaticProps } from 'next';
import path from 'path';

interface IPost {
  slug: string;
  title: string;
}

interface IHomeProps {
  posts: IPost[]
}

const Home = ({
  posts
}: IHomeProps) => {
  return (
    <div>
      {
        posts.map(({
          slug,
          title
        }) => (
            <div key={slug}>
              <Link
                href="/blog/[slug]" as={`/blog/${slug}`}
              //href="/blog/faq"
              >
                <a>{title}</a>
              </Link>
            </div>
          ))
      }
    </div>
  )
}

export const getStaticProps: GetStaticProps<IHomeProps> = async () => {
  // Get the content of the md file by checking for it using the file name + the .md extension
  const postFileNames: string[] = fs.readdirSync('posts');

  const posts: IPost[] = await Promise.all(postFileNames.map(
    (fn): Promise<IPost> => new Promise<IPost>((res, rej) => {

      fs.readFile(path.join('posts', fn), (err, data) => {

        if (err) {
          rej(err);
          return;
        }

        const { data: { title } } = matter(data.toString());

        res({
          title,
          slug: fn.replace('.md', '')
        });
      });

    })
  ))

  return {
    // Anything passed to the "props" object will be passed to the component as props.
    props: {
      posts
    }
  }
}


export default Home;
