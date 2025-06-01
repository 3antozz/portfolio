import OdinBookInterface from "@/../public/projects/odinbook/interface.png"
import OdinBookLogin from "@/../public/projects/odinbook/login.png"
import OdinBookNotifications from "@/../public/projects/odinbook/notifications.png"
import OdinBookPost from "@/../public/projects/odinbook/post.png"
import OdinBookProfile from "@/../public/projects/odinbook/profile.png"
import OdinBookUsers from "@/../public/projects/odinbook/users.png"

import MessengerInterface from "@/../public/projects/messaging-app/interface.png"
import MessengerProfile from "@/../public/projects/messaging-app/profile.png"
import MessengerLogin from "@/../public/projects/messaging-app/login.png"

import WaldoWelcome from "@/../public/projects/where's-waldo/welcome.png"
import WaldoScoreboard from "@/../public/projects/where's-waldo/scoreboard.png"
import WaldoInterface from "@/../public/projects/where's-waldo/interface.png"

import BlogIndex from "@/../public/projects/blog-page/index.png"
import BlogCreatePost from "@/../public/projects/blog-page/create-post.png"
import BlogPost from "@/../public/projects/blog-page/post.png"
import BlogAuthor from "@/../public/projects/blog-page/author-index.png"

import FileUploaderInterface from "@/../public/projects/file-uploader/interface.png"
import FileUploaderLogin from "@/../public/projects/file-uploader/login.png"

import { Showcase } from "./definitions"


const Showcases = {
    odinbook: [{title: "Main Interface", image: OdinBookInterface}, {title: "Notifications Page", image: OdinBookNotifications}, {title: "Post Page", image: OdinBookPost}, {title: "Profile Page", image: OdinBookProfile}, {title: "Followers List", image: OdinBookUsers}, {title: "Login Page", image: OdinBookLogin} ],

    messaging_app: [{title: "Main Interface", image: MessengerInterface}, {title: "Profile Page", image: MessengerProfile}, {title: "Login Page", image: MessengerLogin}],

    where_is_waldo: [{title: "Welcome Page", image: WaldoWelcome}, {title: "Main Interface", image: WaldoInterface}, {title: "Leaderboard", image: WaldoScoreboard}],

    blog_page: [{title: "Visitors Main Page", image: BlogIndex}, {title: "Post Page", image: BlogPost}, {title: "Authors Index", image: BlogAuthor}, {title: "Post Creation", image: BlogCreatePost}],

    file_uploader: [{title: "Main Interface", image: FileUploaderInterface}, {title: "Login Page", image: FileUploaderLogin}]

} as const satisfies Record<string, Showcase[]>

export default Showcases