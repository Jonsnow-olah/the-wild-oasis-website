import { TrashIcon } from '@heroicons/react/24/solid';

function DeleteReservation({ bookingId }) {
  return (
    <button className='group flex items-center gap-2 uppercase text-xs font-bold text-colors-primary-300 flex-grow px-3 hover:bg-colors-accent-600 transition-colors hover:text-colors-primary-900'>
      <TrashIcon className='h-5 w-5 text-colors-primary-600 group-hover:text-colors-primary-800 transition-colors' />
      <span className='mt-1'>Delete</span>
    </button>
  );
}

export default DeleteReservation;