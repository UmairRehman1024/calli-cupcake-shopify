import clsx from 'clsx';
import Image from 'next/image';

export default function LogoSquare({ size }: { size?: 'sm' | undefined }) {
  return (
    <div
      className={clsx(
        'bg-SoftRose flex flex-none items-center justify-center border border-neutral-200 dark:border-neutral-700 dark:bg-black',
        {
          'h-[40px] w-[40px] rounded-xl': !size,
          'h-[30px] w-[30px] rounded-lg': size === 'sm'
        }
      )}
    >
      <Image
        src="/logo.png"
        width={32}
        height={32}
        alt="The calligraphy cupcake logo"
        // className={clsx({
        //   'h-[16px] w-[16px]': !size,
        //   'h-[10px] w-[10px]': size === 'sm'
        // })}
      />
    </div>
  );
}
