// this class manages the generation of pics for either rooms or users
class Pic {
  constructor(seed) {
    this.seed = seed;
  }
  AVATAR = 'avataaars';
  GRIDY = 'gridy';
  getURI(avatarType) {
    return `https://avatars.dicebear.com/api/${avatarType}/${seed}.svg`;
  }
  getAvatar() {
    return `https://avatars.dicebear.com/api/${this.AVATAR}/${this.seed}.svg`;
  }
  getGridy() {
    return `https://avatars.dicebear.com/api/${this.GRIDY}/${this.seed}.svg`;
  }
}

export default Pic;
