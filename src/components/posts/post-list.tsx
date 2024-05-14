import { db } from "@/db";

interface PostListProps {
    slug: string;
}

export default async function PostList({ slug }: PostListProps) {
    const posts = await db.post.findMany();
    const renderedPosts = posts.map((post) => {
        return (
            <div key={post.id}>
                <p>{post.title}</p>
            </div>
        )
    })
    return (
        <div>
            {renderedPosts}
        </div>
    )
}