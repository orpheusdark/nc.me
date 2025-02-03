import sliceAnnotationLarge from '~/assets/slice-annotation-large.png';
import sliceAnnotationPlaceholder from '~/assets/slice-annotation-placeholder.png';
import sliceAnnotation from '~/assets/slice-annotation.png';
import sliceAppLarge from '~/assets/slice-app-large.jpg';
import sliceAppPlaceholder from '~/assets/slice-app-placeholder.jpg';
import sliceApp from '~/assets/slice-app.jpg';
import sliceBackgroundBarLarge from '~/assets/slice-background-bar-large.jpg';
import sliceBackgroundBarPlaceholder from '~/assets/slice-background-bar-placeholder.jpg';
import sliceBackgroundBar from '~/assets/slice-background-bar.jpg';
import sliceBackgroundLarge from '~/assets/slice-background-large.jpg';
import sliceBackgroundPlaceholder from '~/assets/slice-background-placeholder.jpg';
import sliceBackground from '~/assets/slice-background.jpg';
import sliceIrlPlaceholder from '~/assets/slice-irl-placeholder.jpg';
import sliceIrl from '~/assets/slice-irl.jpg';
import sliceSidebarAnnotationsLarge from '~/assets/slice-sidebar-annotations-large.png';
import sliceSidebarAnnotationsPlaceholder from '~/assets/slice-sidebar-annotations-placeholder.png';
import sliceSidebarAnnotations from '~/assets/slice-sidebar-annotations.png';
import sliceSidebarLayersLarge from '~/assets/slice-sidebar-layers-large.png';
import sliceSidebarLayersPlaceholder from '~/assets/slice-sidebar-layers-placeholder.png';
import sliceSidebarLayers from '~/assets/slice-sidebar-layers.png';
import sliceSlidesLarge from '~/assets/slice-slides-large.jpg';
import sliceSlidesPlaceholder from '~/assets/slice-slides-placeholder.jpg';
import sliceSlides from '~/assets/slice-slides.jpg';
import { Footer } from '~/components/footer';
import { Image } from '~/components/image';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { Fragment } from 'react';
import { media } from '~/utils/style';
import { baseMeta } from '~/utils/meta';
import styles from './slice.module.css';

const title = 'Xylo - Next-Gen Gaming Experience';
const description =
  'Xylo is a comprehensive gaming platform designed to revolutionize the way gamers connect, compete, and collaborate in virtual worlds.';
const roles = ['Game Development', 'UI/UX Design', 'Community Building'];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const Slice = () => {
  return (
    <Fragment>
  <ProjectContainer className={styles.slice}>
    <ProjectBackground
      src={sliceBackground}
      srcSet={`${sliceBackground} 1280w, ${sliceBackgroundLarge} 2560w`}
      width={1280}
      height={800}
      placeholder={sliceBackgroundPlaceholder}
      opacity={0.8}
    />
    <ProjectHeader
      title="Xylo - Next-Gen Gaming Experience"
      description="Xylo is a comprehensive gaming platform designed to revolutionize the way gamers connect, compete, and collaborate in virtual worlds."
      url="https://www.best.edu.au/s/q2yjjvl7?data=8%404!9%4020303!10%40-15087&version=1"
      roles={roles}
    />
    <ProjectSection padding="top">
      <ProjectSectionContent>
        <ProjectImage
          srcSet={`${sliceApp} 800w, ${sliceAppLarge} 1920w`}
          width={800}
          height={500}
          placeholder={sliceAppPlaceholder}
          alt="The Xylo gaming platform interface showcasing live multiplayer stats."
          sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
        />
      </ProjectSectionContent>
    </ProjectSection>
    <ProjectSection>
      <ProjectSectionColumns centered className={styles.columns}>
        <div className={styles.imagesText}>
          <ProjectSectionHeading>Innovative Multiplayer Features</ProjectSectionHeading>
          <ProjectSectionText>
            Xylo brings gamers together by offering an immersive multiplayer experience.
            With real-time matchmaking, live leaderboards, and interactive tournaments,
            players can connect and compete like never before.
          </ProjectSectionText>
          <ProjectSectionText>
            The platform also integrates advanced social features that facilitate seamless
            communication and community building among players.
          </ProjectSectionText>
        </div>
        <div className={styles.sidebarImages}>
          <Image
            className={styles.sidebarImage}
            srcSet={`${sliceSidebarLayers} 350w, ${sliceSidebarLayersLarge} 700w`}
            width={350}
            height={750}
            placeholder={sliceSidebarLayersPlaceholder}
            alt="Xylo's dynamic sidebar displaying game stats and player profiles."
            sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
          />
          <Image
            className={styles.sidebarImage}
            srcSet={`${sliceSidebarAnnotations} 350w, ${sliceSidebarAnnotationsLarge} 700w`}
            width={350}
            height={750}
            placeholder={sliceSidebarAnnotationsPlaceholder}
            alt="Live game annotations and player achievements featured on the sidebar."
            sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
          />
        </div>
      </ProjectSectionColumns>
    </ProjectSection>
    <ProjectSection light>
      <ProjectSectionContent>
        <ProjectTextRow>
          <ProjectSectionHeading>Enhanced User Experience</ProjectSectionHeading>
          <ProjectSectionText>
            To ensure gamers can navigate seamlessly, Xylo introduces an intuitive interface
            that simplifies access to various game modes, dashboards, and community features.
            Customizable layouts and real-time notifications keep users engaged and informed.
          </ProjectSectionText>
          <ProjectSectionText>
            Whether tracking live matches or reviewing personal stats, every interaction is
            designed for speed, clarity, and excitement.
          </ProjectSectionText>
        </ProjectTextRow>
        <Image
          srcSet={`${sliceSlides} 800w, ${sliceSlidesLarge} 1920w`}
          width={800}
          height={500}
          placeholder={sliceSlidesPlaceholder}
          alt="Xylo's revamped interface featuring a streamlined dashboard and live game updates."
          sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
        />
      </ProjectSectionContent>
    </ProjectSection>
    <ProjectSection padding="top">
      <ProjectSectionContent className={styles.grid}>
        <div className={styles.gridImage}>
          <div className={styles.gridBackground}>
            <Image
              srcSet={`${sliceBackgroundBar} 440w, ${sliceBackgroundBarLarge} 880w`}
              width={440}
              height={790}
              placeholder={sliceBackgroundBarPlaceholder}
              alt=""
              role="presentation"
              sizes={`(max-width: ${media.mobile}px) 312px, (max-width: ${media.tablet}px) 408px, 514px`}
            />
          </div>
          <div className={styles.gridForeground}>
            <Image
              srcSet={`${sliceAnnotation} 440w, ${sliceAnnotationLarge} 880w`}
              width={440}
              height={340}
              placeholder={sliceAnnotationPlaceholder}
              alt="An in-game overlay displaying real-time statistics and player performance metrics."
              sizes={`(max-width: ${media.mobile}px) 584px, (max-width: ${media.tablet}px) 747px, 556px`}
            />
          </div>
        </div>
        <div className={styles.gridText}>
          <ProjectSectionHeading>Data-Driven Insights</ProjectSectionHeading>
          <ProjectSectionText>
            Xylo leverages robust analytics to offer gamers detailed insights into their performance.
            With real-time statistics and performance metrics, players can track their progress,
            analyze gameplay, and refine their strategies.
          </ProjectSectionText>
        </div>
      </ProjectSectionContent>
    </ProjectSection>
    <ProjectSection>
      <ProjectSectionContent>
        <ProjectTextRow>
          <ProjectSectionHeading>Project Outcomes</ProjectSectionHeading>
          <ProjectSectionText>
            The introduction of Xylo has redefined online gaming. Players report enhanced engagement,
            smoother gameplay, and a vibrant community experience. Innovative features like live tournaments
            and social integration have set a new standard in the gaming industry.
          </ProjectSectionText>
        </ProjectTextRow>
        <Image
          src={sliceIrl}
          width={940}
          height={500}
          placeholder={sliceIrlPlaceholder}
          alt="Gamers engaging in a live tournament on the Xylo platform."
        />
      </ProjectSectionContent>
    </ProjectSection>
  </ProjectContainer>
  <Footer />
</Fragment>

  );
};
