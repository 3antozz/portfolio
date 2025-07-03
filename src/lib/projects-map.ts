export const projectMap = {
    dropzone: () => import('./projects/dropzone'),
    odinbook: () => import('./projects/odinbook'),
    messaging_app: () => import('./projects/messenger'),
    blog_page: () => import('./projects/blog-page'),
    where_is_waldo: () => import('./projects/waldo'),
    file_uploader: () => import('./projects/file-uploader'),
    battleship: () => import('./projects/battleship'),
    todo_app: () => import('./projects/todo_app'),
} as const;

export type ProjectSlug = keyof typeof projectMap;