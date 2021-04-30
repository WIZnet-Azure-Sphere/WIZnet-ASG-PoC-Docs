/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "My Site",
  tagline: "Dinosaurs are cool",
  url: "https://wiznet-azure-sphere.github.io/WIZnet-ASG-PoC-Docs",
  baseUrl: "/WIZnet-ASG-PoC-Docs/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "WIZnet-Azure-Sphere", // Usually your GitHub org/user name.
  projectName: "WIZnet-ASG-PoC-Docs", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "WIZnet ASG Docs",
      logo: {
        alt: "WinC Logo",
        src: "img/WIZcloud-logo_01_256x256.png"
      },
      items: [
        {
          type: "doc",
          docId: "intro",
          position: "left",
          label: "Docs"
        },
        // { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/WIZnet-Azure-Sphere/WIZnet-ASG-PoC-Docs/docs",
          label: "GitHub",
          position: "right"
        }
      ]
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Tutorial",
              to: "/docs/intro"
            }
          ]
        },
        {
          title: "Community",
          items: [
            {
              label: "Forum",
              href: "https://forum.wiznet.io/"
            }
          ]
        },
        {
          title: "More",
          items: [
            {
              label: "WIZnet",
              to: "https://wiznet.io"
            },
            {
              label: "GitHub",
              href: "https://github.com/wiznet-azure-sphere"
            }
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`
    }
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/facebook/docusaurus/edit/master/website/"
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: "https://github.com/facebook/docusaurus/edit/master/website/blog/"
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      }
    ]
  ]
};
