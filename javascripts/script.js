const navLinks = Array.from(document.querySelectorAll("header nav a"))
  .filter((link) => link.hash)
  .reverse();

const tocLinks = Array.from(document.querySelectorAll("#toc a")).reverse();

const caseStudy = document.getElementById("case-study");
const toc = document.getElementById("toc");
const team = document.getElementById("team");

const tabs = document.querySelectorAll(".tab");
const pres = Array.from(document.querySelectorAll("pre"));
const tabBlock = document.getElementById("tab-block");

const BAR_HEIGHT = 16;

const handleScroll = () => {
  handleMainSectionSelection();
  handleTocVisibility();
  handleTocSelection();
};

const handleMainSectionSelection = () => {
  const selectNavItem = (hash) => {
    navLinks.forEach((link) => {
      if (link.hash === hash) {
        link.classList.add("selected");
      } else {
        link.classList.remove("selected");
      }
    });
  };

  const teamInView =
    team.offsetTop + team.offsetHeight / 2 <
    window.scrollY + window.innerHeight;

  if (teamInView) {
    selectNavItem("#team");
    return;
  }

  for (const link of navLinks) {
    if (link.hash) {
      const target = document.querySelector(link.hash);

      if (!!target && target.offsetTop <= window.scrollY + BAR_HEIGHT * 5) {
        selectNavItem(link.hash);
        break;
      }
    }
  }
};

const handleTocVisibility = () => {
  if (tocIsVisible()) {
    toc.classList.add("lg:left-0");
  } else {
    toc.classList.remove("lg:left-0");
  }
};

const tocIsVisible = () => {
  const caseStudyTopIsVisible = window.scrollY + 32 >= caseStudy.offsetTop;
  const caseStudyBottomIsVisible =
    window.scrollY + window.innerHeight >
    caseStudy.offsetHeight + caseStudy.offsetTop;

  return caseStudyTopIsVisible && !caseStudyBottomIsVisible;
};

const handleTocSelection = () => {
  const selectTocItem = (link) => {
    tocLinks.forEach((link) =>
      link.closest("li").classList.remove("selected", "show")
    );

    const tocItem = link.closest("li");
    const section = tocItem.dataset.section;
    const subItems = document.querySelectorAll(
      `li.subitem[data-section="${section}"]`
    );

    subItems.forEach((subItem) => {
      subItem.classList.add("show");
    });

    tocItem.classList.add("selected");
  };

  if (!tocIsVisible()) return;

  for (const link of tocLinks) {
    if (!link.hash) continue;

    const target = document.querySelector(link.hash);

    if (!!target && target.offsetTop <= window.scrollY + BAR_HEIGHT * 2) {
      selectTocItem(link);

      break;
    }
  }
};

const throttle = (callback, wait) => {
  let prevent = false;

  return function () {
    if (!prevent) {
      callback();
      prevent = true;
      setTimeout(function () {
        prevent = false;
      }, wait);
    }
  };
};

document.addEventListener("scroll", throttle(handleScroll, 16));
handleScroll();

const handleTab = (event) => {
  if (!event.target.classList.contains("tab")) return;

  tabs.forEach((tab) => tab.classList.remove("selected"));
  pres.forEach((pre) => pre.classList.remove("show"));
  event.target.classList.add("selected");
  pres
    .find((pre) => pre.id === event.target.dataset.target)
    .classList.add("show");
};

tabBlock.addEventListener("click", handleTab);

hljs.highlightAll();
