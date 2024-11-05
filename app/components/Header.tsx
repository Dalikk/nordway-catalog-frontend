import Image from 'next/image';
import { Divider } from '@mui/material';

export default function Header() {
  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="flex w-full flex-row justify-between p-5">
          <div>
            <Image
              src={`/nordway-logo.png`}
              alt={'nordway-logo'}
              width={100}
              height={50}
              className="rounded-xl"
            />
          </div>
          <div className="flex items-center">
            <h5>онлайн-каталог</h5>
          </div>
        </div>
      </div>
      <Divider />
    </div>
  );
}
