import React from "react";
import { usePostsData } from "../hooks/usePostsData";

interface PostContextData {
    id: string;
    author?: string;
    author_icon?: string;
    title: string;
    selftext?: string;
    thumbnail?: string;
    url?: string;
    created: any;
    num_comments ?: number;
    ups?: number;
    permalink?: string;
  }
  
  interface IPostsContextData {
    data?: PostContextData;
  }

export const postsContext = React.createContext<IPostsContextData[]>([]);

export function PostsContextProvider({children}:{children:React.ReactNode}) {
  const [posts] = usePostsData();
  
  return (
        <postsContext.Provider value={posts}>
            {children}
        </postsContext.Provider>
    )
}