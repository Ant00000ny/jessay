'use client'
import Image from "next/image";
import React, {useRef, useState} from "react";
import {Input} from "@nextui-org/react";

export default function Home() {
    const [essayContent, setEssayContent] = useState("")
    const [essayAuthor, setEssayAuthor] = useState("")

    return (
        <div className={"min-h-screen overflow-hidden"}>
            <div className={"w-screen pt-40 px-4"}>
                <div className={"flex justify-center items-center gap-4"}>
                    <Avatar image={"/unknown_mother_goose.jpg"}/>
                    <Essay content={essayContent} author={essayAuthor}/>
                </div>
            </div>
            <div className={"px-10 pt-20 flex justify-center items-center"}>
                <InputFields author={essayAuthor}
                             setAuthor={setEssayAuthor}
                             content={essayContent}
                             setContent={setEssayContent}/>
            </div>
        </div>
    );
}

interface AvatarProps {
    image: string
}

const Avatar: React.FC<AvatarProps> = ({image}) => {
    const handleAvatarClick = () => {
        hiddenInputRef.current?.click()
    }

    const hiddenInputRef = useRef<HTMLInputElement>(null);

    return (
        <div className={"w-40 h-40 rounded overflow-hidden aspect-square min-w-40"}>
            <Image src={`${image && image.trim() ? image : "/unknown_mother_goose.jpg"}`}
                   alt={`unknown_mother_goose.jpg`}
                   className={"object-cover w-full h-full"}
                   width={160}
                   height={160}
                   onClick={handleAvatarClick}>
            </Image>
            <Input type={"file"} ref={hiddenInputRef}/>
        </div>
    )
}

interface EssayProps {
    content: string,
    author: string,
}

const Essay: React.FC<EssayProps> = ({content, author}) => {
    return (
        <div className={"flex flex-col gap-2 font-extrabold min-w-40 max-w-60"}>
            <p className={"text-wrap text-2xl"}>
                {content && content.trim() ? content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, similique. Lorem ipsum dolor sit amet."}
            </p>
            <p className={"text-end flex justify-end gap-2 text-xl"}>
                <span>—</span>
                <span>{author && author.trim() ? author : "Lorem ipsum."}</span>
            </p>
        </div>
    )
}

interface InputFieldsProps {
    content: string,
    setContent: React.Dispatch<React.SetStateAction<string>>,
    author: string,
    setAuthor: React.Dispatch<React.SetStateAction<string>>,
}

const InputFields: React.FC<InputFieldsProps> = ({content, setContent, author, setAuthor}) => {
    return (
        <div className="flex justify-center items-center flex-wrap gap-4 w-full max-w-96">
            <Input type="text"
                   label="Content"
                   value={content}
                   onValueChange={setContent}/>
            <Input type="text"
                   label="Author"
                   value={author}
                   onValueChange={setAuthor}/>
        </div>
    )
}
