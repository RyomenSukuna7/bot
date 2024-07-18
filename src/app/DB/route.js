import { NextResponse } from "next/server";
import { Configuration,OpenAIApi } from "openai";

export async function POST(req){
    let payload=await req.json();
    const api=new Configuration({
        apiKey:"sk-proj-34saKGIGya7cfg9M3Dd3T3BlbkFJRXd2YjDQhtcCUQYuG6rC"
      })
    
      const openai=new OpenAIApi(api);  
    
        const chat=await openai.createChatCompletion({
          model:"gpt-3.5-turbo",
          messages:[{role:"user",content:payload.data}]
        })

        let data=chat.data.choices[0].message.content;


        return NextResponse.json({"kick":data})
}