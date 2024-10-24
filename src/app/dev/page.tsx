import Image from 'next/image';
import PersiaComputer from '../PersiaComputer.jpg';

export default function Home() {
  return (
    <div className="min-h-screen min-w-full flex flex-col items-center justify-around bg-black">
      <div className='flex-shrink-0 w-fit'>
      <Image src={PersiaComputer} width={480} height={541} alt='picture of the computer this site is hosted on' title='its thinking'/>
      </div>
      <div className="text-green-300 font-mono flex-shrink-0 inline-block w-fit">
        dev.null.shoes - url rewrite worked
      </div>
    </div>
  );
}