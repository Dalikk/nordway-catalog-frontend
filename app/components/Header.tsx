import Image from "next/image";
import {Divider} from "@mui/material";

export default function Header() {
    return (
        <div>
            <div className="flex flex-col items-center">
                <div className="flex flex-row p-5 justify-between w-full">
                    <div>
                        <Image src={`/saidam-logo.png`} alt={'saidam-logo'} width={100} height={50}/>
                    </div>
                    <div className="flex items-center">
                        <h5>онлайн-каталог</h5>
                    </div>
                </div>
            </div>
            <Divider/>
        </div>
    )

}