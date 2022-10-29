import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/reducer";

export interface CommentData {
    id: string;
    author?: string;
    author_icon?: string;
    body?: string;
    created: any;
    replies: {
      data: {
        children: ICommentsData[]
      }
    };
  }
  
  export interface ICommentsData {
    data: CommentData;
  }
  
export function useCommentsData(id: string){
  const token = useSelector<RootState, string>(state => state.token);
    const [comments, setComments] = useState<ICommentsData[]>([]);
    const link = `https://oauth.reddit.com/comments/${id}.json`
    useEffect(() => {
        axios.get(link, {headers: {Authorization: `bearer ${token}`}})
        .then((resp) => {
         const commentsData = resp.data[1].data.children;
         if(commentsData !== undefined){
          setComments(commentsData)
          }
        })
        .catch((err) => {
          console.log('error: ', err)
        });
      }, [token])
      return [comments];
}