import profilePicture from './profilePicture';
import socialIcons from './socialIcons';

const { profilePictureMobile } = profilePicture;

const navbarContent = {
  navbarProps: {
    profilePhoto: profilePictureMobile,
    navbarTitle: {
      size: 'h3',
      text: 'Jonny Pickard'
    },
    socialIcons
  }
};

export default navbarContent;
