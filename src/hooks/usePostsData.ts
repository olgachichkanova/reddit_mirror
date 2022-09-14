import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/reducer";

interface PostData {
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
  
  interface IPostsData {
    data?: PostData;
  }
  
export function usePostsData(){
  const token = useSelector<RootState, string>(state => state.token);
    const [posts, setPosts] = useState<IPostsData[]>([]);
    useEffect(() => {
        axios.get('https://oauth.reddit.com/best.json', {headers: {Authorization: `bearer ${token}`}})
        .then((resp) => {
         const postsData = resp.data.data.children;
         if(postsData !== undefined){
          setPosts(postsData)
          }
        })
        .catch((err) => {
          console.log('error: ', err)
        });
      }, [token])
      return [posts];
}