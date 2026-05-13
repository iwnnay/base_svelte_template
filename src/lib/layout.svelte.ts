import { browser } from '$app/environment';

const COLLAPSE_KEY = 'nav-collapsed';
const MOBILE_BREAKPOINT = 768;

function readCollapsed(): boolean {
  if (!browser) return false;
  return localStorage.getItem(COLLAPSE_KEY) === '1';
}

function createLayout() {
  let mobileOpen = $state(false);
  let desktopCollapsed = $state(readCollapsed());
  let isMobile = $state(false);

  if (browser) {
    const mq = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    isMobile = mq.matches;
    mq.addEventListener('change', (e) => {
      isMobile = e.matches;
      if (!e.matches) mobileOpen = false; // close drawer when growing to desktop
    });
  }

  return {
    get mobileOpen() {
      return mobileOpen;
    },
    get desktopCollapsed() {
      return desktopCollapsed;
    },
    get isMobile() {
      return isMobile;
    },
    toggle() {
      if (isMobile) {
        mobileOpen = !mobileOpen;
      } else {
        desktopCollapsed = !desktopCollapsed;
        if (browser) localStorage.setItem(COLLAPSE_KEY, desktopCollapsed ? '1' : '0');
      }
    },
    openMobile() {
      mobileOpen = true;
    },
    closeMobile() {
      mobileOpen = false;
    }
  };
}

export const layout = createLayout();
