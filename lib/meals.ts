import { Meal } from "@/app/meals/share/page";
import slugify from "slugify";
import xss from "xss";
import fs from "node:fs"
import { query } from "./db";

export const saveMeal = async (meal:Meal) => {
  const slug = slugify(meal.title,{lower:true})
  meal.instructions = xss(meal.instructions)

  const extensionImg = meal.image.name.split('.').pop();
  const fileName = `${Date.now()}_${slug}.${extensionImg}`

  const stream = fs.createWriteStream(`public/images/${fileName}`)
  const bufferImg = await meal.image.arrayBuffer();

  stream.write(Buffer.from(bufferImg), (err) => {
    if(err) {
      throw new Error("failed saving image!")
    }
  })
  stream.end()

  meal.image = `/images/${fileName}`
  
  await query(
    'insert into meals(title,slug,summary,instructions,image,creator,creator_email) values($1, $2, $3, $4, $5, $6, $7)',
    [meal.title,slug,meal.summary,meal.instructions,meal.image,meal.creator,meal.creator_email]
  )
}
