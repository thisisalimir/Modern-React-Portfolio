function SocialMediaIcons() {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        href="https://www.linkedin.com"
        target="_blank"
        rel="noreferrer"
        className="hover:opacity-50 transition duration-500"
      >
        <img src="../assets/linkedin.png" alt="linkedin" />
      </a>
      <a
        href="https://www.x.com"
        target="_blank"
        rel="noreferrer"
        className="hover:opacity-50 transition duration-500"
      >
        <img src="../assets/twitter.png" alt="twitter" />
      </a>
      <a
        href="https://www.facebook.com"
        target="_blank"
        rel="noreferrer"
        className="hover:opacity-50 transition duration-500"
      >
        <img src="../assets/facebook.png" alt="facebook" />
      </a>
      <a
        href="https://www.instagram.com"
        target="_blank"
        rel="noreferrer"
        className="hover:opacity-50 transition duration-500"
      >
        <img src="../assets/instagram.png" alt="instagram" />
      </a>
    </div>
  );
}

export default SocialMediaIcons;
