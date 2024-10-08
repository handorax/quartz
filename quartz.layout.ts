import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [
    Component.OnlyFor(
      { titles: ["Nousearch"] },
      Component.RecentNotes({
        showTags: false,
        linkToMore: "/blog" as SimpleSlug,
        limit: 1,
        title: "Recent blog posts:",
	filter: (f) => f.relativePath?.startsWith("blog/") ?? false,
      }),
    ),
    Component.Comments({
        provider: 'giscus',
        options: {
          // from data-repo
          repo: 'handorax/quartz',
          // from data-repo-id
          repoId: 'R_kgDOM5wYaw',
          // from data-category
          category: 'Announcements',
          // from data-category-id
          categoryId: 'DIC_kwDOM5wYa84Ci_zc',
        }
      }),
  ],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/handorax/nousearch",
      "Discord Community": "https://discord.gg/nousearch",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer()),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
    Component.MobileOnly(Component.Explorer()),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer()),
  ],
  right: [],
}
