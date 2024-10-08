'use client'
import Image from "next/image";
import React, {useState} from "react";

export default function Home() {
    const [essayContent, setEssayContent] = useState("")
    const [essayAuthor, setEssayAuthor] = useState("")

    return (
        <>
            <div className={" w-screen h-screen flex justify-center items-center "}>
                <div className={"flex justify-center items-center gap-4 m-6"}>
                    <Avatar image={"/unknown_mother_goose.jpg"}/>
                    <Essay content={essayContent} author={essayAuthor}/>
                </div>
            </div>
        </>
    );
}

interface AvatarProps {
    image: string
}

const Avatar: React.FC<AvatarProps> = ({image}) => {
    return (
        <div className={"w-40 h-40 rounded overflow-hidden"}>
            <Image src={`${image && image.trim() ? image : "/unknown_mother_goose.jpg"}`}
                   alt={`unknown_mother_goose.jpg`}
                   className={"object-cover w-full h-full"}
                   width={160}
                   height={160}/>
        </div>
    )
}

interface EssayProps {
    content: string,
    author: string,
}

const Essay: React.FC<EssayProps> = ({content, author}) => {
    return (
        <div className={"flex flex-col gap-2 w-60"}>
            <h1>
                {content && content.trim() ? content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, similique. Lorem ipsum dolor sit amet."}
            </h1>
            <h2 className={"text-end"}>
                ---{author && author.trim() ? author : "Lorem ipsum."}
            </h2>
        </div>
    )
}
