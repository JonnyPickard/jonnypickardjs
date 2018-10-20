import socialIcons from './socialIcons';
import profilePicture from './profilePicture';

const { profilePictureDesktop, profilePictureMobile } = profilePicture;

const mainPageContent = {
  heroSectionProps: {
    heroImage: profilePictureDesktop,
    heroImageMobile: profilePictureMobile,
    heroTitle: 'Jonny Pickard',
    heroSubtitle: 'Software Engineer',
    heroLinks: socialIcons,
    heroBlurb: `\
Passionate and successful London based software engineer, with a reputation for creative problem-solving. \
Key work priorities include achieving work of a high standard that is highly maintainable and scalable. \
Consistently seeking challenging new roles that encourage both personal and professional growth.`
  }
};

export default mainPageContent;
