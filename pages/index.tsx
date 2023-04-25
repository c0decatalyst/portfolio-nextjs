import type { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import WorkExperience from '@/components/WorkExperience'
import Contact from '@/components/Contact'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import { PageInfo, Experience, Skill, Project, Social } from '@/typings';
import { fetchExperiences } from '@/utils/fetchExperiences'
import { fetchPageInfo } from '@/utils/fetchPageInfo'
import { fetchProjects } from '@/utils/fetchProjects'
import { fetchSkills } from '@/utils/fetchSkills'
import { fetchSocials } from '@/utils/fetchSocials'


type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

export default function Home({pageInfo, experiences, skills, projects, socials }: Props) {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Head>
        <title>Magdy&#39;s Portfolio</title>
        <meta name="description" content="Magdy's portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header socials={socials} />
 
      <section id="hero" className='snap-start'>
        <Hero pageInfo={pageInfo} />
      </section>

      <section id="about" className='snap-center'>
        <About pageInfo={pageInfo} />
      </section>

      <section id="experience" className='snap-center'>
        <WorkExperience experiences={experiences} />
      </section>

      <section id="skills" className='snap-center'>
        <Skills skills={skills} />
      </section>

      <section id="projects" className='snap-start'>
        <Projects projects={projects} />
      </section>

      <section id="contact" className='snap-start'>
        <Contact pageInfo={pageInfo} />
      </section>

        <footer className='sticky bottom-5 w-full'>
          <div className='flex items-center justify-center'>
          <Link href="#hero">
            <Image 
              className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer'
              src={pageInfo.thumbPicUrl}
              alt="Home"   
              width={50}
              height={50}         
            />
            </Link>
          </div>
        </footer>      
    </div>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials
    }
  }
}
// export const config = {
// 	runtime: 'experimental-edge',
// }