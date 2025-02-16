import { query } from "./db"

export type StorePost = {
  title: string
  image_url:string
  content:string
  user_id: number
}

export type StoreUser = {
  first_name: string
  last_name:string
  email:string
}

export const getPost = async () => {
  const res = await query('select * from posts order by created_at desc',[]);
  return res;
}

export const findDetailPost = async (idPost:string) => {
  await query('select posts.id ,posts.title ,posts.image_url ,posts."content" ,users.first_name as creator,users.email as creator_email,posts.created_at from posts inner join users on posts.user_id = users.id where posts.id = $1 order by created_at desc',[idPost])
} 

export const findDetailPostByCreator = async (creatorName:string) => {
  await query('select posts.id ,posts.title ,posts.image_url ,posts."content" ,users.first_name as creator,users.email as creator_email,posts.created_at from users inner join posts on posts.user_id = users.id where users.first_name = $1 order by created_at desc',[creatorName])
}

export const getListCreator = async () => {
  await query('select distinct users.id,users.first_name,users.last_name,users.email from users inner join posts on posts.user_id = users.id ',[])
}

export const storeUser = async (user:StoreUser) => {
  await query('insert into users(first_name,last_name,email) values($1,$2,$3)',[user.first_name,user.last_name,user.email])
}

export const storePost = async (post:StorePost) => {
  await query('insert into posts(title,image_url,"content",user_id) values ($1,$2,$3,$4)',[post.title,post.image_url,post.content,post.user_id])
}