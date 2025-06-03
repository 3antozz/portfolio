export const projectMap = {
  odinbook: () => import('./projects/odinbook'),
  messaging_app: () => import('./projects/messenger'),
  blog_page: () => import('./projects/blog-page'),
  where_is_waldo: () => import('./projects/waldo'),
  file_uploader: () => import('./projects/file-uploader'),
} as const;

export type ProjectSlug = keyof typeof projectMap;