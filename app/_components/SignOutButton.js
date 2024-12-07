import { ArrowRightEndOnRectangleIcon } from '@heroicons/react/24/solid';

function SignOutButton() {
  return (
    <button className='py-3 px-5 hover:bg-colors-primary-900 hover:text-colors-primary-100 transition-colors flex items-center gap-4 font-semibold text-colors-primary-200 w-full'>
      <ArrowRightEndOnRectangleIcon className='h-5 w-5 text-colors-primary-600' />
      <span>Sign out</span>
    </button>
  );
}

export default SignOutButton;