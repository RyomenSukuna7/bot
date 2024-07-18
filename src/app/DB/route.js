import { NextResponse } from "next/server";
import { Configuration,OpenAIApi } from "openai";

export async function POST(req){
    let payload=await req.json();
    const api=new Configuration({
        apiKey:process.env.OPENAIKEY
      })
    
      const openai=new OpenAIApi(api);  
    
        const chat=await openai.createChatCompletion({
          model:"gpt-3.5-turbo",
          messages:[{role:"user",content:payload.data}]
        })

        let data=chat.data.choices[0].message.content;


        return NextResponse.json({"kick":data})
}
