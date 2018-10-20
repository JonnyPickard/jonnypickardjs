import icons from '@jonnypickardjs/assets/icons/icons.svg';

const mainPageContent = {
  heroSectionProps: {
    heroImage: {
      src: 'http://via.placeholder.com/140x200',
      alt: 'Profile Image'
    },
    heroImageMobile: {
      src: 'http://via.placeholder.com/200x200',
      alt: 'Profile Image'
    },
    heroTitle: 'Jonny Pickard',
    heroSubtitle: 'Software Engineer',
    heroLinks: [
      {
        iconName: `${icons}#social-linkedin`,
        iconSize: 'md',
        iconColor: 'linkedinBlue',
        captionSize: 'h2',
        captionText: 'Linkedin',
        href: 'https://www.linkedin.com/in/jonny-pickard-715049b6/'
      },
      {
        iconName: `${icons}#social-github`,
        iconSize: 'md',
        iconColor: 'black',
        captionSize: 'h2',
        captionText: 'Github',
        href: 'https://github.com/JonnyPickard'
      }
    ],
    heroBlurb: `\
Passionate and successful London based software engineer, with a reputation for creative problem-solving. \
Key work priorities include achieving work of a high standard that is highly maintainable and scalable. \
Consistently seeking challenging new roles that encourage both personal and professional growth.`
  }
};

export default mainPageContent;
