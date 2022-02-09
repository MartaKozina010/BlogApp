type SocialMediaLogoProps = {
  logo: "facebook" | "twitter" | "instagram" | "linkedin"
}

//can be done using object
export const SocialMediaLogo = (props: SocialMediaLogoProps) => {
  switch (props.logo) {
    case "facebook":
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 11.993 2.92547 15.3027 6.75 15.9028V10.3125H4.71875V8H6.75V6.2375C6.75 4.2325 7.94438 3.125 9.77172 3.125C10.6467 3.125 11.5625 3.28125 11.5625 3.28125V5.25H10.5538C9.56 5.25 9.25 5.86672 9.25 6.5V8H11.4688L11.1141 10.3125H9.25V15.9028C13.0745 15.3027 16 11.993 16 8Z"
            fill="white"
          />
        </svg>
      )

    case "twitter":
      return (
        <svg
          width="17"
          height="14"
          viewBox="0 0 17 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.69994 13.5005C11.7362 13.5005 15.0387 8.49829 15.0387 4.16173C15.0387 4.0211 15.0356 3.87735 15.0293 3.73673C15.6718 3.27213 16.2262 2.69666 16.6665 2.03735C16.0682 2.30356 15.4329 2.47741 14.7824 2.55298C15.4674 2.14243 15.9802 1.49747 16.2259 0.737666C15.5815 1.11953 14.8769 1.3889 14.1421 1.53423C13.6471 1.0082 12.9925 0.659899 12.2796 0.543189C11.5668 0.426479 10.8353 0.547855 10.1983 0.888553C9.56137 1.22925 9.05437 1.77029 8.75574 2.42803C8.4571 3.08577 8.38346 3.82357 8.54619 4.52735C7.2415 4.46188 5.96513 4.12296 4.79983 3.53255C3.63452 2.94215 2.6063 2.11345 1.78182 1.10017C1.36277 1.82265 1.23454 2.67759 1.42319 3.49122C1.61184 4.30485 2.10321 5.01612 2.79744 5.48048C2.27626 5.46393 1.76649 5.32361 1.31025 5.0711V5.11173C1.30979 5.86992 1.5719 6.60488 2.05204 7.19167C2.53219 7.77846 3.20072 8.18086 3.944 8.33048C3.46121 8.46257 2.95449 8.48182 2.46307 8.38673C2.67281 9.03878 3.08089 9.60908 3.63035 10.018C4.17982 10.427 4.84325 10.6542 5.52807 10.668C4.36545 11.5812 2.92929 12.0766 1.45088 12.0742C1.1887 12.0738 0.92677 12.0578 0.666504 12.0261C2.16841 12.9897 3.91552 13.5014 5.69994 13.5005Z"
            fill="white"
          />
        </svg>
      )

    case "instagram":
      return (
        <svg
          width="17"
          height="16"
          viewBox="0 0 17 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.3335 1.44062C10.471 1.44062 10.7241 1.45 11.5647 1.4875C12.346 1.52187 12.7679 1.65313 13.0491 1.7625C13.421 1.90625 13.6897 2.08125 13.9679 2.35938C14.2491 2.64063 14.421 2.90625 14.5647 3.27813C14.6741 3.55938 14.8054 3.98437 14.8397 4.7625C14.8772 5.60625 14.8866 5.85938 14.8866 7.99375C14.8866 10.1313 14.8772 10.3844 14.8397 11.225C14.8054 12.0063 14.6741 12.4281 14.5647 12.7094C14.421 13.0813 14.246 13.35 13.9679 13.6281C13.6866 13.9094 13.421 14.0813 13.0491 14.225C12.7679 14.3344 12.3429 14.4656 11.5647 14.5C10.721 14.5375 10.4679 14.5469 8.3335 14.5469C6.196 14.5469 5.94287 14.5375 5.10225 14.5C4.321 14.4656 3.89912 14.3344 3.61787 14.225C3.246 14.0813 2.97725 13.9063 2.69912 13.6281C2.41787 13.3469 2.246 13.0813 2.10225 12.7094C1.99287 12.4281 1.86162 12.0031 1.82725 11.225C1.78975 10.3813 1.78037 10.1281 1.78037 7.99375C1.78037 5.85625 1.78975 5.60312 1.82725 4.7625C1.86162 3.98125 1.99287 3.55938 2.10225 3.27813C2.246 2.90625 2.421 2.6375 2.69912 2.35938C2.98037 2.07813 3.246 1.90625 3.61787 1.7625C3.89912 1.65313 4.32412 1.52187 5.10225 1.4875C5.94287 1.45 6.196 1.44062 8.3335 1.44062ZM8.3335 0C6.16162 0 5.88975 0.009375 5.03662 0.046875C4.18662 0.084375 3.60225 0.221875 3.096 0.41875C2.56787 0.625 2.121 0.896875 1.67725 1.34375C1.23037 1.7875 0.958496 2.23438 0.752246 2.75938C0.555371 3.26875 0.417871 3.85 0.380371 4.7C0.342871 5.55625 0.333496 5.82813 0.333496 8C0.333496 10.1719 0.342871 10.4438 0.380371 11.2969C0.417871 12.1469 0.555371 12.7313 0.752246 13.2375C0.958496 13.7656 1.23037 14.2125 1.67725 14.6563C2.121 15.1 2.56787 15.375 3.09287 15.5781C3.60225 15.775 4.1835 15.9125 5.0335 15.95C5.88662 15.9875 6.1585 15.9969 8.33037 15.9969C10.5022 15.9969 10.7741 15.9875 11.6272 15.95C12.4772 15.9125 13.0616 15.775 13.5679 15.5781C14.0929 15.375 14.5397 15.1 14.9835 14.6563C15.4272 14.2125 15.7022 13.7656 15.9054 13.2406C16.1022 12.7313 16.2397 12.15 16.2772 11.3C16.3147 10.4469 16.3241 10.175 16.3241 8.00313C16.3241 5.83125 16.3147 5.55938 16.2772 4.70625C16.2397 3.85625 16.1022 3.27188 15.9054 2.76563C15.7085 2.23438 15.4366 1.7875 14.9897 1.34375C14.546 0.9 14.0991 0.625 13.5741 0.421875C13.0647 0.225 12.4835 0.0875 11.6335 0.05C10.7772 0.009375 10.5054 0 8.3335 0Z"
            fill="white"
          />
          <path
            d="M8.3335 3.89062C6.06475 3.89062 4.22412 5.73125 4.22412 8C4.22412 10.2688 6.06475 12.1094 8.3335 12.1094C10.6022 12.1094 12.4429 10.2688 12.4429 8C12.4429 5.73125 10.6022 3.89062 8.3335 3.89062ZM8.3335 10.6656C6.86162 10.6656 5.66787 9.47188 5.66787 8C5.66787 6.52813 6.86162 5.33437 8.3335 5.33437C9.80537 5.33437 10.9991 6.52813 10.9991 8C10.9991 9.47188 9.80537 10.6656 8.3335 10.6656Z"
            fill="white"
          />
          <path
            d="M13.5647 3.72793C13.5647 4.25918 13.1335 4.68731 12.6054 4.68731C12.0741 4.68731 11.646 4.25606 11.646 3.72793C11.646 3.19668 12.0772 2.76855 12.6054 2.76855C13.1335 2.76855 13.5647 3.19981 13.5647 3.72793Z"
            fill="white"
          />
        </svg>
      )

    case "linkedin":
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.8156 0H1.18125C0.528125 0 0 0.515625 0 1.15313V14.8438C0 15.4813 0.528125 16 1.18125 16H14.8156C15.4688 16 16 15.4813 16 14.8469V1.15313C16 0.515625 15.4688 0 14.8156 0ZM4.74687 13.6344H2.37188V5.99687H4.74687V13.6344ZM3.55938 4.95625C2.79688 4.95625 2.18125 4.34062 2.18125 3.58125C2.18125 2.82188 2.79688 2.20625 3.55938 2.20625C4.31875 2.20625 4.93437 2.82188 4.93437 3.58125C4.93437 4.3375 4.31875 4.95625 3.55938 4.95625ZM13.6344 13.6344H11.2625V9.92188C11.2625 9.0375 11.2469 7.89687 10.0281 7.89687C8.79375 7.89687 8.60625 8.8625 8.60625 9.85938V13.6344H6.2375V5.99687H8.5125V7.04063H8.54375C8.85938 6.44063 9.63438 5.80625 10.7875 5.80625C13.1906 5.80625 13.6344 7.3875 13.6344 9.44375V13.6344Z"
            fill="white"
          />
        </svg>
      )
  }
}

export const SocialMediaLink = {
  facebook: "http://facebook.com/",
  twitter: "http://twitter.com/",
  instagram: "http://instagram.com/",
  linkedin: "http://linkedin.com/",
}
