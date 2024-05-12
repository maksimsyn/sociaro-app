<template lang="pug">
  .socials
    ul.socials__list
      li(
        v-for='(link, index) of links'
        :key='`link-${index}`'
        data-hover-icon
        ).socials__item
        a(:href='link.link' :aria-label='link.name').socials__link
          .icon(v-html='link.icon')
</template>

<script>
  const VanillaTilt = () => import('vanilla-tilt');

  export default {
    name: 'AppSocials',
    data() {
      return {
        links: [
          {
            link: '#',
            name: 'Google plus',
            icon: `<svg width="28" height="19" viewBox="0 0 28 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.77998 11.2822V7.7178H17.212C17.799 12.0308 16.0276 18.5 8.77998 18.5C3.93136 18.5 0 14.4702 0 9.49965C0 4.52913 3.93136 0.5 8.77998 0.5C11.055 0.5 13.1278 1.38672 14.6876 2.84191C13.4794 4.01189 13.0918 4.45822 12.7627 4.83723C12.5914 5.03453 12.4359 5.2136 12.1887 5.46702C11.2865 4.70227 10.3028 4.15341 8.77998 4.15341C5.89944 4.15341 3.65119 6.5472 3.65119 9.49965C3.65119 12.4528 5.89944 14.8466 8.77998 14.8466C11.6263 14.8466 12.7826 13.5884 13.5265 11.2773C12.153 11.2773 8.77998 11.2822 8.77998 11.2822ZM24.6007 4.77727V7.89585H27.6429V10.1235H24.6007V13.3318H22.4278V10.1235H19.2979V7.89585H22.4278V4.77727H24.6007Z" fill="url(#paint1_linear)"/><defs><linearGradient id="paint1_linear" x1="18.2868" y1="0.5" x2="13.2914" y2="18.8712" gradientUnits="userSpaceOnUse"><stop stop-color="#FF3F00"/><stop offset="1" stop-color="#FF0047"/></linearGradient></defs></svg>`,
          },
          {
            link: '#',
            name: 'Facebook',
            icon: `<svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.70531 24V13.0525H12.6596L13.2516 8.78604H8.70531V6.06207C8.70531 4.82682 9.07438 3.98507 10.9806 3.98507L13.4118 3.98401V0.168097C12.9912 0.116195 11.5481 0 9.86916 0C6.36394 0 3.96433 1.98824 3.96433 5.63966V8.78604H0V13.0525H3.96433V24H8.70531Z" fill="url(#paint0_linear)"/><defs><linearGradient id="paint0_linear" x1="8.8724" y1="2.36556e-07" x2="-3.74144" y2="16.8803" gradientUnits="userSpaceOnUse"><stop stop-color="#FF3F00"/><stop offset="1" stop-color="#FF0047"/></linearGradient></defs></svg>`,
          },
          {
            link: '#',
            name: 'Twitter',
            icon: `<svg width="25" height="22" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M23.8243 1.13823C22.8522 1.74513 21.7781 2.18651 20.63 2.42268C19.7155 1.39323 18.4085 0.75 16.9615 0.75C14.1879 0.75 11.937 3.12378 11.937 6.0513C11.937 6.46712 11.9802 6.87015 12.0665 7.25838C7.88909 7.03701 4.18593 4.92901 1.70538 1.71754C1.27233 2.50342 1.02506 3.41512 1.02506 4.38603C1.02506 6.22422 1.91209 7.84711 3.26161 8.79784C2.43868 8.77227 1.6622 8.53139 0.983192 8.13711V8.2017C0.983192 10.7713 2.71604 12.9149 5.01735 13.4001C4.59608 13.5245 4.15126 13.5871 3.69269 13.5871C3.36889 13.5871 3.05293 13.5548 2.74679 13.4929C3.38655 15.5982 5.24173 17.1316 7.44165 17.1727C5.72188 18.5951 3.55336 19.4428 1.19906 19.4428C0.793488 19.4428 0.392492 19.4186 0 19.3702C2.22412 20.8719 4.86755 21.75 7.70527 21.75C16.9517 21.75 22.0064 13.6732 22.0064 6.66695C22.0064 6.43617 22.0024 6.20606 21.9939 5.97998C22.9758 5.23246 23.8288 4.29923 24.5 3.23614C23.5999 3.65734 22.6304 3.94262 21.6139 4.07046C22.652 3.41512 23.4488 2.37625 23.8243 1.13823Z" fill="url(#paint3_linear)"/> <defs> <linearGradient id="paint3_linear" x1="16.2077" y1="0.75" x2="8.90461" y2="21.1538" gradientUnits="userSpaceOnUse"> <stop stop-color="#FF3F00"/> <stop offset="1" stop-color="#FF0047"/> </linearGradient> </defs></svg>`,
          },
          {
            link: '#',
            name: 'Instagram',
            icon: `<svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.9288 20.2981C18.2002 20.2981 20.0482 18.4502 20.0482 16.1788H20.0481V6.3212C20.0481 4.04992 18.2001 2.20195 15.9287 2.20195H6.07107C3.79979 2.20195 1.95195 4.04992 1.95195 6.3212V16.1788C1.95195 18.4502 3.79979 20.2982 6.07107 20.2981H15.9288ZM5.33116 11.2503C5.33116 8.12441 7.87415 5.58142 11 5.58142C14.1258 5.58142 16.6688 8.12441 16.6688 11.2503C16.6688 14.376 14.1258 16.9188 11 16.9188C7.87415 16.9188 5.33116 14.376 5.33116 11.2503ZM15.9287 0.25H6.07107C2.72349 0.25 0 2.97362 0 6.3212V16.1788C0 19.5265 2.72349 22.25 6.07107 22.25H15.9287C19.2765 22.25 22 19.5264 22 16.1788V6.3212C22.0001 2.97362 19.2765 0.25 15.9287 0.25ZM16.9066 3.9263C16.5305 3.9263 16.1611 4.07855 15.8955 4.34531C15.6286 4.61078 15.4752 4.98035 15.4752 5.35772C15.4752 5.73393 15.6287 6.10337 15.8955 6.37013C16.1609 6.6356 16.5305 6.78915 16.9066 6.78915C17.284 6.78915 17.6522 6.6356 17.919 6.37013C18.1858 6.10337 18.338 5.7338 18.338 5.35772C18.338 4.98035 18.1858 4.61078 17.919 4.34531C17.6535 4.07855 17.284 3.9263 16.9066 3.9263Z" fill="url(#paint2_linear)"/><defs><linearGradient id="paint2_linear" x1="14.5538" y1="0.25" x2="5.97949" y2="20.7833" gradientUnits="userSpaceOnUse"><stop stop-color="#FF3F00"/><stop offset="1" stop-color="#FF0047"/></linearGradient></defs></svg>`,
          },
        ],
        tilt: null,
      };
    },
    async mounted() {
      this.tilt = await VanillaTilt();
      this.tilt.init(document.querySelectorAll('.socials__item'), {
        reverse: false,
        scale: 1.8,
      });
    },
  };
</script>

<style lang="sass">
  @import "AppSocials"
</style>
