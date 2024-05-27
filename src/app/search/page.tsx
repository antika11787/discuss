import PostList from "@/components/posts/post-list";
import { fetchPostsBySearchparams } from "@/db/queries/posts";

interface SearchPageProps {
    searchParams: {
        term: string;
    }
}

export default function SearchPage({ searchParams }: SearchPageProps) {
    const { term } = searchParams;
    return (
        <div>
            <PostList fetchData={() => fetchPostsBySearchparams(term)} />
        </div>
    )
}