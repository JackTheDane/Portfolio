import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Head from 'next/head';


const Post = ({
  content,
  data
}) => {
  return (
    <>
      <Head>
        <title>
          {data.title}
        </title>
      </Head>
      <div>
        <div> Content below </div>
        <pre> {content} </pre>
      </div>
    </>
  )
}

/**
 * This is used to determine the paths during export
 */
export const getStaticPaths = async () => {

  // Get all of the file names from the "posts" folder
  const files = fs.readdirSync('posts');

  console.log({ files });

  return {
    // Create a route for each md file
    paths: files.map((filename: string) => ({
      params: { // Set the params for each file
        slug: filename.replace('.md', '') // Set the slug of the file to be the filename without the .md extension
      }
    })),
    fallback: false
  }
}


/**
 * Used to set the props for the page during export.
 * Anything set here will be passed as props to the component during export.
 */
export const getStaticProps = async ({ params: { slug } }) => {

  // Get the content of the md file by checking for it using the file name + the .md extension
  const markdownWithMetadata = fs.readFileSync(path.join('posts', `${slug}.md`)).toString();

  const { content, data } = matter(markdownWithMetadata);

  return {
    // Anything passed to the "props" object will be passed to the component as props.
    props: {
      content,
      data
    }
  }
}

export default Post;
