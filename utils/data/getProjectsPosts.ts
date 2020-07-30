import { IProject } from 'models/interfaces/IProject';
import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';

let cachedProjects: IProject[] = [];

const sortProjects = (a: IProject, b: IProject): number => a.order - b.order;

export const getProjectPosts = async (): Promise<IProject[]> => {

  if (cachedProjects.length) return cachedProjects;

  try {

    const projectsFolder: string = 'data/posts/projects';
    // Get the content of the md file by checking for it using the file name + the .md extension
    const postFileNames: string[] = fs.readdirSync(projectsFolder);

    const projects: IProject[] = await Promise.all(postFileNames.map(
      (fn): Promise<IProject> => new Promise((res, rej) => {

        try {
          fs.readFile(path.join(projectsFolder, fn), async (err, data) => {

            if (err) {
              rej(err);
              return;
            }

            try {
              const { data: { title, role, url, github, skills, images, order } } = matter(data.toString());

              res({
                title,
                slug: fn.replace('.md', ''),
                images,
                role,
                url: url || '',
                github: github || '',
                skills,
                order
              });
            } catch (error) {
              console.log(error);
              rej(error);
            }

          });

        } catch (error) {
          console.log(error);
          rej(error);
        }
      })
    ));

    projects.sort(sortProjects);

    cachedProjects = projects;

    return projects;

  } catch (error) {
    return Promise.reject(error);
  }
}
